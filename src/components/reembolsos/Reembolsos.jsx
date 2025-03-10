import Home from "../../assets/Dashbord/home.png";
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

function Reembolsos() {
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
              {" "}
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico.
            </p>
          </div>

          <section className={styles.containerCards}>
            <article>
              <img src={Solicitar} alt="" />
              <h3>Solicitar Reembolso</h3>
            </article>

            <article>
              <img src={Analise} alt="" />
              <h3>Verificar Análise</h3>
            </article>

            <article>
              <img src={Historico} alt="" />
              <h3>Historico</h3>
            </article>
          </section>

          <section className={styles.containerStatus}>
            <div>
              <img
                className={styles.imgSolicitados}
                src={NumeroSolicitados}
                alt=""
              />
              <h4>182</h4>
              <p>Solicitados</p>
            </div>

            <div>
              <img className={styles.imgAnalises} src={NumeroAnalises} alt="" />
              <h4>74</h4>
              <p>Em Análise</p>
            </div>

            <div>
              <img
                className={styles.imgAprovados}
                src={NumeroAprovados}
                alt=""
              />
              <h4>195</h4>
              <p>Aprovados</p>
            </div>

            <div>
              <img
                className={styles.imgAnalises}
                src={NumeroRejeitados}
                alt=""
              />
              <h4>41</h4>
              <p>Rejeitados</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Reembolsos;
