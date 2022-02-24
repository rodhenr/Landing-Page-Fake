import Image from "next/image";
import styles from "../../styles/Noticias.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function BoxNoticia({ text, imgName }: Props) {
  return (
    <div>
      <Image
        src={`/images/${imgName}`}
        alt="Noticia"
        height="180px"
        width="180px"
        layout="fixed"
      />
      <p>{text}</p>
    </div>
  );
}

export default BoxNoticia;
