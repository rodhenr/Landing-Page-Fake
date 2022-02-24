import Box from "./Box";

function QuemSomos() {
  return (
    <div>
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
      <div>
        <p>Quer saber quantos custa para instalar energia solar?</p>
        <button>SIMULE SEU PROJETO</button>
      </div>
    </div>
  );
}

export default QuemSomos;
