const flashcards = [
    {
        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        answer: "Júpiter"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é a fórmula da água?",
        answer: "H2O"
    }
];

let currentIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    
    questionElement.innerHTML = flashcards[currentIndex].question;
    answerElement.innerHTML = flashcards[currentIndex].answer;
    
    // Esconde a resposta inicialmente
    answerElement.style.display = 'none';
}

function showAnswer() {
    const answerElement = document.getElementById('answer');
    answerElement.style.display = 'block';
}

function nextFlashcard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showQuestion();
}

document.getElementById('flashcard').addEventListener('click', showAnswer);

showQuestion();
