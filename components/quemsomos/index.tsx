import React from "react";
import Descricao from "./Descricao";
import Diferencial from "./Diferencial";
import styles from "../../styles/QuemSomos.module.scss";

function index() {
  return (
    <section id="sobre" className={styles.quemSomos}>
      <Descricao />
      <Diferencial />
    </section>
  );
}

export default index;
