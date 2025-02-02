import Image from "next/image";
import styles from "../components/Registration/AuthPage.module.css";
import { doLogout, updateProfileAction, getLoggedUser } from "../actions";

export default async function Page() {
  const user = await getLoggedUser();
  if (!user) {
    return <p>No user</p>;
  }

  return (
    <div>
      <h5>Welcome {user.name}</h5>
      <form action={doLogout}>
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
            alt="google log out button"
          />
          Sign out
        </button>
      </form>
      <form action={updateProfileAction}>
        <div className={styles.inputContainer}>
          <label htmlFor="userName" className={styles.inputLabel}>
            User name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className={styles.input}
            defaultValue={user.name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="userEmail" className={styles.inputLabel}>
            User email
          </label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            className={styles.input}
            defaultValue={user.email}
          />
        </div>
        <input type="submit" value="Submit" className={styles.button}></input>
      </form>
    </div>
  );
}
