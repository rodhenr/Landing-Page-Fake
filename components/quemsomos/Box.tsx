import React from "react";
import styles from "../../styles/QuemSomos.module.scss";

interface Props {
  title: string;
  text: string;
}

function Box({ title, text }: Props) {
  return (
    <div className={styles.box}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Box;
