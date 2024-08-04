import Image from "next/image";
import Link from "next/link";
import styles from "./NavButton.module.css";

export default function NavButton({
  text,
  link,
  icon,
  highlighted,
  select,
}: {
  text: string;
  link: string;
  icon: string;
  highlighted: boolean;
  select?: () => void;
}) {
  return (
    <Link href={link}>
      <button
        className={`${styles.button} ${highlighted && styles.highlighted}`}
        onClick={select}
      >
        <Image
          className={`${styles.icon} ${highlighted && styles.iconHighlighted}`}
          src={icon}
          alt={text}
          width={15}
          height={15}
        />
        {text}
      </button>
    </Link>
  );
}
/*

<div> position: relative, aspect ratio: 1/1 
<Image className={styles.icon} fill src={icon} alt={text} /> 
object fit: cover
</div>;
*/
