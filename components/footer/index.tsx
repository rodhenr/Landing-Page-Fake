import styles from "../../styles/Footer.module.scss";

function index() {

    const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className="m-0">&copy; Solar Energia - {year} | Todos os direitos reservados</p>
    </footer>
  );
}

export default index;
