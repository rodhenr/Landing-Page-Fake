import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";

function index() {
  return (
    <header id="home">
      <Navbar />
      <Home />
    </header>
  );
}

export default index;
