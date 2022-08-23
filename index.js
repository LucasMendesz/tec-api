import  express  from "express";
const app = express();
const porta = 3000;

// ROTAS


// Rotas (endpoint) para a raiz da API
app.get('/', (req, res) => 
{
  res.send("É um dia lindo pra aprender sobre APIS")
});

// Rota (endpoint) exibir todos os alunos
app.get('/alunos', (req, res) => 
{
  res.send("Exibindo todos os alunos")
});

// Rota (endpoint) para exibir um único alunos
app.get('/alunos/:id', (res,req) => 
{
    res.send("Exibindo dados de um aluno");
});

// Rota (endpoint) para INSERIR alunos
app.post('/alunos', (res,req) => 
{
    res.send("Para inserir aluno");
});

// Rota (endpoint) para ATUALIZAR todos dados do aluno
app.put('/alunos/:id', (res,req) => 
{
    res.send("ATUALIZANDO TODOS os dados de um aluno");
});

// Rota (endpoint) para ATUALIZAR ALGUNS/todos dados do aluno
app.path('/alunos/:id', (res,req) => 
{
    res.send("ATUALIZANDO ALGUNS/todos os dadoos de um aluno");
});

// Rota (endpoint) para EXCLUIR aluno
app.delete('/alunos/:id', (res,req) => 
{
    res.send("Exclui aluno");
});




// Configurando o servidor
app.listen(porta, () => 
{
  console.log("Servidor rolando...")
});