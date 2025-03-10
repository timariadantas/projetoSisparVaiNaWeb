import { useNavigate } from "react-router-dom";
import Logo from "../../assets/TelaLogin/logoLogin.png";
import styles from "./Login.module.scss";

function Login() {
  const navigate = useNavigate(); //Iniciando o hook useNavigate

  const irParaReembolsos = () => {
    navigate("/reembolsos"); //Redirecionando para a página de reembolsos
  };

  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerFoto}></section>

      <section className={styles.formWapper}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR </h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />

          <p>Esqueci minha senha</p>

          <section className={styles.botoes}>
            <button
              className={styles.boxButtonEntrar}
              onClick={irParaReembolsos}
            >
              Entrar
            </button>
            <button className={styles.buttonCriarConta}>Criar conta</button>
          </section>
        </form>
      </section>
    </main>
  );
}
export default Login;
