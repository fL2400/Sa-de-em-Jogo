const questions = [
    { question: "As reações às vacinas significam que elas não são seguras?", answer: false },
    { question: "Em casos de emergência deve-se procurar a clínica da família?", answer: false },
    { question: "O atendimento nos serviços de saúde ocorre com base na classificação de risco, assim, os casos mais graves têm prioridade?", answer: true },
    { question: "As consultas nas Clínicas da Família são realizadas por médicos e enfermeiros?", answer: true },
    { question: "O SUS não é utilizado por todos os cidadãos.", answer: false },
    { question: "Todo município precisa de um hospital?", answer: false },
    { question: "O SUS tem como um de seus princípios a participação popular?", answer: true },
    { question: "Cada indivíduo possui uma unidade de atenção básica de referência em seu território?", answer: true },
    { question: "A saúde no Brasil é um direito de todos e dever do Estado, o que não exclui o dever das pessoas, da família, das empresas e da sociedade.", answer: true },
    { question: "São fatores determinantes e condicionantes da saúde, entre outros, a alimentação, a moradia, o saneamento básico, o meio ambiente, o trabalho, a renda, a educação, a atividade física, o transporte, o lazer e o acesso aos bens e serviços essenciais.", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const resultMessageElement = document.getElementById('result-message');
const trueButton = document.getElementById('true-button');
const falseButton = document.getElementById('false-button');
const scoreElement = document.getElementById('score');

// Estilos com base no seu código CSS
const defaultFontStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '2em',   // Apliquei o tamanho 2em, conforme o #question no CSS
    fontWeight: 'normal',
    color: '#333',     // Apliquei a cor #333 conforme o CSS
};

// Função para aplicar o estilo de fonte correto a todos os elementos
function applyDefaultFontStyle() {
    questionElement.style.fontFamily = defaultFontStyle.fontFamily;
    questionElement.style.fontSize = defaultFontStyle.fontSize;
    questionElement.style.fontWeight = defaultFontStyle.fontWeight;
    questionElement.style.color = defaultFontStyle.color;
    
    resultMessageElement.style.fontFamily = defaultFontStyle.fontFamily;
    resultMessageElement.style.fontSize = '1.5em'; // Ajustei para 1.5em conforme o #result-message no CSS
    resultMessageElement.style.fontWeight = defaultFontStyle.fontWeight;
    resultMessageElement.style.color = defaultFontStyle.color;
    
    scoreElement.style.fontFamily = defaultFontStyle.fontFamily;
    scoreElement.style.fontSize = '2em'; // Apliquei o 2em conforme o #score-section no CSS
    scoreElement.style.color = defaultFontStyle.color;
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    resultMessageElement.textContent = '';
    scoreElement.textContent = `Pontuação: ${score}`;
}

function checkAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    if (isTrue === currentQuestion.answer) {
        score += 1;
        resultMessageElement.textContent = 'Você acertou!';
        resultMessageElement.style.color = 'green';
    } else {
        resultMessageElement.textContent = 'Você errou!';
        resultMessageElement.style.color = 'red';
    }

    // Atraso de 2 segundos antes de avançar para a próxima pergunta ou encerrar
    setTimeout(() => {
        // Avança para a próxima pergunta ou finaliza a rodada
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endRound(); // Se for a última pergunta, finaliza a rodada
        }
    }, 2000);
}

function endRound() {
    // Exibe a mensagem final dependendo da pontuação
    if (score > 6) {
        resultMessageElement.textContent = "PARABÉNS, VOCÊ É UM ALIADO DO SUS!";
    } else {
        resultMessageElement.textContent = "VAMOS CONTINUAR APRENDENDO SOBRE O SUS?";
    }

    // Aplica o mesmo estilo de fonte do jogo
    applyDefaultFontStyle();

    // Aplica outras modificações de estilo específicas para a mensagem de resultado final
    resultMessageElement.style.textTransform = 'uppercase'; // Deixa a mensagem em maiúsculas

    // Atualiza a pontuação na tela
    scoreElement.textContent = `Pontuação: ${score}`;

    // Aguardar 30 segundos e reiniciar o jogo
    setTimeout(() => {
        // Limpa a mensagem de resultado final
        resultMessageElement.textContent = '';
        score = 0; // Zera a pontuação
        currentQuestionIndex = 0; // Reseta o índice da pergunta
        showQuestion(); // Carrega a primeira pergunta novamente
    }, 30000); // 30 segundos de espera para reiniciar o jogo
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));

// Carrega a primeira pergunta ao iniciar o jogo
showQuestion();
