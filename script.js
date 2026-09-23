// ==============================
// TEMA
// ==============================

function alternarTema() {
    document.body.classList.toggle("light");

    const botao = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light")) {
        botao.textContent = "☾";
    } else {
        botao.textContent = "☼";
    }
}


// ==============================
// CIENTISTAS
// ==============================

const cientistas = {

    marie: {
        nome: "Marie Curie",
        area: "Física e Química",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",

        historia: `
            Marie Curie nasceu em 1867, na Polônia, e se tornou
            uma das cientistas mais importantes da história.

            Ela realizou pesquisas pioneiras sobre radioatividade
            e foi responsável por importantes descobertas científicas.

            Marie Curie recebeu dois Prêmios Nobel, sendo uma das
            primeiras mulheres a conquistar esse reconhecimento.

            Sua trajetória mostra como a curiosidade, a pesquisa
            e a dedicação podem transformar nossa compreensão
            sobre o mundo.
        `
    },

    ada: {
        nome: "Ada Lovelace",
        area: "Matemática e Computação",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/8/87/Ada_Lovelace_portrait.jpg",

        historia: `
            Ada Lovelace nasceu em 1815 e ficou conhecida por seu
            trabalho relacionado à máquina analítica de Charles Babbage.

            Ela percebeu que uma máquina poderia fazer muito mais
            do que apenas realizar cálculos matemáticos.

            Ada escreveu um algoritmo destinado à máquina analítica,
            sendo frequentemente reconhecida como uma das primeiras
            pessoas a desenvolver uma ideia de programa de computador.

            Suas ideias surgiram muito antes dos computadores modernos.
        `
    },

    rosalind: {
        nome: "Rosalind Franklin",
        area: "Química e Biologia",
        imagem: "https://upload.wikimedia.org/wikipedia/en/1/1d/Rosalind_Franklin.jpg",

        historia: `
            Rosalind Franklin foi uma química e pesquisadora britânica
            que trabalhou com técnicas de difração de raios X.

            Seu trabalho produziu informações importantes para o
            entendimento da estrutura do DNA.

            As imagens e análises obtidas por sua pesquisa contribuíram
            para os estudos que levaram à compreensão da estrutura
            em dupla hélice do DNA.

            Sua história também é importante para refletirmos sobre
            o reconhecimento das contribuições das mulheres na ciência.
        `
    }

};


function mostrarCientista(id) {

    const cientista = cientistas[id];

    if (!cientista) return;

    document.getElementById("modal-titulo").textContent =
        cientista.nome;

    document.getElementById("modal-area").textContent =
        cientista.area;

    document.getElementById("modal-historia").textContent =
        cientista.historia;

    document.getElementById("modal-imagem").src =
        cientista.imagem;

    document.getElementById("modal-imagem").alt =
        cientista.nome;

    document.getElementById("modal").classList.add("active");

    document.body.style.overflow = "hidden";
}


function fecharModal() {

    document.getElementById("modal").classList.remove("active");

    document.body.style.overflow = "";
}


document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharModal();
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        fecharModal();
    }

});


// ==============================
// QUIZ
// ==============================

let perguntaAtual = 0;

const perguntas = [

    {
        pergunta: "Quem foi uma das pioneiras da programação?",
        opcoes: [
            "Ada Lovelace",
            "Marie Curie",
            "Rosalind Franklin"
        ],
        correta: 0
    },

    {
        pergunta: "Qual cientista ficou conhecida por suas pesquisas sobre radioatividade?",
        opcoes: [
            "Rosalind Franklin",
            "Marie Curie",
            "Ada Lovelace"
        ],
        correta: 1
    },

    {
        pergunta: "Qual área está fortemente relacionada ao trabalho de Rosalind Franklin?",
        opcoes: [
            "Estrutura do DNA",
            "Astronomia",
            "Geografia"
        ],
        correta: 0
    }

];


function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {

        const botao = document.createElement("button");

        botao.textContent = opcao;

        botao.onclick = function() {
            responderQuiz(botao, index === pergunta.correta);
        };

        opcoes.appendChild(botao);

    });

    document.getElementById("resultado").textContent = "";

    document.getElementById("proximo")
        .classList.add("hidden");
}


function responderQuiz(botao, correta) {

    const resultado =
        document.getElementById("resultado");

    const botoes =
        document.querySelectorAll("#opcoes button");

    botoes.forEach(b => {
        b.disabled = true;
    });

    if (correta) {

        resultado.textContent =
            "✓ Correto! Você mandou bem.";

    } else {

        resultado.textContent =
            "✕ Não foi dessa vez. Continue aprendendo!";

    }

    document.getElementById("proximo")
        .classList.remove("hidden");
}


function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {

        document.getElementById("pergunta").textContent =
            "🎉 Você chegou ao final do desafio!";

        document.getElementById("opcoes").innerHTML = "";

        document.getElementById("resultado").textContent =
            "Continue pesquisando, questionando e descobrindo.";

        document.getElementById("proximo")
            .classList.add("hidden");

        return;
    }

    carregarPergunta();
}


// Inicia o quiz
carregarPergunta();
