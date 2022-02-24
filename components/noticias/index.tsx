import BoxNoticia from "./BoxNoticia";

function index() {
  return (
    <div>
      <h1>FIQUE POR DENTRO DAS ÚLTIMAS NOTÍCIAS SOBRE ENERGIA SOLAR</h1>
      <div>
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
        <BoxNoticia text={"blablabla"} imgName="solar5.jpg" />
      </div>
    </div>
  );
}

export default index;
