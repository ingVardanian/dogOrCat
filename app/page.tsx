import styles from "./page.module.css";
import FinalPage from "./FinalPage/FinalPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <FinalPage />
    </div>
  );
}
