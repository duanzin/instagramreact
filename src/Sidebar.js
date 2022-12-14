import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Usuario
        nomestrong="catanacomics"
        nomeusuario="Catana"
        pfp="assets/img/catanacomics.svg"
      />
      <Sugestoes />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
