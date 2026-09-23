// ===============================
// TEMA ESCURO
// ===============================

function alternarTema() {

    document.body.classList.toggle("escuro");

    const botao = document.querySelector(".tema");

    if (document.body.classList.contains("escuro")) {
        botao.textContent = "☀️";
        localStorage.setItem("ecolabTema", "escuro");
    } else {
        botao.textContent = "🌙";
        localStorage.setItem("ecolabTema", "claro");
    }
}


// Recuperar tema salvo
if (localStorage.getItem("ecolabTema") === "escuro") {

    document.body.classList.add("escuro");

    const botao = document.querySelector(".tema");

    if (botao) {
        botao.textContent = "☀️";
    }
}


// ===============================
// INFORMAÇÕES DAS CIENTISTAS
// ===============================

const cientistas = {

    marie: `
        <div class="info-box">
            <h3>⚛️ Marie Curie</h3>

            <p>
                Marie Curie foi uma cientista que realizou pesquisas
                fundamentais sobre radioatividade.
            </p>

            <p>
                Ela recebeu dois Prêmios Nobel, um em Física e outro
                em Química.
            </p>
        </div>
    `,

    ada: `
        <div class="info-box">
            <h3>💻 Ada Lovelace</h3>

            <p>
                Ada Lovelace trabalhou com as ideias relacionadas
                à máquina analítica de Charles Babbage.
            </p>

            <p>
                Seu trabalho é frequentemente lembrado na história
                da programação.
            </p>
        </div>
    `,

    rosalind: `
        <div class="info-box">
            <h3>🧬 Rosalind Franklin</h3>

            <p>
                Rosalind Franklin realizou pesquisas utilizando
                difração de raios X.
            </p>

            <p>
                Seus trabalhos contribuíram para o conhecimento
                da estrutura do DNA.
            </p>
        </div>
    `,

    astronomia: `
        <div class="info-box">
            <h3>🔭 Mulheres na Astronomia</h3>

            <p>
                Mulheres participaram e continuam participando
                de pesquisas relacionadas ao estudo do universo.
            </p>

            <p>
                Astronomia envolve observação, matemática,
                física, tecnologia e análise de dados.
            </p>
        </div>
    `
};


function mostrarInfo(nome) {

    const area = document.getElementById("info-cientista");

    if (!area) return;

    area.innerHTML = cientistas[nome] || "";

    area.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// ===============================
// QUIZ
// ===============================

let respondeu = false;

function responderQuiz(correta) {

    if (respondeu) return;

    respondeu = true;

    const resultado = document.getElementById("resultado");
    const proxima = document.getElementById("proxima");

    if (correta) {

        resultado.innerHTML = "✅ Correto! Marie Curie recebeu dois Prêmios Nobel.";

    } else {

        resultado.innerHTML = "❌ Não foi dessa vez. A resposta correta é Marie Curie.";
    }

    if (proxima) {
        proxima.style.display = "inline-block";
    }
}


function proximaPergunta() {

    const pergunta = document.getElementById("pergunta");
    const resultado = document.getElementById("resultado");
    const proxima = document.getElementById("proxima");

    pergunta.innerHTML = `
        <h3>Qual área está diretamente relacionada ao estudo dos seres vivos?</h3>

        <div class="opcoes">

            <button onclick="responderSegunda(false)">
                Astronomia
            </button>

            <button onclick="responderSegunda(true)">
                Biologia
            </button>

            <button onclick="responderSegunda(false)">
                Geologia
            </button>

        </div>
    `;

    resultado.innerHTML = "";

    if (proxima) {
        proxima.style.display = "none";
    }

    respondeu = false;
}


function responderSegunda(correta) {

    const resultado = document.getElementById("resultado");

    if (correta) {

        resultado.innerHTML = "✅ Correto! Biologia estuda a vida.";

    } else {

        resultado.innerHTML = "❌ A resposta correta é Biologia.";
    }
}


// ===============================
// FAQ
// ===============================

function abrirFAQ(botao) {

    const item = botao.parentElement;

    document.querySelectorAll(".faq-item").forEach(function(elemento) {

        if (elemento !== item) {
            elemento.classList.remove("ativo");
        }

    });

    item.classList.toggle("ativo");
}


// ===============================
// MODAL
// ===============================

function fecharModal() {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("ativo");
    }
}


const modal = document.getElementById("modal");

if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            fecharModal();
        }

    });
}


// ===============================
// ANIMAÇÃO AO ENTRAR NA TELA
// ===============================

const elementos = document.querySelectorAll(
    ".objetivo, .cientista-card, .ecolab-card, .valor, .metodo, .projetos-grid article"
);

const observador = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "opacity .6s ease, transform .6s ease";

    observador.observe(elemento);

});


// ===============================
// HEADER AO ROLAR
// ===============================

window.addEventListener("scroll", function() {

    const header = document.getElementById("topo");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});
