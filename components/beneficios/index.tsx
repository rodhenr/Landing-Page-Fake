import React from "react";
import Beneficio from "./Beneficio";

function index() {
  return (
    <div>
      <h1></h1>
      <Beneficio
        text={"Não polui, é renovável, limpa e sustentável"}
        imgName="beneficios_casa.png"
      />
      <Beneficio
        text={"Economia de até 95% na conta de luz"}
        imgName="beneficios_casa.png"
      />
      <Beneficio
        text={"Ocupa pouco espaço e valoriza o imóvel"}
        imgName="beneficios_casa.png"
      />
      <Beneficio
        text={"Não polui, é renovável, limpa e sustentável"}
        imgName="beneficios_casa.png"
      />
      <Beneficio
        text={"Vida útil de mais de 25 anos, pagando-se em até 7 anos"}
        imgName="beneficios_casa.png"
      />
      <Beneficio
        text={"Necessidade mínima de manutenção"}
        imgName="beneficios_casa.png"
      />
    </div>
  );
}

export default index;
