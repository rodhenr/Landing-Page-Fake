import Image from "next/image";
import { Stack, Row, Col } from "react-bootstrap";
import styles from "../../styles/Clientes.module.scss";

function AppSolar() {
  return (
    <Stack
      className={`${styles.app} py-5 px-3 justify-content-center align-items-center`}
    >
      <Row className="m-0 p-0">
        <Col xs="12" md="7">
          <Stack className={`${styles.appContainer} p-0`}>
            <Row>
              <h1 className="fs-3 m-0 p-0 text-center">
                Já conhece o nosso app?
              </h1>
            </Row>
            <Row>
              <p className="mt-3 mb-0 p-0">
                Com ele você acompanha a geração de energia de sua usina e fica
                por dentro das nossas novidades.
              </p>
            </Row>
            <div className={styles.appStore}>
              <Row className="mt-5">
                <Image
                  src="/images/play_store.png"
                  alt="Play Store"
                  height="50px"
                  width="180px"
                />
              </Row>
              <Row className="mt-5">
                <Image
                  src="/images/app_store.png"
                  alt="App Store"
                  height="50px"
                  width="180px"
                />
              </Row>
            </div>
          </Stack>
        </Col>
        <Col className={`${styles.appImgContainer} p-0 text-start mt-4`}>
          <Image
            src="/images/app1.png"
            alt="Screenshot App"
            layout="fixed"
            width={200}
            height={350}
            className={`${styles.appImg} px-1`}
          />
        </Col>
      </Row>
    </Stack>
  );
}

export default AppSolar;
