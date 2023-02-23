import React from "react";
import styles from "./_01.module.css";
import { ChallengeBox } from "../../components";

export default function _01() {
  return (
    <ChallengeBox>
      <div className={styles.frame}>
        <div className={styles.center}>
          <div className={styles.number}>
            <div className={styles.oneOne}></div>
            <div className={styles.oneTwo}></div>
            <div className={styles.zeroOne}></div>
            <div className={styles.zeroTwo}></div>
          </div>
          <span className={styles.big}>Days</span>
          <span className={styles.small}>CSS Challenge</span>
        </div>
      </div>
    </ChallengeBox>
  );
}
