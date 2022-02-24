import React from "react";
import Beneficio from "./Beneficio";
import styles from "../../styles/Beneficios.module.scss";

function index() {
  return (
    <section id="beneficios" className={styles.container}>
      <h1>VANTAGENS DA ENERGIA SOLAR</h1>
      <div className={styles.beneficios}>
        <Beneficio
          text={"Não polui, é renovável, limpa e sustentável"}
          imgName="beneficios_ambiente.png"
        />
        <Beneficio
          text={"Economia de até 95% na conta de luz"}
          imgName="beneficios_economia.png"
        />
        <Beneficio
          text={"Ocupa pouco espaço e valoriza o imóvel"}
          imgName="beneficios_casa.png"
        />
        <Beneficio
          text={"Vida útil de mais de 25 anos, pagando-se em até 7 anos"}
          imgName="beneficios_despesas.png"
        />
        <Beneficio
          text={"Necessidade mínima de manutenção"}
          imgName="beneficios_manutencao.png"
        />
      </div>
    </section>
  );
}

export default index;
