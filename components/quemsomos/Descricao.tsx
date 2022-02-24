import React from "react";
import styles from "../../styles/QuemSomos.module.scss";

function Quem() {
  return (
    <div className={styles.descricao}>
      <h1>Solar Energia</h1>
      <p>
        Somos uma empresa que possui 5 anos de atuação no mercado de energia
        solar fotovoltaica. Nosso portfólio possui usinas instaladas em diversos
        segmentos do mercado, contando com mais de 200 sistemas homologados e em
        pleno funcionamento, seguindo todas as normas técnicas requeridas.
        Contamos com colaboradores certificados e em constante aperfeiçoamento.
      </p>
      <div className={styles.dataWrapper}>
        <div className={styles.dataOne}>
          <p>+5 Milhões</p>
          <p>Reais economizados</p>
          <hr />
        </div>
        <div className={styles.dataTwo}>
          <p> +2mil unidades </p>
          <p>Árvores Cultivadas</p>
          <hr />
        </div>
        <div className={styles.dataThree}>
          <p> +10mil unidades</p>
          <p>Painéis instalados</p>
        </div>
      </div>
    </div>
  );
}

export default Quem;
