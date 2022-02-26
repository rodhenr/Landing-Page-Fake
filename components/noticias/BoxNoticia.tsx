import Image from "next/image";
import styles from "../../styles/Noticias.module.scss";

interface Props {
  text: string;
  imgName: string;
}

function BoxNoticia({ text, imgName }: Props) {
  return (
    <div className={`mt-2 mb-4 p-1 text-center ${styles.boxNoticias}`}>
      <div className={`${styles.boxImg}`}>
        <Image
          src={`/images/${imgName}`}
          alt="Noticia"
          height="250x"
          width="300px"
          layout="fixed"
        />
        <div>
          <a
            href="https://clickpetroleoegas.com.br/cientistas-do-mit-desenvolvem-dispositivo-movido-a-energia-solar-de-apenas-r-20-capaz-de-dessalinizar-a-agua/"
            className="text-center"
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BoxNoticia;
