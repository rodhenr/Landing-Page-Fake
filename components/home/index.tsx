import Home from "./Home";
import NavbarComponent from "./NavbarComponent";
import styles from "../../styles/Home.module.scss";

function index() {
  return (
    <header id="home">
      <NavbarComponent />
      <Home />
    </header>
  );
}

export default index;
