import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
import Fechar from "../../assets/Header/sair.png";
import Perfil from "../../assets/Header/image.png";
import Home from "../../assets/Header/Botão-Home.png";
import Reembolso from "../../assets/Header/Botão-Reembolso.png";
import Pesquisa from "../../assets/Header/Botão-Pesquisa.png";
import Historico from "../../assets/Header/Botão-Histórico.png";
import Sair from "../../assets/Header/sair.png";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navBarEstilo}>
      <button
        className={styles.buttonSair}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Fechar} alt="imagem de abrir e fechar" />
      </button>

      <section>
        <img src={Perfil} alt="imagem do perfil" />

        <div className={styles.boxButton}>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Home} alt="Imagem da Home" />
          </button>

          <button
            onClick={() => {
              navigate("/solicitacao");
            }}
          >
            <img src={Reembolso} alt="Imagem de Reembolso" />
          </button>

          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Pesquisa} alt="Imagem de Pesquisa" />
          </button>

          <button
            onClick={() => {
              navigate("/solicitacao");
            }}
          >
            <img src={Historico} alt="Imagem de Reembolso" />
          </button>
        </div>
      </section>

      <button
        className={styles.buttonSair}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Sair} alt="Imagem para sair " />
      </button>
    </nav>
  );
}

export default NavBar;
