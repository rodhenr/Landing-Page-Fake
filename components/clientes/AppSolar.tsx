import Image from "next/image";
import { Stack, Row, Col } from "react-bootstrap";
import styles from "../../styles/Clientes.module.scss";

function AppSolar() {
  return (
    <Stack className={`${styles.app} py-5 px-3`}>
      <Row className="m-0 p-0">
        <Col xs="7">
          <Stack>
            <Row>
              <h1 className="fs-3 m-0">Já conhece o nosso app?</h1>
            </Row>
            <Row>
              <p className="mt-3 mb-0">
                Com ele você acompanha a geração de energia de sua usina e fica
                por dentro das nossas novidades.
              </p>
            </Row>
            <div className={`${styles.appDownload} align-self-center`}>
              <Row className="mt-4">
                <Image
                  src="/images/play_store.png"
                  alt="Play Store"
                  width="140px"
                  height="40px"
                />
              </Row>
              <Row className="mt-3">
                <Image
                  src="/images/app_store.png"
                  alt="App Store"
                  width="140px"
                  height="40px"
                />
              </Row>
            </div>
          </Stack>
        </Col>
        <Col xs="5" className="p-0 text-center">
          <Image
            src="/images/app1.jpg"
            alt="Screenshot App"
            height="310px"
            width="160px"
          />
        </Col>
      </Row>
    </Stack>
  );
}

export default AppSolar;
