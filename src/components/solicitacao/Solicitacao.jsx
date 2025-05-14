import {useState, useEffect} from "react";
import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashbord/home.png";
import Seta from "../../assets/Dashbord/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Salvar from "../../assets/Solicitacao/+.png";
import Check from "../../assets/Solicitacao/check.png";
import Cancelar from"../../assets/Solicitacao/deletar.png";

import Api from "../../Services/Api.jsx"  // importando a conexão



function Solicitacao() {

  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador

  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa

  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação

  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição

  const [data, setData] = useState(""); // Estado para o campo data

  const [motivo, setMotivo] = useState(""); // Estado para o campo motivo

  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso

  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo

  const [ordemInterna, setorOrdemInterna] = useState(""); // Estado para o campo ordem interna

  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão

  const [pep, setPep] = useState(""); // Estado para o campo pep

  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda

  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km

  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km

  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado

  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

  const [dadosReembolso, setDadosReembolso] = useState([]);

  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (enviado) {
      setDadosReembolso([]); // Limpa os dados após o envio
      setEnviado(false); // Reseta o estado de controle
    }
  }, [enviado]);

  const handleSubmit = () => {
    const objetoReembolso = {
      empresa,
      colaborador,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa,
    };

    setDadosReembolso(dadosReembolso.concat(objetoReembolso));

    limparCampos(); //quando clicar em salvar, ativa a função de limpar os campos
  };

  //--------------------FUNÇÃO PARA ENVIAR OS DADOS PARA O BD -----------
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0NDM5ODU5NiwianRpIjoiOTdkNWI0YmUtOTU3My00ZmEzLTlkY2ItMjE2MGY3MmRiZmUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjEiLCJuYmYiOjE3NDQzOTg1OTYsImNzcmYiOiIwNGViOTcwNy05NDFjLTQwYWItOTJiZS04ZjU0MTliNGFmOTQiLCJleHAiOjE3NDQzOTk0OTZ9.R87xKzHSVishWF8ZNjWnRnhfoEmS0GXx4sN2y6TUR70";

     //// Função que será chamada quando quisermos enviar os dados do reembolso
  const enviarParaAnalise = async () => {
    try {
      // const response = o resultado da resposta do servidor
      // await(esperar) faz o codigo espere a resposta da api 
      // api e a nossa
      // post = é o metodo que serve para enviar algo para o servidor (1 é o argumento é o caminnho da rota , 2 é o argumento o que sera enviado)
      const response = await Api.post("/refunds/new", dadosReembolso, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      setEnviado(true); // Aciona o useEffect
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const handleDelete = (index) => {
    setDadosReembolso(dadosReembolso.filter((item, i) => i !== index));
  };

  const limparCampos = () => {
    setColaborador(""),
      setEmpresa(""),
      setnPrestacao(""),
      setDescricao(""),
      setData(""),
      setMotivo(""),
      setTipoReembolso(""),
      setCentroCusto(""),
      setorOrdemInterna(""),
      setDivisao(""),
      setPep(""),
      setMoeda(""),
      setDistanciaKm(""),
      setValorKm(""),
      setValorFaturado(""),
      setDespesa("");
  };

  const cancelarSolicitacao = () => {
    setDadosReembolso([]); // limpa todos os dados salvos
    limparCampos(); // limpa os inputs também (se quiser)
  };


  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor da casinha" />
          <img src={Seta} alt="Vetor da setinha" />
          <p> Reembolsos</p>
          <img src={Seta} alt="Vetor da setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>

          <form onSubmit={(e) => e.preventDefault()}
          className={styles.formSolicitacao}>

            <div className={styles.grupo1}>
              <div className={styles.inputNome}>

                <label htmlFor="nome">Nome Completo</label>
                <input value={colaborador} name="colaborador" onChange={(e) => setColaborador(e.target.value)}type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input 
                name="empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)} 
                type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="prestacao">Nº Prest. Contas</label>
                <input 
                value={nPrestacao}
                onChange={(e) => setnPrestacao(e.target.value)}
                type="number"
                name="nPrestacao" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="descricao"> Descrição / Motivo do Reembolso </label>
                <textarea name="descricao" 
                value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="date">Data</label>
                <input  
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  type="date"
                  name="data" />
              </div>

              <div className={styles.tipoDeDespesas}>
                <label htmlFor="tipoReembolso"> Tipo de Despesa </label>

                <select value={tipoReembolso}
                  name="tipoReembolso"
                  onChange={(e) => setTipoReembolso(e.target.value)}
                  id="tipoReembolso">

                  <option value="selecionar">Selecionar</option>
                  <option value="alimentacao"> Alimentação </option>
                  <option value="combustivel"> Combustível</option>
                  <option value="conducao"> Condução</option>
                  <option value="estacionamento"> Estacionamento</option>
                  <option value="viagem adm"> Viagem Admin.</option>
                  <option value="viagem oper"> Viagem Operacional</option>
                  <option value="eventos"> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="custo"> Centro de Custo </label>

                <select  value={centroCusto}
                  onChange={(e) => setCentroCusto(e.target.value)}
                  name="centroCusto"
                  id="centroCusto">
                  <option value=""> Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>
              <div className={styles.ordem}>
              <label htmlFor="ordemInterna">Ord. Int.</label>
                <input
                  value={ordemInterna}
                  name="ordemInterna"
                  onChange={(e) => setorOrdemInterna(e.target.value)}
                  id="ordemInterna"
                  type="text"/>
                </div>

                <div className={styles.divisoes}>
                <label htmlFor="divisao">Div.</label>
                <input
                  type="text"
                  id="divisao"
                  onChange={(e) => setDivisao(e.target.value)}
                  name="divisao"
                  value={divisao}
                />
              </div>


              <div className={styles.pep}>
                <label htmlFor="pep">PEP</label>
                <input
                  value={pep}
                  onChange={(e) => setPep(e.target.value)}
                  name="pep"
                  id="PEP"
                  type="text"
                />
              </div>


              <div className={styles.moeda}>
                <label htmlFor="moeda">Moeda</label>
                <select
                  value={moeda}
                  onChange={(e) => setMoeda(e.target.value)}
                  name="moeda"
                  id="coents"
                >

                  <option value="">Selecionar</option>
                  <option value="brl">BRL</option>
                  <option value="ars">ARS</option>
                  <option value="usd">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="distancia">Dist. / Km</label>
                <input
                  value={distanciaKm}
                  name="distanciaKm"
                  onChange={(e) => setDistanciaKm(e.target.value)}
                  id="distance-input"
                  type="text"
                />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="valor">Valor / Km</label>
                <input
                  value={valorKm}
                  onChange={(e) => setValorKm(e.target.value)}
                  name="valorKm"
                  type="text"
                />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="faturado"> Val. Faturado </label>
                <input
                  type="text"
                  name="valorFaturado"
                  value={valorFaturado}
                  onChange={(e) => setValorFaturado(e.target.value)}
                />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="taxa"> Despesa </label>
                <input
                  type="text"
                  id="despesa"
                  name="despesa"
                  value={despesa}
                  onChange={(e) => setDespesa(e.target.value)}
                />
              </div>

              <div className={styles.botoes}>
                <button
                  className={styles.salvar}
                  onClick={handleSubmit}
                  type="submit"
                >
                  <img src={Salvar} alt="" /> Salvar
                </button>

                <button
                  className={styles.deletar}
                  type="button"
                  onClick={() => {
                    limparCampos();
                  }}
                >
                  <img src={Deletar} alt="" />
                </button>
              </div>
            </div>
          </form>


          {/* table é a tag principal que vai definir a tabela */}
          {/* thead é a tag que agrupa o cabeçalho */}
          {/* tr é a linha da tabela */}
          {/* th título da tabela, um para cada título, ex: nome - idade - estado */}
          {/* tbody agrupa o corpo da tabela (os dados que será recebido) */}

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
            {dadosReembolso.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className={styles.btnLixeira}
                    >
                      <img
                        className={styles.lixeira}
                        src={Lixeira}
                        alt="Deletar"
                      />
                    </button>
                  </td>
                  <td>{item.colaborador}</td>
                  <td>{item.empresa}</td>
                  <td>{item.nPrestacao}</td>
                  <td>{item.data}</td>

                  <td>
                    <button>
                      <img src={Motivo} alt="Motivo" />
                    </button>
                  </td>

                  {/* <td>{item.descricao}</td> */}
                  <td>{item.tipoReembolso}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distanciaKm}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                  <td>{item.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className={styles.footerSolicitacao}>
          <section>
            <div className={styles.inputFooter}>
              <label> Total Faturado </label>

              <input
                type="text"
                value={dadosReembolso
                  .reduce(
                    (total, item) => total + Number(item.valorFaturado || 0),
                    0
                  )
                  .toFixed(2)}
              />
            </div>

            {/* 
.reduce serve para percorrer a lista inteira e somar os valores de valorFaturado/despesa.
Soma o total atual com o valor da despesa do item.
Usa Number(...) para garantir que seja um número (evita erros caso venha uma string).
O 0 no final é o valor inicial da soma

Usa item.despesa || 0 para evitar undefined — se não tiver valor, ele usa 0.
.tofixed: Ele formata o número com 2 casas decimais.
Mesmo que a soma dê 150, ele vai mostrar 150.00.
Se a soma for 10.5, vai mostrar 10.50. */}
            <div>
              <label> Total Despesa </label>
              <input
                type="text"
                value={dadosReembolso
                  .reduce((total, item) => total + Number(item.despesa || 0), 0)
                  .toFixed(2)}
              />
            </div>

            <div className={styles.boxButtonFooter}>
              <button
                className={styles.buttonAnalise}
                onClick={enviarParaAnalise}
              >
                {" "}
                <img src={Check} alt="" /> Enviar para Análise{" "}
              </button>

              <button
                className={styles.buttonCancelar}
                onClick={cancelarSolicitacao}
              >
                {" "}
                <img src={Cancelar} alt="" /> Cancelar Solicitação{" "}
              </button>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
export default Solicitacao;
