import react from "react";

export default function Post(props) {
  const [bookmark, setbookmark] = react.useState("bookmark-outline");
  const [coracao, setcoracao] = react.useState("heart-outline");
  const [coricone, setcoricone] = react.useState("black");
  const [likes, setlikes] = react.useState(props.curtidas);

  function gostar() {
    switch (coracao) {
      case "heart-outline":
        setcoracao("heart");
        setcoricone("red");
        setlikes((props.curtidas + 0.001).toFixed(3));
        break;

      default:
        setcoracao("heart-outline");
        setcoricone("black");
        setlikes(props.curtidas);
        break;
    }
  }

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.userimg} />
          {props.usernome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.conteudo} data-test="post-image" onClick={gostar} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              style={{ color: coricone }}
              name={coracao}
              onClick={gostar}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              name={bookmark}
              onClick={() =>
                bookmark === "bookmark-outline"
                  ? setbookmark("bookmark")
                  : setbookmark("bookmark-outline")
              }
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likerimg} />
          <div className="texto">
            Curtido por <strong>{props.likername}</strong> e
            <strong data-test="likes-number"> outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
