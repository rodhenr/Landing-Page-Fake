import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <aside>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-0 m-0">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/images/logo.png" alt="" width="110" height="65" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center p-2">
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
    </aside>
  );
}

export default NavbarComponent;
