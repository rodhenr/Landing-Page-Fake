import Box from "./Box";
import { Button, Stack } from "react-bootstrap";
import styles from "../../styles/QuemSomos.module.scss";

function QuemSomos() {
  return (
    <Stack className={`${styles.diferencialContainer}`}>
      <div style={{ backgroundColor: "#0e2f8c", gridArea: "one", order: "1" }}>
        <Box
          title={"PRODUTOS CONFIÁVEIS"}
          text={
            "Trabalhamos com as melhores marcas do mercado, fruto de uma seleção técnica minuciosa entre as maiores fabricantes mundiais."
          }
        />
      </div>
      <div style={{ backgroundColor: "#0196C1", gridArea: "two", order: "4" }}>
        <Box
          title={"SERVIÇO DIFERENCIADO"}
          text={
            "Contamos com equipes dedicadas de instaladores, altamente capacitados e certificados para uma execução profissional do seu projeto."
          }
        />
      </div>
      <div style={{ backgroundColor: "#0e2f8c", gridArea: "three", order: "2" }}>
        <Box
          title={"PÓS-VENDA ATIVO"}
          text={
            "Nosso setor de Vendas está apto a apresentar todas as vantagens dos produtos e processos, sanando dúvidas decorrentes do seu projeto."
          }
        />
      </div>
      <div style={{ backgroundColor: "#0196C1", gridArea: "four", order: "3" }}>
        <Box
          title={"MELHOR PREÇO DO MERCADO"}
          text={
            "Possuímos o melhor preço do mercado, faça já seu orçamento sem compromisso com nossa empresa."
          }
        />
      </div>
      <Stack
        style={{ gridArea: "simule", order: "5" }}
        className={`${styles.simule} align-items-center justify-content-evenly`}
      >
        <p className="m-0 fs-4 text-center">
          Quer saber quanto custa para instalar energia solar?
        </p>
        <Button variant="warning">SIMULE SEU PROJETO</Button>
      </Stack>
    </Stack>
  );
}

export default QuemSomos;
