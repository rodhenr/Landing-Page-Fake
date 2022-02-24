import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.homeBg}>
      <Button variant="warning">ENTRE EM CONTATO</Button>
    </div>
  );
}

export default Home;
