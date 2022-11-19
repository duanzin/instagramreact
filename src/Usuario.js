import react from "react";

export default function Usuario(props) {
  const [name, setname] = react.useState(props.nomeusuario);
  const [imagem, setimg] = react.useState(props.pfp);

  function mudanome() {
    const novonome = prompt("digite o novo nome");
    setname(novonome);
  }

  function mudaimg() {
    const novapfp = prompt("cole o link da nova imagem");
    setimg(novapfp);
  }

  return (
    <div className="usuario" data-test="user">
      <img src={imagem} data-test="profile-image" onClick={mudaimg} />
      <div className="texto">
        <strong>{props.nomestrong}</strong>
        <span data-test="name">
          {name}
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={mudanome}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
