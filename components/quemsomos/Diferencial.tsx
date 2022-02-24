import Box from "./Box";
import { Button } from "react-bootstrap";
import styles from "../../styles/QuemSomos.module.scss";

function QuemSomos() {
  return (
    <div className={styles.diferencial}>
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
          "Nosso setor de de Venda e Engenharia estão aptos a apresentar e detalhar todas as vantagens dos produtos e processos, sanando dúvidas decorrentes do seu projeto."
        }
      />
      <div className={styles.simule}>
        <p>Quer saber quanto custa para instalar energia solar?</p>
        <Button variant="warning">SIMULE SEU PROJETO</Button>
      </div>
    </div>
  );
}

export default QuemSomos;
