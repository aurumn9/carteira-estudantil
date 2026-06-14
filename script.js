async function carregarAluno() {

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    if (!id) {
        document.body.innerHTML = `
            <h1 style="text-align:center; margin-top:50px;">
                ID do aluno não informado.
            </h1>
        `;
        return;
    }

    try {

        const resposta = await fetch("alunos.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar alunos.json");
        }

        const alunos = await resposta.json();

        const aluno = alunos.find(a => a.id === id);

        if (!aluno) {
            document.body.innerHTML = `
                <h1 style="text-align:center; margin-top:50px;">
                    Carteira não encontrada.
                </h1>
            `;
            return;
        }

        document.getElementById("foto").src = aluno.foto;
        document.getElementById("nome").textContent = aluno.nome;
        document.getElementById("instituicao").textContent = aluno.instituicao;
        document.getElementById("curso").textContent = aluno.curso;
        document.getElementById("matricula").textContent = aluno.matricula;
        document.getElementById("cpf").textContent = aluno.cpf;
        document.getElementById("nascimento").textContent = aluno.nascimento;
        document.getElementById("validade").textContent = aluno.validade;
        document.getElementById("status").textContent = aluno.status;

    } catch (erro) {

        console.error(erro);

        document.body.innerHTML = `
            <h1 style="text-align:center; margin-top:50px;">
                Erro ao carregar os dados.
            </h1>
        `;
    }
}

carregarAluno();