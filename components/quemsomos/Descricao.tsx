import React from "react";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import styles from "../../styles/QuemSomos.module.scss";

function Quem() {
  return (
    <div className={styles.container}>
      <div className={`${styles.descricao}`}>
        <h1 className="mt-4 mb-3 fs-3">Solar Energia</h1>
        <p className="my-3 lh-sm">
          Somos uma empresa que possui 5 anos de atuação no mercado de energia
          solar fotovoltaica. Nosso portfólio possui usinas instaladas em
          diversos segmentos do mercado, contando com mais de 200 sistemas
          homologados e em pleno funcionamento, seguindo todas as normas
          técnicas requeridas. Contamos com colaboradores certificados e em
          constante aperfeiçoamento.
        </p>

        <Stack className={`${styles.dataWrapper} align-items-center my-5`}>
          <div>
            <h1 className="m-0 text-h1rimary fs-2">+5 Milhões</h1>
            <p className="my-0 fs-6">Reais economizados</p>
            <hr className="my-1" />
          </div>
          <div>
            <h1 className="m-0 text-success fs-2"> +2mil unidades </h1>
            <p className="my-0 fs-6">Árvores Cultivadas</p>
            <hr className="my-1" />
          </div>
          <div>
            <h1 className="m-0 text-danger fs-2"> +10mil unidades</h1>
            <p className="my-0 fs-6">Painéis instalados</p>
          </div>
        </Stack>
      </div>
      <div className={styles.descricaoImg}>
        <Image src="/images/image1.png" alt="alt" height="700" width="700" />
      </div>
    </div>
  );
}

export default Quem;
