import styles from "./page.module.css";
import { _00, _01, _02 } from "./challenges";

export default function Home() {
  return (
    <main className={styles.main}>
      <_02 />
      <_01 />
      <_00 />
    </main>
  );
}
