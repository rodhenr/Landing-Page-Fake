import React from "react";
import Beneficio from "./Beneficio";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Beneficios.module.scss";

function index() {
  return (
    <section id="beneficios" className={styles.container}>
      <Container>
        <Row>
          <h1 className="text-center fs-3 mb-5">VANTAGENS DA ENERGIA SOLAR</h1>
        </Row>
        <div>
          <Row>
            <Beneficio
              text={"Não polui, é renovável, limpa e sustentável"}
              imgName="beneficios_ambiente.png"
            />
          </Row>
          <Row>
            <Beneficio
              text={"Economia de até 95% na conta de luz"}
              imgName="beneficios_economia.png"
            />
          </Row>
          <Row>
            <Beneficio
              text={"Ocupa pouco espaço e valoriza o imóvel"}
              imgName="beneficios_casa.png"
            />
          </Row>
          <Row>
            <Beneficio
              text={"Vida útil de mais de 25 anos, pagando-se em até 7 anos"}
              imgName="beneficios_despesas.png"
            />
          </Row>
          <Row>
            {" "}
            <Beneficio
              text={"Necessidade mínima de manutenção"}
              imgName="beneficios_manutencao.png"
            />
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default index;
