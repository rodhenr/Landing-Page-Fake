import Image from "next/image";
import React from "react";

interface Props {
  text: string;
  imgName: string;
}

function Beneficio({ text, imgName }: Props) {
  return (
    <div>
      <Image
        src={`/images/${imgName}`}
        alt={imgName}
        width="50px"
        height="1px"
        layout="responsive"
        objectFit="contain"
      />
      <p>{text}</p>
    </div>
  );
}

export default Beneficio;
