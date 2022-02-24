import React from "react";

interface Props {
  title: string;
  text: string;
}

function Box({ title, text }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Box;
