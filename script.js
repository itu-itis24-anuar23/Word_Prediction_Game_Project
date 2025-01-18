const word = "NYMPH";
let hiddenWord = Array(word.length).fill("_");
let score = 0;
let lives = 3;
const correctGuesses = []; 

const wordDisplay = document.querySelectorAll(".letter-slot");
const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");

function updateWordDisplay() {
    word.split("").forEach((letter, index) => {
        const slot = document.querySelectorAll(".letter-slot")[index];
        if (hiddenWord[index] !== "_") {
            const img = document.createElement("img");
            img.src = `images/${hiddenWord[index].toUpperCase()}.svg`;
            img.alt = hiddenWord[index];
            img.style.display = "block";
            slot.innerHTML = "";
            slot.appendChild(img);
        } else {
            slot.innerHTML = "";
        }
    });
}

function updateHearts() {
    livesDisplay.innerHTML = ""; 

    for (let i = 0; i < lives; i++) {
        const container = document.createElement("div");
        container.classList.add("heart-container");

        const img = document.createElement("img");
        img.src = "images/heart.svg"; 
        img.alt = "Heart";
        img.classList.add("heart");

        container.appendChild(img);
        livesDisplay.appendChild(container);
    }
}

function resetGame() {
    hiddenWord = Array(word.length).fill("_");
    score = 0;
    lives = 3;
    correctGuesses.length = 0;
    guessInput.value = "";
    submitBtn.disabled = false;
    updateWordDisplay();
    updateHearts();
    scoreDisplay.textContent = score;
}

submitBtn.addEventListener("click", () => {
    const guess = guessInput.value.toUpperCase().trim(); 
    guessInput.value = ""; 

