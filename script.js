const flashcards = [
    {
        question: "Qual é a fórmula de Pitágoras?",
        answer: "a² + b² = c², onde a e b são os catetos e c é a hipotenusa."
    },
    {
        question: "Qual é a fórmula de Bhaskara?",
        answer: "x = (-b ± √(b² - 4ac)) / 2a"
    },
    {
        question: "O que é um número primo?",
        answer: "É um número maior que 1, que só tem dois divisores: 1 e ele mesmo."
    },
    {
        question: "Qual é a fórmula da área de um triângulo?",
        answer: "Área = (base * altura) / 2"
    },
    {
        question: "Qual é a soma dos ângulos internos de um triângulo?",
        answer: "180°"
    },
    {
        question: "Qual é a fórmula da equação de uma reta?",
        answer: "y = mx + b, onde m é o coeficiente angular e b é o coeficiente linear."
    },
    {
        question: "Como se calcula a média de um conjunto de números?",
        answer: "Média = (Soma de todos os números) / (Quantidade de números)"
    },
    {
        question: "O que é uma progressão aritmética (PA)?",
        answer: "É uma sequência de números em que a diferença entre termos consecutivos é constante."
    },
    {
        question: "Como calcula-se a área de um círculo?",
        answer: "Área = π * r², onde r é o raio do círculo."
    }
];

function generateFlashcards() {
    const flashcardsContainer = document.getElementById('flashcards');
    
    flashcards.forEach((card) => {
        const flashcardDiv = document.createElement('div');
        flashcardDiv.classList.add('flashcard');
        
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');
        
        // Frente do flashcard (pergunta)
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.innerHTML = `<h3>${card.question}</h3>`;
        
        // Verso do flashcard (resposta)
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.innerHTML = `<p>${card.answer}</p>`;
        
        // Evento de clique para virar o flashcard
        flashcardDiv.onclick = function() {
            cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
        };
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        flashcardDiv.appendChild(cardInner);
        flashcardsContainer.appendChild(flashcardDiv);
    });
}

// Gera os flashcards ao carregar a página
generateFlashcards();
