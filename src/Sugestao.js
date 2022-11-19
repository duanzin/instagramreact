export default function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.userimg} />
        <div className="texto">
          <div className="nome">{props.username}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
