import Image from "next/image";

function AppSolar() {
  return (
    <div>
      <div>
        <h1>Já conhece o nosso app?</h1>
        <p>
          Com ele você acompanha a geração de energia de sua usina e fica por
          dentro das nossas novidades.
        </p>
        <Image
          src="/images/play_store.png"
          alt="Play Store"
          width="50px"
          height="1px"
          layout="responsive"
          objectFit="contain"
        />
        <Image
          src="/images/app_store.png"
          alt="App Store"
          width="50px"
          height="1px"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <Image
        src="/images/app1.jpg"
        alt="Screenshot App"
        width="50px"
        height="1px"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
}

export default AppSolar;
