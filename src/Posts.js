import Post from "./Post";

const itens = [
  {
    userimg: "assets/img/meowed.svg",
    usernome: "meowed",
    conteudo: "assets/img/gato-telefone.svg",
    likerimg: "assets/img/respondeai.svg",
    likername: "respondeai",
    curtidas: 101.523,
  },
  {
    userimg: "assets/img/barked.svg",
    usernome: "barked",
    conteudo: "assets/img/dog.svg",
    likerimg: "assets/img/adorable_animals.svg",
    likername: "adorable_animals",
    curtidas: 99.159,
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {itens.map((item) => (
        <Post
          key = {item.usernome}
          usernome = {item.usernome}
          userimg={item.userimg}
          conteudo={item.conteudo}
          likerimg={item.likerimg}
          likername={item.likername}
          curtidas={item.curtidas}
        />
      ))}
    </div>
  );
}
