import Home from "./Home";
import NavbarComponent from "./NavbarComponent";


function index() {
  return (
    <header id="home">
      <NavbarComponent />
      <Home />
    </header>
  );
}

export default index;
