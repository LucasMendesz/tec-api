import { ler } from "./src/aluno.js";
import  express  from "express";
const app = express();
const porta = 3000;

// Configurando suporte ao formato JSON
app.use(express.json());

// Configurando suporte a dados de input de formulários
app.use(express.urlencoded({extended : true}) );

// ROTAS
// Rotas (endpoint) para a raiz da API
app.get('/', (req, res) => 
{
  res.send("É um dia lindo pra aprender sobre APIS")
});

// Rota (endpoint) exibir todos os alunos
app.get('/alunos', (req, res) => 
{
  //res.send("Exibindo todos os alunos")
  ler(res);
});

// Rota (endpoint) para exibir um único alunos
app.get('/alunos/:id', (req, res) => 
{
    res.send("Exibindo dados de um aluno");
});

// Rota (endpoint) para INSERIR alunos
app.post('/alunos', (req, res) => 
{
    res.send("Para inserir aluno");
});

// Rota (endpoint) para ATUALIZAR todos dados do aluno
app.put('/alunos/:id', (req, res) => 
{
    res.send("ATUALIZANDO TODOS os dados de um aluno");
});

// Rota (endpoint) para ATUALIZAR ALGUNS/todos dados do aluno
app.patch('/alunos/:id', (req, res) => 
{
    res.send("ATUALIZANDO ALGUNS/todos os dadoos de um aluno");
});

// Rota (endpoint) para EXCLUIR aluno
app.delete('/alunos/:id', (req, res) => 
{
    res.send("Exclui aluno");
});




// Configurando o servidor
app.listen(porta, () => 
{
  console.log("Servidor rolando...")
});