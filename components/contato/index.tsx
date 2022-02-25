import React from "react";
import Contato from "./Contato";
import ContactForm from "./ContactForm";
import { Stack, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/Contato.module.scss";

function index() {
  return (
    <section id="contato" className={`bg-light bg-gradient p-4 my-5 ${styles.container}`}>
      <Stack className={`${styles.contatoInfo} mb-5 text-center`}>
        <h1 className="fs-2 mb-1">Entre em Contato</h1>
        <p className="mb-3 text-muted">
          Utilize um dos canais abaixo para entrar em contato
        </p>
        <div className="my-3">
          <FontAwesomeIcon icon={faLocationDot} />
          <Contato
            title={"ENDEREÇO"}
            text={"Rua Sem Nome Nenhum, n°111 - Cidade Y - MG"}
          />
        </div>
        <div className="mb-3">
          <FontAwesomeIcon icon={faEnvelope} />
          <Contato title={"E-MAIL"} text={"contato.solarenergia@email.com"} />
        </div>
        <div className="mb-3">
          <FontAwesomeIcon icon={faPhone} />
          <Contato
            title={"TELEFONE"}
            text={"(99) 99999-9999"}
          />
        </div>
        <div className="mb-3">
          <FontAwesomeIcon icon={faWhatsapp} />
          <Contato title={"WHATSAPP"} text={"Clique aqui para conversar"} />
        </div>
      </Stack>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}

export default index;
