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
      <span className={styles.title}>{title}</span>
      <div className={styles.subtitlePrice}>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.cost}>
          <span className={styles.price}>${price}</span> per person
        </p>
      </div>
    </div>
  );
}

export default DetailsTitle;
