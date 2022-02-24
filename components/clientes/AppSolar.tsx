import Image from "next/image";
import styles from "../../styles/Clientes.module.scss";

function AppSolar() {
  return (
    <div className={styles.app}>
      <div className={styles.appDesc}>
        <h1>Já conhece o nosso app?</h1>
        <p>
          Com ele você acompanha a geração de energia de sua usina e fica por
          dentro das nossas novidades.
        </p>
        <div className={styles.appStores}>
          <Image
            src="/images/play_store.png"
            alt="Play Store"
            width="100px"
            height="30px"
          />
          <Image
            src="/images/app_store.png"
            alt="App Store"
            width="100px"
            height="30px"
          />
        </div>
      </div>
      <Image
        src="/images/app1.jpg"
        alt="Screenshot App"
        height="230px"
        width="350px"
        layout="fixed"
      />
    </div>
  );
}

export default AppSolar;
