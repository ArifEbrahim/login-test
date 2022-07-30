import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  const { onClick, text } = props;

  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      <span className={styles["btn-text"]}>{text}</span>
    </button>
  );
}
