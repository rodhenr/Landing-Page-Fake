import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";

function NavbarComponent() {
  return (
    <aside>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-0 m-0">
        <Container>
          <Navbar.Brand href="#home" className={styles.navImg}>
            <Image src="/images/logo.png" alt="" width="110" height="65"  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className={`${styles.navContainer} text-center`} id="basic-navbar-nav"
          >
            <Nav className="ms-auto p-2">
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
