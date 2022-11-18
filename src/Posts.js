import Post from "./Post";

const itens = [
  {
    userimg: "assets/img/meowed.svg",
    conteudo: "assets/img/gato-telefone.svg",
    likerimg: "assets/img/respondeai.svg",
    likername: "respondeai",
    curtidas: 101.523,
  },
  {
    userimg: "assets/img/barked.svg",
    conteudo: "assets/img/dog.svg",
    likerimg: "assets/img/adorable_animals.svg",
    likername: "adorable_animals",
    curtidas: 99.159,
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {itens.map((item) => (
        <Post
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
