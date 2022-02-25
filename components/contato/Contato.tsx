import React from "react";

interface Props {
  title: string;
  text: string;
}

function Contato({ title, text }: Props) {
  return (
    <div>
      <h1 className="m-0 text-primary fs-3">{title}</h1>
      <p className="m-0 fs-6">{text}</p>
    </div>
  );
}

export default Contato;
