const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual é o maior animal marinho existente?",
    alternativas: [
      { texto: "Tubarão-baleia", correta: false },
      { texto: "Orca", correta: false },
      { texto: "Lula-gigante", correta: false },
      { texto: "Baleia-azul", correta: true }
    ]
  },
  {
    enunciado: "Qual desses animais marinhos é conhecido por sua capacidade de mudar de cor para se camuflar?",
    alternativas: [
      { texto: "Polvo", correta: true },
      { texto: "Golfinho", correta: false },
      { texto: "Tartaruga-marinha", correta: false },
      { texto: "Peixe-palhaço", correta: false }
    ]
  },
  {
    enunciado: "Qual desses animais marinhos possui uma concha externa?",
    alternativas: [
      { texto: "Estrela-do-mar", correta: false },
      { texto: "Caranguejo", correta: false },
      { texto: "Lula", correta: false },
      { texto: "Mexilhão", correta: true }
    ]
  },
  {
    enunciado: "Qual é o principal componente da dieta de um tubarão-branco?",
    alternativas: [
      { texto: "Plâncton", correta: false },
      { texto: "Algas", correta: false },
      { texto: "Focas e leões-marinhos", correta: true },
      { texto: "Corais", correta: false }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
