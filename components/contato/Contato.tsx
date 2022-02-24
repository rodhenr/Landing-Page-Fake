import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  text: string;
  imgName: string;
}

function Contato({ title, imgName, text }: Props) {
  return (
    <div>
      <Image src={`/images/${imgName}`} alt="Contato" width="50px" height="1px" layout="responsive" objectFit="contain"/>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default Contato;
