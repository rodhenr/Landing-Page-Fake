import React from "react";
import Header from "../components/home/index";
import QuemSomos from "../components/quemsomos/index";
import Beneficios from "../components/beneficios/index";
import Clientes from "../components/clientes/index";
import Contato from "../components/contato/index";
import Footer from "../components/footer/index";
import Noticias from "../components/noticias/index";
import "bootstrap/dist/css/bootstrap.css";

function index() {
  return (
    <>
      <Header />
      <QuemSomos />
      <Beneficios />
      <Clientes />
      <Noticias />
      <Contato />
      <Footer />
    </>
  );
}

export default index;
