import React from "react";
import styles from "./Banner.module.css";
import Button from "../Button/Button";

function Banner({ buttonText, handleClick }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>coffee discover</h1>
      <p className={styles.subtitle}>Discover your local coffee store</p>
      <Button>{buttonText}</Button>
    </div>
  );
}

export default Banner;
