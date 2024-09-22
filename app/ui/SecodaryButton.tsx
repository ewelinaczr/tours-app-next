import styles from "./SecondaryButton.module.css";

export default function SecondaryButton({
  label,
  mainAction,
  handleClick,
}: {
  label: string;
  mainAction?: boolean;
  handleClick: () => void;
}) {
  return (
    <button
      className={`${styles.button} ${mainAction ? styles.main : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
