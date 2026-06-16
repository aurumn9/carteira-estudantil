async function carregarCarteira() {

    try {

        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get("id");

        if (!id) {
            alert("ID não informado.");
            return;
        }

        const resposta = await fetch("alunos.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar alunos.json");
        }

        const alunos = await resposta.json();

        const aluno = alunos.find(a => a.id === id);

        if (!aluno) {
            alert("Aluno não encontrado.");
            return;
        }

        document.getElementById("nome").textContent =
            aluno.nome || "";

        document.getElementById("cpf").textContent =
            aluno.cpf || "";

        document.getElementById("nascimento").textContent =
            aluno.nascimento || "";

        document.getElementById("instituicao").textContent =
            aluno.instituicao || "";

        document.getElementById("curso").textContent =
            aluno.curso || "";

        document.getElementById("matricula2").textContent =
            aluno.matricula || "";

        document.getElementById("validade").textContent =
            aluno.validade || "";

        // Agora usa o campo CIE do JSON
        document.getElementById("cie").textContent =
            aluno.cie || "";

        // Foto do aluno
        document.getElementById("foto").src =
            aluno.foto || "";

        // QR Code automático
        const urlValidacao =
            `https://aurumn9.github.io/carteira-estudantil/validacao.html?id=${aluno.id}`;

        const qr = document.getElementById("qrcode");

        qr.innerHTML = "";

        new QRCode(qr, {
            text: urlValidacao,
            width: 180,
            height: 180
        });

    } catch (erro) {

        console.error(erro);
        alert("Erro ao carregar os dados.");
    }
}

carregarCarteira();