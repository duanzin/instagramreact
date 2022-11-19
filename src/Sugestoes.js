import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const itens = [
    {
      userimg: "assets/img/bad.vibes.memes.svg",
      username: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      userimg: "assets/img/chibirdart.svg",
      username: "chibirdart",
      razao: "Segue você",
    },
    {
      userimg: "assets/img/razoesparaacreditar.svg",
      username: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      userimg: "assets/img/adorable_animals.svg",
      username: "adorable_animals",
      razao: "Segue você",
    },
    {
      userimg: "assets/img/smallcutecats.svg",
      username: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
        {itens.map((item) => (
          <Sugestao
            key={item.username}
            userimg={item.userimg}
            username={item.username}
            razao={item.razao}
          />
        ))}
    </div>
  );
}
