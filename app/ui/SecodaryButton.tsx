import Image from "next/image";
import styles from "./SecondaryButton.module.css";

export default function SecondaryButton({
  label,
  handleClick,
  mainAction,
  icon,
}: {
  label: string;
  handleClick: () => void;
  mainAction?: boolean;
  icon?: string;
}) {
  return (
    <button
      className={`${styles.button} ${mainAction ? styles.main : ""}`}
      onClick={handleClick}
    >
      {icon && (
        <Image
          className={styles.icon}
          width={10}
          height={10}
          src={icon}
          alt="icon"
        />
      )}
      {label}
    </button>
  );
}
