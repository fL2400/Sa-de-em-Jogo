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

    // Aplica estilo para a mensagem: azul e maiúsculas
    resultMessageElement.style.color = 'blue';
    resultMessageElement.style.textTransform = 'uppercase';

    // Zera a pontuação e reinicia o índice das perguntas
    score = 0;
    currentQuestionIndex = 0;

    // Atualiza a pontuação na tela
    scoreElement.textContent = `Pontuação: ${score}`;

    // Limpa a mensagem de resultado após 5 segundos e reinicia o jogo
    setTimeout(() => {
        resultMessageElement.textContent = ''; // Limpa a mensagem de resultado
        showQuestion(); // Recarrega as perguntas (inicia uma nova rodada)
    }, 5000); // A mensagem de resultado será exibida por 5 segundos
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));

// Carrega a primeira pergunta ao iniciar o jogo
showQuestion();
