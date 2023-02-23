import React from "react";
import styles from "./_02.module.scss";
import { ChallengeBox } from "../../components";

export default function _02() {
  return (
    <ChallengeBox>
      <div className={styles.frame}>
        <div className={styles.center}>
          <div className={styles.menuIcon}>
            <div className={`${styles.line1}  ${styles.noAnimation}`}> </div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
    </ChallengeBox>
  );
}
