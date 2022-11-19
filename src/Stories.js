import Story from "./Story";

const itens = [
  { imagem: "assets/img/9gag.svg", nomeusuario: "9gag" },
  { imagem: "assets/img/meowed.svg", nomeusuario: "meowed" },
  { imagem: "assets/img/barked.svg", nomeusuario: "barked" },
  {
    imagem: "assets/img/nathanwpylestrangeplanet.svg",
    nomeusuario: "nathanwpylestrangeplanet",
  },
  { imagem: "assets/img/wawawicomics.svg", nomeusuario: "wawawicomics" },
  { imagem: "assets/img/respondeai.svg", nomeusuario: "respondeai" },
  { imagem: "assets/img/filomoderna.svg", nomeusuario: "filomoderna" },
  { imagem: "assets/img/memeriagourmet.svg", nomeusuario: "memeriagourmet" },
];

export default function Stories() {
  return (
    <div className="stories">
      {itens.map((item) => (
        <Story
          key={item.nomeusuario}
          imagem={item.imagem}
          nomeusuario={item.nomeusuario}
        />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
