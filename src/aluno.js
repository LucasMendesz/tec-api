import conexao from "./banco.js";

// Função que ler a tabela de alunos no banco de dados.
function ler(res) { 
// Criando o CRUD
const sql = "SELECT * FROM alunos ORDER BY nome";

// Conectando ao BD
conexao.query(sql, (erro, resultados) =>
{
    if(resultados.length === 0 ) {
       res.status(204).end;  // 204 = Sem conteúdo. O método .end() para qualquer comunicação.
       return;  // die()
    }

    if(erro) {
        res.status(400).json(erro.code);   // 400 BAD REquest - requisição inválida.
    } else {
        res.status(200).json(resultados); // Aqui deu certo exibir os resultados.
    }
})};

export {ler};