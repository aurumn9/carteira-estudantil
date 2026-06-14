async function carregarCarteira() {

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    if (!id) {
        alert("ID não informado.");
        return;
    }

    const resposta = await fetch("alunos.json");
    const alunos = await resposta.json();

    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }

    document.getElementById("nome").textContent = aluno.nome;
    document.getElementById("cpf").textContent = aluno.cpf;
    document.getElementById("nascimento").textContent = aluno.nascimento;
    document.getElementById("instituicao").textContent = aluno.instituicao;
    document.getElementById("curso").textContent = aluno.curso;
    document.getElementById("matricula").textContent = aluno.matricula;
    document.getElementById("matricula2").textContent = aluno.matricula;
    document.getElementById("validade").textContent = aluno.validade;

    document.getElementById("foto").src = aluno.foto;

    document.getElementById("qrcode").src =
        `qrcodes/${aluno.id}.png`;
}

carregarCarteira();