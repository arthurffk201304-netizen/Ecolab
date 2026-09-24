/* =========================================================
   ECOLAB DELAS
   JAVASCRIPT
========================================================= */


/* =========================================================
   MODO ESCURO
========================================================= */

function alternarTema() {

    document.body.classList.toggle("dark");

    const botao = document.getElementById("temaBtn");

    if (document.body.classList.contains("dark")) {
        botao.innerHTML = "☀️";
        localStorage.setItem("tema", "escuro");
    } else {
        botao.innerHTML = "🌙";
        localStorage.setItem("tema", "claro");
    }
}


/* Carregar tema salvo */

if (localStorage.getItem("tema") === "escuro") {

    document.body.classList.add("dark");

    const botao = document.getElementById("temaBtn");

    if (botao) {
        botao.innerHTML = "☀️";
    }
}


/* =========================================================
   CIENTISTAS
========================================================= */

const cientistas = {

    katalin: {

        icone: "🧬",

        area: "BIOQUÍMICA • RNA • VACINAS",

        titulo: "Katalin Karikó",

        texto: `
            <p>
                Katalin Karikó é uma bioquímica conhecida por sua trajetória
                de pesquisa dedicada ao RNA mensageiro. Durante décadas,
                trabalhou para compreender como moléculas de RNA poderiam
                ser utilizadas de maneira mais eficiente em aplicações
                biomédicas.
            </p>

            <p>
                Em 2005, Karikó e Drew Weissman publicaram descobertas sobre
                modificações das bases do RNA. Essas modificações ajudaram a
                reduzir respostas inflamatórias indesejadas e aumentaram a
                produção de proteínas.
            </p>

            <p>
                Esse conhecimento foi fundamental para o desenvolvimento de
                vacinas eficazes de mRNA contra a COVID-19. Em 2023, Karikó
                e Weissman receberam o Prêmio Nobel de Fisiologia ou Medicina
                por suas descobertas.
            </p>

            <p>
                A história de Karikó combina perfeitamente com a proposta
                do EcoLab: uma descoberta científica importante pode ser
                resultado de muitos anos de pesquisa, tentativa, observação
                e persistência.
            </p>
        `,

        animacao: [
            "🧬 RNA",
            "➡️",
            "🔬 Pesquisa",
            "➡️",
            "🧫 Célula",
            "➡️",
            "🛡️ Resposta imune"
        ]
    },


    jane: {

        icone: "🐒",

        area: "ETOLOGIA • PRIMATAS • CONSERVAÇÃO",

        titulo: "Jane Goodall",

        texto: `
            <p>
                Jane Goodall iniciou em 1960 seus estudos de longo prazo
                sobre chimpanzés no Parque Nacional de Gombe, na Tanzânia.
                Seu trabalho ficou conhecido pela observação cuidadosa dos
                animais em seu ambiente natural.
            </p>

            <p>
                Em vez de estudar os animais apenas em condições controladas,
                Goodall passou longos períodos observando seus comportamentos,
                relações sociais e maneiras de interagir com o ambiente.
            </p>

            <p>
                Uma observação marcante foi o uso de objetos pelos chimpanzés
                para obter alimento. Esse tipo de registro contribuiu para
                ampliar a compreensão científica sobre comportamento animal
                e utilização de ferramentas.
            </p>

            <p>
                Para o EcoLab, Jane Goodall representa uma etapa fundamental
                da investigação científica: observar cuidadosamente antes
                de formular conclusões.
            </p>
        `,

        animacao: [
            "🐒 Chimpanzé",
            "👀",
            "🌿 Ambiente",
            "🪵",
            "🔎 Observação",
            "📋",
            "Registro"
        ]
    },


    rachel: {

        icone: "🌊",

        area: "BIOLOGIA • AMBIENTE",

        titulo: "Rachel Carson",

        texto: `
            <p>
                Rachel Carson foi uma bióloga marinha e escritora científica
                norte-americana. Seu trabalho ajudou a aproximar o conhecimento
                científico do debate sobre conservação e impactos ambientais.
            </p>

            <p>
                Carson estudou relações entre organismos e ambientes e chamou
                atenção para consequências ambientais relacionadas ao uso
                indiscriminado de determinados produtos químicos.
            </p>

            <p>
                Sua trajetória mostra que divulgar ciência também pode ser
                uma forma de ampliar a compreensão da sociedade sobre problemas
                ambientais.
            </p>
        `,

        animacao: [
            "🌊 Oceano",
            "🐟",
            "🌿 Ecossistema",
            "🔬",
            "📚 Ciência"
        ]
    },


    neiva: {

        icone: "🦜",

        area: "BIOLOGIA • CONSERVAÇÃO • PROJETO ARARA AZUL",

        titulo: "Neiva Guedes",

        texto: `
            <p>
                Neiva Guedes é uma bióloga brasileira formada pela Universidade
                Federal de Mato Grosso do Sul. Ela possui mestrado em Ciências
                Florestais e doutorado em Zoologia.
            </p>

            <p>
                Em 1990, Neiva Guedes iniciou e passou a coordenar o Projeto
                Arara Azul, dedicado ao estudo e à conservação da arara-azul-
                grande no Pantanal.
            </p>

            <p>
                O projeto realiza estudos sobre biologia, monitoramento,
                reprodução, habitat, comportamento e ameaças enfrentadas
                pelas araras. Também desenvolve ações de manejo e educação
                ambiental.
            </p>

            <p>
                Sua trajetória é especialmente importante para o EcoLab porque
                mostra uma cientista brasileira utilizando pesquisa de campo
                para compreender uma espécie e ajudar na conservação do
                ambiente onde ela vive.
            </p>
        `,

        animacao: [
            "🦜 Arara",
            "➡️",
            "🌳 Habitat",
            "➡️",
            "🔎 Monitoramento",
            "➡️",
            "🌱 Conservação"
        ]
    },


    wangari: {

        icone: "🌳",

        area: "AMBIENTE • CONSERVAÇÃO",

        titulo: "Wangari Maathai",

        texto: `
            <p>
                Wangari Maathai foi uma cientista e ambientalista queniana
                que relacionou questões ambientais com educação, participação
                comunitária e melhoria das condições de vida.
            </p>

            <p>
                Sua trajetória mostra que questões ambientais não são apenas
                problemas da natureza. Elas também envolvem pessoas,
                comunidades, educação e decisões sobre como utilizamos os
                recursos naturais.
            </p>

            <p>
                No EcoLab, sua história ajuda a apresentar uma visão mais
                ampla da ciência ambiental.
            </p>
        `,

        animacao: [
            "🌱 Semente",
            "➡️",
            "🌳 Árvore",
            "➡️",
            "🌎 Ambiente",
            "➡️",
            "👥 Comunidade"
        ]
    }

};


/* =========================================================
   ABRIR CIENTISTA
========================================================= */

let cientistaAtual = null;

function abrirCientista(nome) {

    const cientista = cientistas[nome];

    if (!cientista) return;

    cientistaAtual = cientista;

    document.getElementById("modalIcone").innerHTML =
        cientista.icone;

    document.getElementById("modalArea").innerHTML =
        cientista.area;

    document.getElementById("modalTitulo").innerHTML =
        cientista.titulo;

    document.getElementById("modalTexto").innerHTML =
        cientista.texto;

    document.getElementById("animacaoArea").innerHTML =
        "<p>Pressione o botão para iniciar.</p>";

    document
        .getElementById("cientistaModal")
        .classList.add("ativo");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   FECHAR CIENTISTA
========================================================= */

function fecharModal() {

    document
        .getElementById("cientistaModal")
        .classList.remove("ativo");

    document.body.style.overflow = "";
}


/* =========================================================
   ANIMAÇÃO DA CIENTISTA
========================================================= */

function iniciarAnimacao() {

    const area = document.getElementById("animacaoArea");

    area.innerHTML = "";

    if (!cientistaAtual) return;

    cientistaAtual.animacao.forEach((item, index) => {

        const elemento = document.createElement("div");

        elemento.className = "animacao-item";

        elemento.innerHTML = item;

        area.appendChild(elemento);

        setTimeout(() => {

            elemento.classList.add("animar");

        }, index * 400);

    });
}


/* =========================================================
   ANIMAIS
========================================================= */

const animais = {

    garca: {

        icone: "🐦",

        tipo: "AVES",

        titulo: "Garça",

        texto: `
            <p>
                Garças podem ser encontradas associadas a ambientes próximos
                à água. Seu comportamento e alimentação podem ser utilizados
                como ponto de partida para observações científicas.
            </p>

            <p>
                Em uma investigação escolar, seria possível registrar
                horários de observação, comportamento e características
                do ambiente, sempre respeitando os animais e sem interferir
                em sua rotina.
            </p>
        `,

        pergunta:
            "Que características do ambiente poderiam ser registradas durante uma observação de aves?",

        resposta:
            "Horário, condições do ambiente, comportamento observado, presença de água, alimentação aparente e outras informações relevantes poderiam ser registradas sem interferir no animal."
    },


    tartaruga: {

        icone: "🐢",

        tipo: "RÉPTEIS",

        titulo: "Tartaruga-marinha",

        texto: `
            <p>
                Tartarugas marinhas dependem de diferentes ambientes durante
                seu ciclo de vida. Estudos podem analisar alimentação,
                reprodução, deslocamento, habitat e ameaças ambientais.
            </p>

            <p>
                A conservação desses animais depende de pesquisas que ajudem
                a compreender as relações entre a espécie e os ambientes
                utilizados por ela.
            </p>
        `,

        pergunta:
            "Qual seria uma pergunta científica relacionada ao habitat de uma tartaruga?",

        resposta:
            "Uma possibilidade seria investigar quais características ambientais estão relacionadas à presença da espécie em determinado local."
    },


    borboleta: {

        icone: "🦋",

        tipo: "INSETOS",

        titulo: "Borboletas",

        texto: `
            <p>
                Borboletas podem funcionar como organismos interessantes para
                estudos de biodiversidade. Sua presença pode estar relacionada
                às plantas disponíveis e às condições do ambiente.
            </p>

            <p>
                Um projeto escolar poderia registrar espécies observadas,
                plantas presentes e condições do local, sempre sem capturar
                ou manipular os animais.
            </p>
        `,

        pergunta:
            "O que poderia ser comparado em dois locais diferentes?",

        resposta:
            "Seria possível comparar quantidade de indivíduos observados, tipos de plantas e características do ambiente."
    },


    chimpanze: {

        icone: "🐒",

        tipo: "PRIMATAS • JANE GOODALL",

        titulo: "Chimpanzé",

        texto: `
            <p>
                Os chimpanzés foram protagonistas de uma das pesquisas de
                comportamento animal mais marcantes associadas a Jane Goodall.
                Ela realizou observações de longo prazo em Gombe, na Tanzânia.
            </p>

            <p>
                Um dos aspectos que chamou atenção foi o uso de objetos como
                ferramentas para obter alimento. Esse exemplo mostra como
                observações cuidadosas podem modificar a compreensão científica
                sobre o comportamento animal.
            </p>

            <p>
                O caso também demonstra uma característica importante da
                ciência: uma observação precisa ser registrada e analisada
                antes de ser transformada em uma conclusão.
            </p>
        `,

        pergunta:
            "Por que a observação prolongada foi importante nos estudos de Jane Goodall?",

        resposta:
            "Porque observar os chimpanzés por longos períodos permitiu registrar comportamentos e relações sociais no ambiente natural, em vez de depender apenas de observações pontuais."
    },


    arara: {

        icone: "🦜",

        tipo: "AVES • CONSERVAÇÃO",

        titulo: "Arara-azul-grande",

        texto: `
            <p>
                A arara-azul-grande é uma espécie estudada pelo Projeto
                Arara Azul, iniciado por Neiva Guedes em 1990.
            </p>

            <p>
                O projeto realiza estudos de biologia e monitoramento,
                além de ações de manejo e conservação da espécie e do
                ambiente em que ela vive.
            </p>

            <p>
                Esse exemplo mostra como pesquisas sobre uma espécie podem
                envolver diferentes áreas: comportamento, reprodução,
                habitat, ameaças e conservação.
            </p>
        `,

        pergunta:
            "Por que monitorar ninhos e indivíduos pode ser importante?",

        resposta:
            "Porque o monitoramento gera dados sobre reprodução, sobrevivência, habitat e possíveis ameaças, ajudando pesquisadores a acompanhar a situação da população."
    },


    lagarto: {

        icone: "🦎",

        tipo: "RÉPTEIS",

        titulo: "Lagartos",

        texto: `
            <p>
                Lagartos fazem parte de diferentes ecossistemas e podem ser
                estudados em relação à alimentação, comportamento, distribuição
                e características do habitat.
            </p>
        `,

        pergunta:
            "Qual fator ambiental poderia ser comparado entre dois locais?",

        resposta:
            "Temperatura, vegetação, disponibilidade de abrigo e características do solo poderiam ser algumas variáveis investigadas."
    }

};


/* =========================================================
   ABRIR ANIMAL
========================================================= */

let animalAtual = null;

function investigarAnimal(nome) {

    const animal = animais[nome];

    if (!animal) return;

    animalAtual = animal;

    document.getElementById("animalModalIcone").innerHTML =
        animal.icone;

    document.getElementById("animalModalTipo").innerHTML =
        animal.tipo;

    document.getElementById("animalModalTitulo").innerHTML =
        animal.titulo;

    document.getElementById("animalModalTexto").innerHTML =
        animal.texto;

    document.getElementById("animalPergunta").innerHTML =
        animal.pergunta;

    document.getElementById("animalResposta").innerHTML =
        "";

    document
        .getElementById("animalModal")
        .classList.add("ativo");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   RESPOSTA ANIMAL
========================================================= */

function mostrarRespostaAnimal() {

    if (!animalAtual) return;

    document.getElementById("animalResposta").innerHTML =
        "🔬 " + animalAtual.resposta;
}


/* =========================================================
   FECHAR ANIMAL
========================================================= */

function fecharAnimal() {

    document
        .getElementById("animalModal")
        .classList.remove("ativo");

    document.body.style.overflow = "";
}


/* =========================================================
   FECHAR MODAIS CLICANDO FORA
========================================================= */

window.addEventListener("click", function(event) {

    const cientistaModal =
        document.getElementById("cientistaModal");

    const animalModal =
        document.getElementById("animalModal");

    if (event.target === cientistaModal) {
        fecharModal();
    }

    if (event.target === animalModal) {
        fecharAnimal();
    }

});


/* =========================================================
   MISSÃO ECOLAB
========================================================= */

let energia = 100;

let fase = 1;

function atualizarEnergia() {

    if (energia < 0) {
        energia = 0;
    }

    document.getElementById("energiaBarra").style.width =
        energia + "%";

    document.getElementById("energiaTexto").innerHTML =
        energia + "%";

    document.getElementById("faseNumero").innerHTML =
        fase;
}


function escolherMissao(escolha) {

    const conteudo =
        document.getElementById("missaoConteudo");

    if (fase === 1) {

        if (escolha === "agua") {

            energia += 5;

        } else {

            energia -= 5;

        }

        fase = 2;

        conteudo.innerHTML = `

            <span class="problema-label">
                FASE 2 • HIPÓTESE
            </span>

            <h3>Qual hipótese você investigaria?</h3>

            <p>
                Os primeiros sinais indicam que pode existir uma alteração
                ambiental. Agora transforme a observação em hipótese.
            </p>

            <div class="opcoes-missao">

                <button onclick="escolherMissao('poluicao')">
                    🗑️ Existe aumento de resíduos
                </button>

                <button onclick="escolherMissao('agua2')">
                    💧 Existe alteração na água
                </button>

                <button onclick="escolherMissao('habitat')">
                    🌱 Existe alteração no habitat
                </button>

                <button onclick="escolherMissao('fauna2')">
                    🐾 Existe alteração na fauna
                </button>

            </div>
        `;

        atualizarEnergia();

        return;
    }


    if (fase === 2) {

        energia += 5;

        fase = 3;

        conteudo.innerHTML = `

            <span class="problema-label">
                FASE 3 • DADOS
            </span>

            <h3>Analise os dados das amostras</h3>

            <p>
                Você encontrou três registros. Agora precisa interpretar
                as diferenças antes de tomar uma decisão.
            </p>

            <div class="dados-missao">

                <div>
                    <strong>Amostra A</strong>
                    <br>
                    pH: 7,1
                </div>

                <div>
                    <strong>Amostra B</strong>
                    <br>
                    pH: 6,2
                </div>

                <div>
                    <strong>Amostra C</strong>
                    <br>
                    pH: 7,0
                </div>

            </div>

            <div class="opcoes-missao">

                <button onclick="escolherMissao('amostraB')">
                    🔎 Investigar a Amostra B
                </button>

                <button onclick="escolherMissao('amostraA')">
                    📋 Ignorar diferenças
                </button>

            </div>
        `;

        atualizarEnergia();

        return;
    }


    if (fase === 3) {

        if (escolha === "amostraB") {

            energia += 10;

        } else {

            energia -= 10;

        }

        fase = 4;

        conteudo.innerHTML = `

            <span class="problema-label">
                FASE 4 • SOLUÇÃO
            </span>

            <h3>Qual proposta você apresentaria?</h3>

            <p>
                Agora você precisa transformar os dados analisados em uma
                proposta de ação.
            </p>

            <div class="opcoes-missao">

                <button onclick="finalizarMissao('agua')">
                    💧 Monitorar a água
                </button>

                <button onclick="finalizarMissao('vegetacao')">
                    🌱 Recuperar vegetação
                </button>

                <button onclick="finalizarMissao('residuos')">
                    🗑️ Reduzir resíduos
                </button>

                <button onclick="finalizarMissao('habitat')">
                    🐾 Proteger habitat
                </button>

            </div>
        `;

        atualizarEnergia();

    }

}


function finalizarMissao(solucao) {

    energia += 10;

    if (energia > 100) {
        energia = 100;
    }

    atualizarEnergia();

    document.getElementById("missaoConteudo").innerHTML = `

        <span class="problema-label">
            🏆 MISSÃO CONCLUÍDA
        </span>

        <h3>Você pensou como uma cientista!</h3>

        <p>
            Você percorreu diferentes etapas de uma investigação científica:
            observou um problema, formulou uma hipótese, analisou dados e
            propôs uma possível solução.
        </p>

        <div class="final-missao">

            🔎 Observação

            →

            ❓ Pergunta

            →

            🧠 Hipótese

            →

            📊 Dados

            →

            💡 Solução

        </div>

        <button
            class="btn secundario"
            onclick="reiniciarMissao()"
        >
            🔄 Jogar novamente
        </button>
    `;

}


function reiniciarMissao() {

    energia = 100;
    fase = 1;

    document.getElementById("missaoConteudo").innerHTML = `

        <span class="problema-label">🌎 PROBLEMA</span>

        <h3>
            Uma área natural está apresentando alterações.
        </h3>

        <p>
            Você precisa descobrir qual aspecto deveria ser investigado
            primeiro. Escolha cuidadosamente.
        </p>

        <div class="opcoes-missao">

            <button onclick="escolherMissao('vegetacao')">
                🌱 Observar vegetação
            </button>

            <button onclick="escolherMissao('residuos')">
                🗑️ Verificar resíduos
            </button>

            <button onclick="escolherMissao('agua')">
                💧 Investigar água
            </button>

            <button onclick="escolherMissao('animais')">
                🐾 Observar animais
            </button>

        </div>
    `;

    atualizarEnergia();
}


/* =========================================================
   QUIZ
========================================================= */

const perguntas = [

    {
        pergunta:
            "Qual é a principal proposta do EcoLab?",

        respostas: [
            "Ser uma loja de produtos ecológicos",
            "Ser uma proposta fictícia de iniciação científica escolar",
            "Ser uma rede social",
            "Ser um laboratório comercial"
        ],

        correta: 1
    },


    {
        pergunta:
            "Por que o EcoLab é apresentado como projeto fictício?",

        respostas: [
            "Porque ciência não existe na escola",
            "Porque o projeto já foi encerrado",
            "Porque é uma proposta criada para a feira que poderia futuramente se tornar realidade",
            "Porque não possui nenhuma atividade"
        ],

        correta: 2
    },


    {
        pergunta:
            "Qual pesquisadora ficou conhecida por seus estudos de chimpanzés em Gombe?",

        respostas: [
            "Katalin Karikó",
            "Jane Goodall",
            "Neiva Guedes",
            "Rachel Carson"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual cientista brasileira está diretamente ligada ao Projeto Arara Azul?",

        respostas: [
            "Neiva Guedes",
            "Jane Goodall",
            "Katalin Karikó",
            "Wangari Maathai"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual foi uma área central da pesquisa de Katalin Karikó?",

        respostas: [
            "RNA mensageiro",
            "Araras",
            "Chimpanzés",
            "Restingas"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual é uma das funções da pesquisa local no EcoLab?",

        respostas: [
            "Mostrar que ciência só acontece fora do Brasil",
            "Relacionar ciência com ambientes próximos dos estudantes",
            "Substituir todas as aulas",
            "Criar animais"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual destes ambientes pode fazer parte das investigações sobre a Região dos Lagos?",

        respostas: [
            "Restinga",
            "Deserto do Saara",
            "Geleiras da Antártida",
            "Floresta boreal"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual é uma etapa importante de uma investigação científica?",

        respostas: [
            "Inventar um resultado",
            "Ignorar os dados",
            "Observar e formular perguntas",
            "Escolher a resposta antes da investigação"
        ],

        correta: 2
    },


    {
        pergunta:
            "Segundo os dados apresentados no site, qual era a participação das mulheres entre pesquisadores no mundo em 2023?",

        respostas: [
            "10%",
            "31,4%",
            "50%",
            "75%"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual frase representa melhor a ideia central do EcoLab?",

        respostas: [
            "A ciência deve ser feita somente por especialistas",
            "O futuro começa quando paramos de fazer perguntas",
            "Elas inspiram. Nós investigamos. O futuro começa com uma pergunta.",
            "A ciência não possui relação com o meio ambiente"
        ],

        correta: 2
    }

];


let quizAtual = 0;

let pontos = 0;

let respondeu = false;


function carregarPergunta() {

    respondeu = false;

    const perguntaAtual =
        perguntas[quizAtual];

    document.getElementById("quizNumero").innerHTML =
        `Pergunta ${quizAtual + 1} de ${perguntas.length}`;

    document.getElementById("quizPontos").innerHTML =
        `${pontos} pontos`;

    document.getElementById("pergunta").innerHTML =
        perguntaAtual.pergunta;

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    perguntaAtual.respostas.forEach(
        (resposta, index) => {

            const botao =
                document.createElement("button");

            botao.className = "alternativa";

            botao.innerHTML = resposta;

            botao.onclick = function() {

                responderQuiz(index, botao);

            };

            alternativas.appendChild(botao);
        }
    );

    document.getElementById(
        "proximaPergunta"
    ).style.display = "none";
}


function responderQuiz(indice, botao) {

    if (respondeu) return;

    respondeu = true;

    const perguntaAtual =
        perguntas[quizAtual];

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach((item, index) => {

        if (index === perguntaAtual.correta) {
            item.classList.add("certa");
        }

    });


    if (indice === perguntaAtual.correta) {

        pontos++;

        botao.classList.add("certa");

    } else {

        botao.classList.add("errada");

    }


    document.getElementById("quizPontos").innerHTML =
        `${pontos} pontos`;

    document.getElementById(
        "proximaPergunta"
    ).style.display = "inline-block";
}


function proximaPergunta() {

    quizAtual++;

    if (quizAtual >= perguntas.length) {

        finalizarQuiz();

        return;
    }

    carregarPergunta();
}


function finalizarQuiz() {

    document.getElementById("quizConteudo").innerHTML = `

        <div style="text-align:center; padding:20px;">

            <div style="font-size:70px;">
                🏆
            </div>

            <h3>
                VOCÊ CONCLUIU O ECOLAB
            </h3>

            <p>
                Sua pontuação foi:
            </p>

            <strong style="font-size:45px; color:#d1a800;">
                ${pontos}/10
            </strong>

            <p style="margin-top:20px;">
                Você percorreu uma experiência que conectou mulheres na
                ciência, biodiversidade, Região dos Lagos, investigação
                científica e problemas ambientais.
            </p>

        </div>
    `;

    document.getElementById(
        "proximaPergunta"
    ).style.display = "none";
}


/* =========================================================
   INICIAR QUIZ
========================================================= */

carregarPergunta();


/* =========================================================
   ANIMAÇÃO AO ENTRAR NAS SEÇÕES
========================================================= */

const observador =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },

        {
            threshold: 0.1
        }

    );


document
    .querySelectorAll(
        ".cientista-card, .animal-card, .ambiente-card, .pilar, .projeto-card"
    )
    .forEach(elemento => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(20px)";

        elemento.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observador.observe(elemento);

    });
