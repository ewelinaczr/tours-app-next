"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./CheckboxButton.module.css";

function Checkbox({
  label,
  handleSelected,
}: {
  label: string;
  handleSelected: Dispatch<SetStateAction<any>>;
}) {
  const [selected, setSelected] = useState<boolean>(false);

  function handleClick(label: string): void {
    setSelected((prev) => !prev);
    handleSelected(label);
  }

  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${selected ? styles.checked : ""}`}
        id={`check-${label}`}
        type="checkbox"
        checked={true}
        onChange={() => handleClick(label)}
      ></input>
      <label htmlFor={`check-${label}`}>{label}</label>
    </div>
  );
}

export default Checkbox;
