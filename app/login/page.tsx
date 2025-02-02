import Image from "next/image";
import Link from "next/link";
import LogInForm from "../components/Registration/LogInForm";
import { doSocialLogin } from "../actions";
import styles from "../components/Registration/AuthPage.module.css";

const renderGoogleRegistrationButton = () => {
  return (
    <form action={doSocialLogin}>
      <button
        type="submit"
        name="action"
        value="google"
        className={styles.googleButton}
      >
        <Image
          width={15}
          height={15}
          className={styles.googleIcon}
          src={"/googleIcon.svg"}
          alt="google sign in button"
        />
        Continue with Google
      </button>
    </form>
  );
};

const renderGithubRegistrationButton = () => {
  return (
    <form action={doSocialLogin}>
      <button
        type="submit"
        name="action"
        value="github"
        className={styles.googleButton}
      >
        <Image
          width={15}
          height={15}
          className={styles.googleIcon}
          src={"/googleIcon.svg"}
          alt="github sign in button"
        />
        Continue with Github
      </button>
    </form>
  );
};

export default function Page() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.logInButtonContainer}>
        <p>Don't have an account?</p>
        <Link href={`/signup`}>
          <span className={styles.logInButton}>Sign up</span>
        </Link>
      </div>
      <h5 className={styles.signIn}>Log in to book a Trip!</h5>
      <LogInForm></LogInForm>
      {renderGoogleRegistrationButton()}
      {renderGithubRegistrationButton()}
    </div>
  );
}
