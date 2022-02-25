import React from "react";
import styles from "../../styles/QuemSomos.module.scss";

interface Props {
  title: string;
  text: string;
}

function Box({ title, text }: Props) {
  return (
    <div className={`${styles.box} py-3 px-4`}>
      <h1 className="fs-3 mb-3">{title}</h1>
      <p className="fs-6 lh-sm m-0">{text}</p>
    </div>
  );
}

export default Box;
