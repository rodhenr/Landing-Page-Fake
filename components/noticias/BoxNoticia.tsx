import Image from "next/image";

interface Props {
  text: string;
  imgName: string;
}

function BoxNoticia({ text, imgName }: Props) {
  return (
    <div>
      <Image src={`/images/${imgName}`} alt="Noticia" />
      <p>{text}</p>
    </div>
  );
}

export default BoxNoticia;
