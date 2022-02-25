import Box from "./Box";
import { Button, Stack } from "react-bootstrap";
import styles from "../../styles/QuemSomos.module.scss";

function QuemSomos() {
  return (
    <Stack>
      <Box
        title={"PRODUTOS CONFIÁVEIS"}
        text={
          "Trabalhamos com as melhores marcas do mercado, fruto de uma seleção técnica minuciosa entre as maiores fabricantes mundiais."
        }
      />
      <Box
        title={"SERVIÇO DIFERENCIADO"}
        text={
          "Contamos com equipes dedicadas de instaladores, altamente capacitados e certificados para uma execução profissional do seu projeto."
        }
      />
      <Box
        title={"PÓS-VENDA ATIVO"}
        text={
          "Nosso setor de Vendas está apto a apresentar todas as vantagens dos produtos e processos, sanando dúvidas decorrentes do seu projeto."
        }
      />
      <Stack className={`${styles.simule} align-items-center justify-content-evenly`}>
        <p className="m-0 fs-4 text-center">Quer saber quanto custa para instalar energia solar?</p>
        <Button variant="warning">SIMULE SEU PROJETO</Button>
      </Stack>
    </Stack>
  );
}

export default QuemSomos;
