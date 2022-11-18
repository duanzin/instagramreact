export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.pfp} />
      <div class="texto">
        <strong>{props.nomestrong}</strong>
        <span>
          {props.nomeusuario}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
