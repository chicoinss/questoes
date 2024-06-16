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
let pontuacao = 0;

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  perguntaAtual.alternativas.forEach(alternativa => {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa, botaoAlternativas));
    caixaAlternativas.appendChild(botaoAlternativas);
  });
}

function respostaSelecionada(alternativa, botao) {
  if (alternativa.correta) {
    pontuacao++;
    botao.style.backgroundColor = "green";
  } else {
    botao.style.backgroundColor = "red";
  }

  setTimeout(() => {
    atual++;
    mostraPergunta();
  }, 1000); // Espera 1 segundo antes de ir para a próxima pergunta
}

function mostraResultado() {
  caixaPerguntas.textContent = "Resultado:";
  textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
