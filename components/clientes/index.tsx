import { Stack } from "react-bootstrap";
import ClientBox from "./ClientBox";
import AppSolar from "./AppSolar";
import styles from "../../styles/Clientes.module.scss";

function index() {
  return (
    <section id="clientes" className={styles.container}>
      <Stack>
        <h1 className="fs-3 m-4 mt-5">NOSSOS TRABALHOS</h1>
        <ClientBox text={"FAZENDINHA 3 IRMÃOS"} imgName="solar1.jpg" />
        <ClientBox text={"A&B CONFECÇÕES"} imgName="solar2.jpg" />
        <ClientBox text={"AMERICANOS"} imgName="solar3.jpg" />
        <ClientBox text={"BANCO XYZ"} imgName="solar4.webp" />
        <AppSolar />
      </Stack>
    </section>
  );
}

export default index;
