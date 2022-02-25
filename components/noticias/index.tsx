import BoxNoticia from "./BoxNoticia";
import styles from "../../styles/Noticias.module.scss";

function index() {
  return (
    <section id="noticias" className={`${styles.container} my-4 mx-3`}>
      <h1 className="fs-3 mt-4 mb-3 p-1">
        ÚLTIMAS NOTÍCIAS SOBRE ENERGIA SOLAR
      </h1>
      <div className={styles.box}>
        <BoxNoticia
          text={"Cientistas do MIT desenvolvem dispositivo..."}
          imgName="noticia1.jpg"
        />
        <BoxNoticia
          text={"Canadian Solar fornecerá energia..."}
          imgName="noticia2.jpg"
        />
        <BoxNoticia
          text={"Painéis solares levam luz e oportunidades..."}
          imgName="noticia3.jpg"
        />
      </div>
      <div className={`${styles.seeMore} text-end d-block`}>
        <a href="#">VER MAIS</a>
      </div>
    </section>
  );
}

export default index;
