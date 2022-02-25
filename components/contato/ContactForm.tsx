import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import styles from "../../styles/Contato.module.scss";

function ContactForm() {
  const [state, setState] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    mensagem: "",
  });
  const [submit, setSubmit] = useState(false);

  function handleChange(
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    console.log(evt);
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    setSubmit(true);
  }

  return (
    <div>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <FloatingLabel controlId="name" label="Nome" className="mb-1">
          <Form.Control
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
            disabled={submit}
          />
        </FloatingLabel>

        <FloatingLabel controlId="email" label="E-mail" className="mb-1">
          <Form.Control
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            disabled={submit}
          />
        </FloatingLabel>

        <FloatingLabel controlId="telefone" label="Telefone" className="mb-1">
          <Form.Control
            type="text"
            name="telefone"
            placeholder="Telefone"
            onChange={handleChange}
            disabled={submit}
          />
        </FloatingLabel>

        <FloatingLabel controlId="cidade" label="Cidade" className="mb-1">
          <Form.Control
            type="text"
            name="cidade"
            placeholder="Cidade"
            onChange={handleChange}
            disabled={submit}
          />
        </FloatingLabel>
        <Form.Control
          as="textarea"
          style={{ height: "200px" }}
          placeholder="Mensagem"
          name="mensagem"
          onChange={handleChange}
          disabled={submit}
        />
        <Button
          variant="warning"
          type="submit"
          className="my-2"
          disabled={submit}
        >
          Enviar
        </Button>
      </Form>
      {submit && (
        <p className="text-success pt-3">
          Formulário enviado! Agradecemos pelo contato.
        </p>
      )}
    </div>
  );
}

export default ContactForm;
