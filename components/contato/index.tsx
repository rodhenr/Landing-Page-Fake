import React from "react";
import Contato from "./Contato";
import { Form, Button, FloatingLabel } from "react-bootstrap";
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
    <section id="contato" className={styles.container}>
      <div className={styles.contato}>
        <h1>Entre em Contato</h1>
        <p>Utilize um dos canais abaixo para entrar em contato</p>
      </div>

      <div className={styles.contatoDesc}>
        <div className={styles.contatoItem}>
          <FontAwesomeIcon icon={faLocationDot} />
          <Contato
            title={"ENDEREÇO"}
            text={"Avenida Senador Salgado Filho, São Leopoldo - RS"}
          />
        </div>
        <div className={styles.contatoItem}>
          <FontAwesomeIcon icon={faEnvelope} />
          <Contato title={"E-MAIL"} text={"conecta.energiasolar@gmail.com"} />
        </div>
        <div className={styles.contatoItem}>
          <FontAwesomeIcon icon={faPhone} />
          <Contato
            title={"TELEFONE"}
            text={"(51) 99715-0692 e (51) 99653-5109"}
          />
        </div>
        <div className={styles.contatoItem}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <Contato title={"WHATSAPP"} text={"Clique aqui para conversar"} />
        </div>
      </div>
      <Form className={styles.form}>
        <FloatingLabel controlId="name" label="Nome" className="mb-2">
          <Form.Control type="text" placeholder="Nome" />
        </FloatingLabel>

        <FloatingLabel controlId="name" label="E-mail" className="mb-2">
          <Form.Control type="email" placeholder="E-mail" />
        </FloatingLabel>

        <FloatingLabel controlId="name" label="Telefone" className="mb-2">
          <Form.Control type="text" placeholder="Telefone" />
        </FloatingLabel>

        <FloatingLabel controlId="name" label="Cidade" className="mb-2">
          <Form.Control type="text" placeholder="Cidade" />
        </FloatingLabel>
        <Form.Control
          as="textarea"
          style={{ height: "200px" }}
          placeholder="Mensagem"
        />
        <Button variant="warning" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
}

export default index;
