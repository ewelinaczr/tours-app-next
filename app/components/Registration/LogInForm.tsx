"use client";
import React, { FormEvent, useState } from "react";
import { getUserByEmail } from "@/app/services/apiUsers";
import { doCredentialLogin } from "@/app/actions";
import styles from "./RegistrationForm.module.css";

function LogInForm() {
  const [message, setMessage] = useState<string | undefined>(undefined);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("userEmail") as string;
      const password = formData.get("password") as string;
      if (email && password) {
        const userExists = await getUserByEmail(email);
        if (!userExists) {
          return setMessage("Account does not exist. Create new account");
        }
        const response = doCredentialLogin(email, password);
        if (!response) {
          return setMessage("Invalid credentials. Try again.");
        }
      } else {
        return setMessage("Fill in all form fields.");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleFormSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="userEmail" className={styles.inputLabel}>
            User email
          </label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            className={styles.input}
            onClick={() => setMessage(undefined)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.inputLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            onClick={() => setMessage(undefined)}
          />
        </div>
        <span className={styles.message}>{message ?? ""}</span>
        <input type="submit" value="Submit" className={styles.button}></input>
      </form>
    </>
  );
}

export default LogInForm;
