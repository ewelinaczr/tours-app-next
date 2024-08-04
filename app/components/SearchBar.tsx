"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";

export default function SearchBar() {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <input className={styles.input}></input>
      <Image
        className={styles.searchIcon}
        src="/search.svg"
        alt="Search icon"
        width={15}
        height={15}
      />
      <button
        className={`${styles.button} ${highlighted && styles.highlighted}`}
        onClick={() => setHighlighted(!highlighted)}
      >
        <Image
          className={`${styles.filterIcon} ${
            highlighted && styles.iconHighlighted
          }`}
          src="/filters.svg"
          alt="Filter button"
          fill
        />
      </button>
    </div>
  );
}
