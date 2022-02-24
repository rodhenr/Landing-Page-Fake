import Image from "next/image";
import React from "react";
import styles from "../../styles/Beneficios.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function Beneficio({ text, imgName }: Props) {
  return (
    <div className={styles.beneficiosBox}>
      <div>
        <Image
          src={`/images/${imgName}`}
          alt={imgName}
          width="50px"
          height="50px"
        />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Beneficio;
