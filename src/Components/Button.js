import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  const { onClick, text, colour, type = 'button' } = props;

  return (
    <button
      className={colour === "light" ? styles["btn-light"] : styles["btn-dark"]}
      onClick={onClick}
      type={type}
    >
      <span
        className={
          colour === "light"
            ? styles["btn-text-dark"]
            : styles["btn-text-light"]
        }
      >
        {text}
      </span>
    </button>
  );
}
