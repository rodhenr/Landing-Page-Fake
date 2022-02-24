import Image from "next/image";

interface Props {
  text: string;
  imgName: string;
}

function ClientBox({ text, imgName }: Props) {
  return (
    <div>
      <Image
        src={`/images/${imgName}`}
        alt="Cliente"
        width="50px"
        height="1px"
        layout="responsive"
        objectFit="contain"
      />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ClientBox;
