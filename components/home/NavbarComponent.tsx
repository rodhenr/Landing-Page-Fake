import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <aside>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width="50"
              height="30"
              layout="responsive"
              objectFit="contain"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#quemsomos">QUEM SOMOS</Nav.Link>
              <Nav.Link href="#beneficios">BENEFÍCIOS</Nav.Link>
              <Nav.Link href="#clientes">CLIENTES</Nav.Link>
              <Nav.Link href="#noticias">NOTÍCIAS</Nav.Link>
              <Nav.Link href="#contato">CONTATO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav>
        <ul>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Benefícios</li>
          <li>Clientes</li>
          <li>Notícias</li>
          <li>Contato</li>
        </ul>
      </nav> */}
    </aside>
  );
}

export default NavbarComponent;
