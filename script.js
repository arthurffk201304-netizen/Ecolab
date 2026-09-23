/* =========================
   MODO ESCURO
========================= */

function alternarTema() {

    document.body.classList.toggle("dark");

    let botao = document.querySelector(".tema");

    if (document.body.classList.contains("dark")) {

        botao.innerText = "☀️";

    } else {

        botao.innerText = "🌙";

    }
}


/* =========================
   INFORMAÇÕES DOS CIENTISTAS
========================= */

function mostrarInfo(tipo) {

    let modal = document.getElementById("modal");
    let texto = document.getElementById("modal-texto");

    if (tipo === "marie") {

        texto.innerHTML = `
            <h2>⚛️ Marie Curie</h2>

            <br>

            <p>
                Marie Curie foi uma cientista pioneira nos estudos
                da radioatividade.
            </p>

            <br>

            <p>
                Seus trabalhos tiveram grande importância para
                a Física e a Química.
            </p>

            <br>

            <strong>Área:</strong> Física e Química
        `;

    }


    if (tipo === "ada") {

        texto.innerHTML = `
            <h2>💻 Ada Lovelace</h2>

            <br>

            <p>
                Ada Lovelace trabalhou com ideias relacionadas
                à máquina analítica de Charles Babbage.
            </p>

            <br>

            <p>
                Seu trabalho é frequentemente lembrado na história
                inicial da programação.
            </p>

            <br>

            <strong>Área:</strong> Matemática e Computação
        `;

    }


    if (tipo === "rosalind") {

        texto.innerHTML = `
            <h2>🧬 Rosalind Franklin</h2>

            <br>

            <p>
                Rosalind Franklin realizou importantes pesquisas
                utilizando técnicas de difração de raios X.
            </p>

            <br>

            <p>
                Seu trabalho contribuiu para o conhecimento da
                estrutura do DNA.
            </p>

            <br>

            <strong>Área:</strong> Biologia e Química
        `;

    }


    if (tipo === "astronomia") {

        texto.innerHTML = `
            <h2>🔭 Mulheres na Astronomia</h2>

            <br>

            <p>
                Mulheres participaram e continuam participando
                de pesquisas sobre estrelas, planetas, galáxias
                e outros fenômenos do universo.
            </p>

            <br>

            <strong>Área:</strong> Astronomia
        `;

    }

    modal.style.display = "flex";
}


/* =========================
   FECHAR MODAL
========================= */

function fecharModal() {

    document.getElementById("modal").style.display = "none";

}


/* =========================
   QUIZ
========================= */

let respondeu = false;

function responderQuiz(correta) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    let resultado = document.getElementById("resultado");
    let proxima = document.getElementById("proxima");

    if (correta) {

        resultado.innerHTML =
            "✅ <strong>Correto!</strong> Marie Curie recebeu dois Prêmios Nobel.";

    } else {

        resultado.innerHTML =
            "❌ Essa não é a resposta. A resposta correta é Marie Curie.";

    }

    proxima.style.display = "inline-block";
}


function proximaPergunta() {

    let pergunta = document.getElementById("pergunta");
    let resultado = document.getElementById("resultado");
    let proxima = document.getElementById("proxima");

    pergunta.innerHTML = `
        <h3>
            Qual destas áreas está relacionada ao estudo dos seres vivos?
        </h3>

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

    proxima.style.display = "none";
}


function responderSegunda(correta) {

    let resultado = document.getElementById("resultado");

    if (correta) {

        resultado.innerHTML =
            "✅ Muito bem! Biologia é a área que estuda a vida.";

    } else {

        resultado.innerHTML =
            "❌ Tente novamente. A resposta é Biologia.";

    }

}


/* =========================
   FAQ
========================= */

function abrirFAQ(botao) {

    let item = botao.parentElement;

    item.classList.toggle("active");

    let sinal = botao.querySelector("span");

    if (item.classList.contains("active")) {

        sinal.innerText = "−";

    } else {

        sinal.innerText = "+";

    }

}


/* =========================
   HEADER AO ROLAR
========================= */

window.addEventListener("scroll", function() {

    let header = document.getElementById("topo");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 30px #00000018";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================
   FECHAR MODAL CLICANDO FORA
========================= */

window.addEventListener("click", function(event) {

    let modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

});
