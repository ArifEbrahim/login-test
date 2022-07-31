import React from "react";
import styles from './Header.module.css'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h2>{props.text}</h2>
    </header>
  );
}
