import Image from "next/image";
import ClientBox from "./ClientBox";
import AppSolar from "./AppSolar";
import styles from "../../styles/Clientes.module.scss";

function index() {
  return (
    <section id="clientes" className={styles.container}>
      <h1>NOSSOS TRABALHOS</h1>
      <div className={styles.clientes}>
        <ClientBox text={"FAZENDINHA 3 IRMÃOS"} imgName="solar1.jpg" />
        <ClientBox text={"A&B CONFECÇÕES"} imgName="solar2.jpg" />
        <ClientBox text={"OIA O POSTE"} imgName="solar3.jpg" />
        <ClientBox text={"OIA O POSTE"} imgName="solar4.webp" />
      </div>
      <AppSolar />
    </section>
  );
}

export default index;
