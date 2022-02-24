import Image from "next/image";

function Home() {
  return (
    <div>
      <Image
        src="/images/casa_topo.png"
        alt="Ilustração casa"
        width="50px"
        height="1px"
        layout="responsive"
        objectFit="contain"
      />
      <button>Entre em Contato</button>
    </div>
  );
}

export default Home;
