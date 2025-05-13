import Home from "../../assets/Dashbord/home.png";
import Sistema from "../../assets/Dashbord/Sistema-atualizado.png";
import Seta from "../../assets/Dashbord/Vector.png";
import Solicitar from "../../assets/Dashbord/Solicitar-Reembolso.png";
import Analise from "../../assets/Dashbord/Análises.png";
import Historico from "../../assets/Dashbord/Solicitar-Histórico.png";
import NumeroAnalises from "../../assets/Dashbord/N-Análises.png";
import NumeroAprovados from "../../assets/Dashbord/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashbord/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashbord/N-Solicitados.png";
import NavBar from "../navbar/NavBar.jsx";
import styles from "./Reembolsos.module.scss";
import { useNavigate } from "react-router-dom";

function Reembolsos() {
  const navigate = useNavigate()
  return (
    <div className={styles.containerReembolsos}>
      <NavBar />
      <div>
        <header>
          <img src={Home} alt="Espaço Header" />
          <img src={Seta} alt="Seta da Header" />
          <p>Reembolsos</p>
        </header>

        <main className={styles.mainReembolsos}>
          <div>
            <h1>Sistema de Reembolsos</h1>
            <p>
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico.
            </p>
          </div>

          <section className={styles.containerCards}>
            <article className={styles.card} onClick={() => {navigate(("/solicitacao"))}}>
              <img src={Solicitar} alt="logo de solicitar" />
              <h3>Solicitar Reembolso</h3>
            </article>

            <article className={styles.card}>
              <img src={Analise} alt="logo de analise" />
              <h3>Verificar Análise</h3>
            </article>

            <article className={styles.card}>
              <img src={Historico} alt="logo de historico" />
              <h3>Historico</h3>
            </article>
          </section>

          <section className={styles.containerStatus}>
            <div>
              <img
                className={styles.imgSolicitados}
                src={NumeroSolicitados}
                alt="logo de solicitados"
              />
              <h4>182</h4>
              <p>Solicitados</p>
            </div>

            <div>
              <img className={styles.imgAnalises} src={NumeroAnalises} alt="logo de analises" />
              <h4>74</h4>
              <p>Em Análise</p>
            </div>

            <div>
              <img
                className={styles.imgAprovados}
                src={NumeroAprovados}
                alt="logo de aprovados"
              />
              <h4>195</h4>
              <p>Aprovados</p>
            </div>

            <div>
              <img
                className={styles.imgAnalises}
                src={NumeroRejeitados}
                alt="logo de rejeitados"
              />
              <h4>41</h4>
              <p>Rejeitados</p>
            </div>
          </section>

          <section className={styles.containerSistema}> 
            <img src={Sistema} alt="" />
            <a href="">Sistema Atualizado</a>

          </section>
        </main>
      </div>
    </div>
  );
}
export default Reembolsos;
