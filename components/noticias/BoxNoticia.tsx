import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Noticias.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function BoxNoticia({ text, imgName }: Props) {
  return (
    <Container className={`mt-2 mb-4 p-1 text-center ${styles.boxNoticias}`}>
      <Row>
        <Col>
          <Image
            src={`/images/${imgName}`}
            alt="Noticia"
            height="250x"
            width="300px"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://clickpetroleoegas.com.br/cientistas-do-mit-desenvolvem-dispositivo-movido-a-energia-solar-de-apenas-r-20-capaz-de-dessalinizar-a-agua/"
            className="text-center"
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default BoxNoticia;
