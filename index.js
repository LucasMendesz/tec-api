import { ler, inserir, lerUm, atualizar, excluir } from "./src/aluno.js";
import express from "express";
import cors from "cors";
const app = express();
const porta = process.env.PORT || 3000;

// Configurando requisições de diferentes origens
app.use(cors());

// Configurando suporte ao formato JSON
app.use(express.json());

// Configurando suporte a dados de input de formulários
app.use(express.urlencoded({ extended: true }));

// ROTAS
// Rotas (endpoint) para a raiz da API
app.get("/", (req, res) => {
  res.send("É um dia lindo pra aprender sobre APIS");
});

// Rota (endpoint) exibir todos os alunos
app.get("/alunos", (req, res) => {
  //res.send("Exibindo todos os alunos")
  ler(res);
});

// Rota (endpoint) para exibir um único alunos
app.get("/alunos/:id", (req, res) => {
  // res.send("Exibindo dados de um aluno");

  const id = parseInt(req.params.id);

  lerUm(id, res);
});

// Rota (endpoint) para INSERIR alunos
app.post("/alunos", (req, res) => {
  // res.send("Para inserir aluno");

  // Capturando os dados a partir do corpo da requesição
  const novoAluno = req.body;

  // Executando a função inserir e passsando os parâmetro novoAluno e res.
  inserir(novoAluno, res);
});

// Rota (endpoint) para ATUALIZAR todos dados do aluno
app.put("/alunos/:id", (req, res) => {
  res.send("ATUALIZANDO TODOS os dados de um aluno");
});

// Rota (endpoint) para ATUALIZAR ALGUNS/todos dados do aluno
app.patch("/alunos/:id", (req, res) => {
  //res.send("ATUALIZANDO ALGUNS/todos os dadoos de um aluno");

  // Capturar id
  const id = parseInt(req.params.id);

  // Dados do aluno
  const aluno = req.body;

  //Chamando a função ATUALIZAR
  atualizar(id, aluno, res);
});

// Rota (endpoint) para EXCLUIR aluno
app.delete("/alunos/:id", (req, res) => {
  //res.send("Exclui aluno");

  // Capturar id
  const id = parseInt(req.params.id);

  //Chamando a função EXCLUIR
  excluir(id, res);
});

// Configurando o servidor
app.listen(porta, () => {
  console.log("Servidor rolando...");
});
