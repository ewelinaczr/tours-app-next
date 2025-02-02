import Image from "next/image";
import RegistrationForm from "../components/Registration/RegistrationForm";
import styles from "../components/Registration/AuthPage.module.css";
import Link from "next/link";
import { doSocialLogin } from "../actions";

const renderGoogleRegistrationButton = () => {
  return (
    <form action={doSocialLogin}>
      <button className={styles.googleButton}>
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

export default function Page() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.logInButtonContainer}>
        <p>Already have an account?</p>
        <Link href={`/login`}>
          <span className={styles.logInButton}>Log in</span>
        </Link>
      </div>
      <h5 className={styles.signIn}>Sign in to book a Trip!</h5>
      <RegistrationForm></RegistrationForm>
      {renderGoogleRegistrationButton()}
    </div>
  );
}
