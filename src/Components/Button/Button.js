import React from "react";
import styles from "./Button.module.css";

export const Button = ({ action }) => {
  return (
    <button className={styles.Button} onClick={action}>
      Load more
    </button>
  );
};
