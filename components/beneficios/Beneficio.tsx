import Image from "next/image";
import React from "react";
import styles from "../../styles/Beneficios.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function Beneficio({ text, imgName }: Props) {
  return (
    <div className="mb-4">
      <div className={`${styles.beneficioBox}`}>
        <div className={`${styles.beneficioImg} p-1 md-1`}>
          <Image
            src={`/images/${imgName}`}
            alt={imgName}
            width="50px"
            height="50px"
            layout="fixed"
          />
        </div>
        <div>
          <p className={`${styles.beneficiosText} m-0`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Beneficio;
