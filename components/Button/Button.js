import React from "react";
import styles from "./Button.module.css";

function Button({ children, styleButton = "primary" }) {
  return (
    <button
      className={`${styles.button} ${
        styleButton === "primary"
          ? styles.buttonPrimary
          : styles.buttonSecondary
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
