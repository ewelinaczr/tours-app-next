"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserByEmail } from "@/app/services/apiUsers";
import { doCredentialSignup } from "@/app/actions";
import styles from "./RegistrationForm.module.css";

async function RegistrationForm() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const router = useRouter();

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("userName") as string;
      const email = formData.get("userEmail") as string;
      const password = formData.get("password") as string;
      const passwordConfirm = formData.get("confirmPassword") as string;
      if (name && email && password && passwordConfirm) {
        const userExists = await getUserByEmail(email);
        if (userExists) {
          return setMessage("User already exist, try to log in.");
        }
        if (password !== passwordConfirm) {
          return setMessage("Paswords have to be the same.");
        }
        if (password.length < 8) {
          return setMessage("Pasword must have at least 8 characters.");
        }
        const response = doCredentialSignup(
          name,
          email,
          password,
          passwordConfirm
        );
        if (!response) {
          return setMessage("Something went wrong. Try again");
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
          <label htmlFor="userName" className={styles.inputLabel}>
            User name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className={styles.input}
            onClick={() => setMessage(undefined)}
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
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword" className={styles.inputLabel}>
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
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

export default RegistrationForm;
