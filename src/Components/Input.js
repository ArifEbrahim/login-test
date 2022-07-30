import React from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  const { onChange, label, value, id, type } = props;

  return (
    <>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        data-testid={`${id}-input`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={styles.input}
      />
    </>
  );
}
