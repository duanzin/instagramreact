import react from "react";

export default function Usuario(props) {
  const [name, setname] = react.useState(props.nomeusuario);
  const [imagem, setimg] = react.useState(props.pfp);

  if (!name) {
    setname(prompt("digite o novo nome"));
  }

  if (!imagem) {
    setimg(prompt("cole o link da nova imagem"));
  }

  return (
    <div className="usuario" data-test="user">
      <img
        src={imagem}
        data-test="profile-image"
        onClick={() => setimg(prompt("cole o link da nova imagem"))}
      />
      <div className="texto">
        <strong>{props.nomestrong}</strong>
        <span data-test="name">
          {name}
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={() => setname(prompt("digite o novo nome"))}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
