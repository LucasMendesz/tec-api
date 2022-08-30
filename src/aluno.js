import conexao from "./banco.js";

// Função que ler a tabela de alunos no banco de dados.
function ler(res) {
    // Criando o CRUD
    const sql = "SELECT * FROM alunos ORDER BY nome";

    // Conectando ao BD
    conexao.query(sql, (erro, resultados) => {
        if (resultados.length === 0) {
            res.status(204).end;  // 204 = Sem conteúdo. O método .end() para qualquer comunicação.
            return;  // die()
        }

        if (erro) {
            res.status(400).json(erro.code);   // 400 BAD REquest - requisição inválida.
        } else {
            res.status(200).json(resultados); // Aqui deu certo exibir os resultados.
        }
    })
};

// Inserindo alunos

function inserir(aluno, res) {
    // "SET ?" estão vindo MYSQL2 e a ? recebe os dados e atribui na ordem. Proteção contra injection e Tratamento de Strings vindos do módulo MYSQL2.
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => 
    {
    if (erro) {
       res.status(400).json(erro.code);
    } else {
       res.status(201).json({ "status" : "aluno inserido!" }); // // 201 CREATED - criado e apresenta a mensagem Aluno inserido.
    }
    });
}

// Função que exibe um aluno
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => 
    {
    if (resultados.length === 0) {
        res.status(204).end();
        return;
    } if(erro) {
        res.status(400).json(erro.code);
    } else {
        res.status(200).json(resultados[0]);
    }  
    });
}

// Função  atualizar aluno
// Essa função vai receber um id, os dados aluno e res.
function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?";

    // Para passar mais de um parâmetro usamos array. Dentro dele a ordem importa, pois precisa corresponder ao SQL a cima.
    conexao.query(sql, [aluno, id], (erro, resultados) => 
    {
    if(erro) {
    res.status(400).json(erro.code);
    } else {
        // res.status(200).json({"Status" : "Atualizado com sucesso!"});

        // spread operator (operador de "espalhamento" de objeto)
        res.status(200).json( {...aluno, id} );
    }
    });

}
export { ler, inserir, lerUm, atualizar };