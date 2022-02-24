import { Button } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.homeBg}>
      <Button variant="warning">SIMULE SEU PROJETO</Button>
    </div>
  );
}

export default Home;
