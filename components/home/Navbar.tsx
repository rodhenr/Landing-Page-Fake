import logo from "../../images/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <aside>
      <Image src={"/images/logo.png"} alt="logo" width="50px" height="1px" layout="responsive" objectFit="contain"/>
      <nav>
        <ul>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Benefícios</li>
          <li>Clientes</li>
          <li>Notícias</li>
          <li>Contato</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
