import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Beneficios.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function Beneficio({ text, imgName }: Props) {
  return (
    <Container className="mb-4">
      <Row className="align-items-center">
        <Col className="p-1 md-1">
          <Image
            src={`/images/${imgName}`}
            alt={imgName}
            width="50px"
            height="50px"
          />
        </Col>
        <Col xs="10" md="11">
          <p className={`${styles.beneficiosText} m-0`}>{text}</p> {/* arrumar aqui - text align center */}
        </Col>
      </Row>
    </Container>
  );
}

export default Beneficio;
