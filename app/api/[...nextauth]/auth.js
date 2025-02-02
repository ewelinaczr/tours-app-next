import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { login, signUp } from "@/app/services/apiAuth";
import { updateMyProfile } from "@/app/services/apiUsers";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      async authorize(credentials) {
        const { name, email, password, passwordConfirm, update } = credentials;
        try {
          let user;
          if (update) {
            user = await updateMyProfile({
              name,
              email,
            });
          } else {
            user = name
              ? await signUp({
                  name,
                  email,
                  password,
                  passwordConfirm,
                })
              : await login({
                  email,
                  password,
                });
          }
          if (user) {
            return user;
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          console.error(err);
        }
      },
    }),
  ],
  callbacks: {
    pages: {
      signIn: "/login",
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.user.name;
        token.id = user.user._id;
        token.email = user.user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.id = token._id;
      session.user.email = token.email;
      return session;
    },
  },
});
