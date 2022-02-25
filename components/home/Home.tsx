import { Button } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className={`${styles.homeBg} d-flex justify-content-end align-items-end`}>
      <Button variant="warning" className="m-3">
        SIMULE SEU PROJETO
      </Button>
    </div>
  );
}

export default Home;
