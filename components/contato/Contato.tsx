import React from "react";
import styles from "../../styles/Contato.module.scss";

interface Props {
  title: string;
  text: string;
}

function Contato({ title, text }: Props) {
  return (
    <div className={styles.boxContato}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Contato;
