import React from "react";
import styles from "./DetailsTitle.module.css";

function DetailsTitle({
  title,
  subtitle,
  price,
}: {
  title: string;
  subtitle: string;
  price: number;
}) {
  return (
    <div>
      <div className={styles.titlePrice}>
        <span className={styles.title}>{title}</span>
        <p className={styles.cost}>
          <span className={styles.price}>${price}</span> per person
        </p>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default DetailsTitle;
