import Spinner from "../ui/Spinner";
import styles from "../ui/Spinner.module.css";

export default function Loading() {
  return (
    <div className={styles.spinnerTour}>
      <Spinner></Spinner>
      <p>LOADING TOUR DATA</p>
    </div>
  );
}
