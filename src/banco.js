import mysql from "mysql2";

// Configurando a conexão
const conexao = mysql.createConnection({
  // LOCAL
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "escola"

  // remoto
  host: "srv28.prodns.com.br",
  user: "webmaio1_lucasz",
  password: "Luc@s4674",
  database: "webmaio1_lucas",
});

//  Conectando ao banco de dados
// conexao.connect();

conexao.connect((erro) => {
  if (erro) {
    console.error(`Erro ao conectar: ${erro.message}`);
  } else {
    console.log("Banco de dados conectado com sucesso!");
  }

  // } else {
  //     Mostrando qual banco está conectado
  //     console.log(`Banco de dados conectado em; ${conexao.config.host}`);
  // }
});

export default conexao;
