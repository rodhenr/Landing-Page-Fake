import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../../styles/Clientes.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function ClientBox({ text, imgName }: Props) {
  return (
    <div
      className={styles.box}
      style={{ background: `url(/images/${imgName})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}
    >
      <div className={styles.boxText}>
        <Button variant="warning">{text}</Button>
      </div>
    </div>
  );
}

export default ClientBox;
