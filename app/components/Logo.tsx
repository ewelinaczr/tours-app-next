import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <Link href="/tours">
        <Image
          src="/logo.png"
          alt="Discover Asia logo"
          width={40}
          height={40}
        />
      </Link>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Discover Asia</h1>
        <p className={styles.subtitle}>Where Heritage Meets Modernity</p>
      </div>
    </div>
  );
}
