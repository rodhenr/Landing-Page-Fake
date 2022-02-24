import BoxNoticia from "./BoxNoticia";
import styles from "../../styles/Noticias.module.scss";

function index() {
  return (
    <div className={styles.container}>
      <h1>FIQUE POR DENTRO DAS ÚLTIMAS NOTÍCIAS SOBRE ENERGIA SOLAR</h1>
      <div className={styles.box}>
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
      </div>
    </div>
  );
}

export default index;
