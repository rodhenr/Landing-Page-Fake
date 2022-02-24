import React from "react";
import Contato from "./Contato";

function index() {
  return (
    <section>
      <div>
        <h1>Entre em Contato</h1>
        <p>Utilize um dos canais abaixo para entrar em contato</p>
      </div>

      <div>
        <Contato
          imgName="logo.png"
          title={"ENDEREÇO"}
          text={
            "Avenida Senador Salgado Filho, 2120, Scharlau São Leopoldo, RS, 93120-000"
          }
        />
        <Contato
          imgName="logo.png"
          title={"E-MAIL"}
          text={"conecta.energiasolar@gmail.com"}
        />
        <Contato
          imgName="logo.png"
          title={"TELEFONE"}
          text={"(51) 99715-0692 e (51) 99653-5109"}
        />
        <Contato
          imgName="logo.png"
          title={"WHATSAPP"}
          text={"Clique aqui para conversar"}
        />
      </div>
      <form>
          <input type="text" name="nome" placeholder="Nome" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="telefone" placeholder="Telefone" />
          <input type="text" name="cidade" placeholder="Cidade" />
          <textarea name="mensagem" id="mensagem" cols={30} rows={10} />
          <button>ENVIAR</button>
      </form>
    </section>
  );
}

export default index;
