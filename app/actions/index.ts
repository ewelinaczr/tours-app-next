"use server";
import { auth, signIn, signOut } from "../api/[...nextauth]/auth";

export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/profile" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/tours" });
}

export async function doCredentialLogin(email: string, password: string) {
  return await signIn("credentials", {
    email,
    password,
    redirectTo: "/tours",
  });
}

export async function doCredentialSignup(
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
) {
  return await signIn("credentials", {
    name,
    email,
    password,
    passwordConfirm,
    redirectTo: "/tours",
  });
}

export async function updateProfileAction(formData: any) {
  const name = formData.get("userName");
  const email = formData.get("userEmail");
  return await signIn("credentials", {
    name,
    email,
    update: true,
  });
}

export async function getLoggedUser() {
  const session = await auth();
  const name = session?.user?.name;
  const email = session?.user?.email;
  if (name && email) {
    return { name, email };
  }
  return null;
}
