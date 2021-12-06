import React from "react";
import styles from "./Button.module.css";

function Button({ children, styleButton = "primary", handler }) {
  return (
    <button
      className={`${styles.button} ${
        styleButton === "primary"
          ? styles.buttonPrimary
          : styles.buttonSecondary
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default Button;
