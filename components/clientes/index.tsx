import Image from "next/image";
import ClientBox from "./ClientBox";
import AppSolar from "./AppSolar";

function index() {
  return (
    <section>
      <ClientBox text={"JOÃO PÉ DE FEIJÃO"} imgName="solar1.jpg" />
      <ClientBox text={"QUEIJO & CIA"} imgName="solar1.jpg" />
      <ClientBox text={"OIA O POSTE"} imgName="solar1.jpg" />
      <ClientBox text={"OIA O POSTE"} imgName="solar1.jpg" />
      <AppSolar />
    </section>
  );
}

export default index;
