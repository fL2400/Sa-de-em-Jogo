const questions = [
    {
        question: "O Sol é uma estrela?",
        answer: true
    },
    {
        question: "A Terra é plana?",
        answer: false
    },
    {
        question: "A água ferve a 100°C ao nível do mar?",
        answer: true
    },
    {
        question: "O cão é um réptil?",
        answer: false
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    questionContainer.textContent = questions[currentQuestionIndex].question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Você acertou! 😊";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Você errou! 😞";
        feedback.style.color = "red";
    }

    document.getElementById("next-question").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }

    loadQuestion();
}

window.onload = loadQuestion;
