/* =========================
   TEMA
========================= */

function alternarTema() {

    document.body.classList.toggle("claro");

    const botao = document.querySelector(".tema");

    if (document.body.classList.contains("claro")) {
        botao.textContent = "☀️";
        localStorage.setItem("tema", "claro");
    } else {
        botao.textContent = "🌙";
        localStorage.setItem("tema", "escuro");
    }
}


/* Recuperar tema */

if (localStorage.getItem("tema") === "claro") {

    document.body.classList.add("claro");

    const botao = document.querySelector(".tema");

    if (botao) {
        botao.textContent = "☀️";
    }
}


/* =========================
   CIENTISTAS
========================= */

const cientistas = {

    marie: {

        nome: "Marie Curie",

        area: "FÍSICA • QUÍMICA",

        imagem:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",

        historia: `

            <p>
                Marie Curie nasceu em 1867, em Varsóvia, na Polônia.
                Desde jovem demonstrou interesse pelos estudos, mas
                enfrentou dificuldades para ter acesso à educação que
                desejava em uma época em que as oportunidades para
                mulheres eram mais limitadas.
            </p>

            <p>
                Mais tarde, mudou-se para Paris, onde continuou sua
                formação e entrou em contato com importantes estudos
                científicos. Foi nesse ambiente que desenvolveu uma
                trajetória de pesquisa que a tornaria uma das figuras
                mais conhecidas da história da ciência.
            </p>

            <p>
                Junto de Pierre Curie e outros pesquisadores, estudou
                fenômenos relacionados à radioatividade. Seu trabalho
                contribuiu para a descoberta de novos elementos químicos,
                incluindo o polônio e o rádio.
            </p>

            <p>
                Marie Curie recebeu o Prêmio Nobel de Física em 1903
                e o Prêmio Nobel de Química em 1911. Ela se tornou uma
                referência histórica não apenas pelas descobertas,
                mas também pela dedicação à pesquisa científica.
            </p>

            <h3>O que podemos aprender com ela?</h3>

            <p>
                A trajetória de Marie Curie mostra a importância da
                persistência, da curiosidade e da dedicação ao
                conhecimento. Sua história também ajuda a discutir
                a participação das mulheres na ciência e os obstáculos
                que muitas pesquisadoras enfrentaram.
            </p>

        `
    },


    ada: {

        nome: "Ada Lovelace",

        area: "MATEMÁTICA • COMPUTAÇÃO",

        imagem:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",

        historia: `

            <p>
                Ada Lovelace nasceu em 1815, na Inglaterra. Ela teve
                contato com matemática e ciência desde cedo e desenvolveu
                grande interesse por ideias relacionadas a máquinas
                e cálculos.
            </p>

            <p>
                Durante sua trajetória, conheceu o trabalho de Charles
                Babbage e sua proposta para a Máquina Analítica, uma
                máquina mecânica que pretendia realizar diferentes tipos
                de cálculos.
            </p>

            <p>
                Ao estudar a máquina, Ada percebeu algo muito importante:
                uma máquina poderia fazer mais do que simplesmente
                calcular números. Ela poderia seguir uma sequência de
                instruções para trabalhar com diferentes tipos de
                informações.
            </p>

            <p>
                Suas anotações incluíram uma sequência de instruções
                para a Máquina Analítica que é frequentemente considerada
                um dos primeiros exemplos publicados de um algoritmo
                destinado a ser processado por uma máquina.
            </p>

            <h3>Por que sua história importa?</h3>

            <p>
                Ada Lovelace ajuda a mostrar que a computação possui
                uma história muito mais antiga do que os computadores
                modernos. Suas ideias também mostram como matemática,
                criatividade e imaginação podem trabalhar juntas.
            </p>

        `
    },


    rosalind: {

        nome: "Rosalind Franklin",

        area: "BIOLOGIA • QUÍMICA",

        imagem:
        "https://upload.wikimedia.org/wikipedia/en/1/1d/Rosalind_Franklin.jpg",

        historia: `

            <p>
                Rosalind Franklin nasceu em 1920, em Londres. Ela
                desenvolveu uma carreira científica dedicada ao estudo
                de estruturas moleculares.
            </p>

            <p>
                Seu trabalho envolveu técnicas de difração de raios X,
                utilizadas para investigar a estrutura de moléculas.
                Entre os materiais estudados por Franklin estava o DNA.
            </p>

            <p>
                As imagens e análises produzidas por sua equipe forneceram
                informações importantes para compreender a estrutura
                molecular do DNA.
            </p>

            <p>
                A história de Rosalind Franklin também é importante
                para discutir como o reconhecimento científico pode
                acontecer de maneiras diferentes ao longo do tempo.
                Hoje, seu trabalho é amplamente lembrado quando se
                estuda a história da descoberta da estrutura do DNA.
            </p>

            <h3>O que sua trajetória ensina?</h3>

            <p>
                Sua trajetória mostra a importância de métodos científicos
                cuidadosos, observação, análise de evidências e colaboração.
                Também reforça a necessidade de reconhecer adequadamente
                as contribuições de diferentes pesquisadores.
            </p>

        `
    }

};


/* Abrir cientista */

function mostrarCientista(id) {

    const cientista = cientistas[id];

    if (!cientista) {
        return;
    }

    document.getElementById("modal-titulo").textContent =
        cientista.nome;

    document.getElementById("modal-area").textContent =
        cientista.area;

    document.getElementById("modal-imagem").src =
        cientista.imagem;

    document.getElementById("modal-imagem").alt =
        cientista.nome;

    document.getElementById("modal-historia").innerHTML =
        cientista.historia;

    document.getElementById("modal").classList.add("ativo");

    document.body.style.overflow = "hidden";
}


/* Fechar */

function fecharModal() {

    document.getElementById("modal").classList.remove("ativo");

    document.body.style.overflow = "auto";
}


/* Fechar clicando fora */

document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharModal();
    }

});


/* ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        fecharModal();
    }

});


/* =========================
   QUIZ
========================= */

const perguntas = [

    {
        pergunta:
        "Qual dessas cientistas recebeu dois Prêmios Nobel?",

        opcoes: [
            ["Marie Curie", true],
            ["Ada Lovelace", false],
            ["Rosalind Franklin", false]
        ]
    },

    {
        pergunta:
        "Qual área está fortemente associada à trajetória de Ada Lovelace?",

        opcoes: [
            ["Computação", true],
            ["Astronomia", false],
            ["Geologia", false]
        ]
    },

    {
        pergunta:
        "Rosalind Franklin trabalhou com técnicas relacionadas a qual molécula?",

        opcoes: [
            ["DNA", true],
            ["Oxigênio", false],
            ["Ferro", false]
        ]
    }

];


let perguntaAtual = 0;


/* Mostrar pergunta */

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    pergunta.opcoes.forEach(function(opcao) {

        const botao = document.createElement("button");

        botao.textContent = opcao[0];

        botao.onclick = function() {
            responderQuiz(botao, opcao[1]);
        };

        opcoes.appendChild(botao);

    });

    document.getElementById("resultado").textContent = "";

}


/* Responder */

function responderQuiz(botao, correto) {

    const resultado = document.getElementById("resultado");

    if (correto) {

        resultado.textContent =
            "✅ Correto! Continue explorando.";

        resultado.style.color = "#64f69b";

    } else {

        resultado.textContent =
            "❌ Não foi dessa vez. Continue aprendendo!";

        resultado.style.color = "#ff8585";

    }

}


/* Próxima */

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {

        perguntaAtual = 0;

        document.getElementById("resultado").textContent =
            "🎉 Você chegou ao final! Agora continue descobrindo.";

    }

    carregarPergunta();

}


/* Inicializar quiz */

carregarPergunta();
