import React from "react";
import styles from "./challengeBox.module.css";

export default function ChallengeBox(props: any) {
  const { children } = props;
  return <div className={styles.box}>{children}</div>;
}
