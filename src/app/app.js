import cards from "../widgets/cards.js";
import "./style.css";

const app = document.querySelector("#app");
let moves = 0;
let pairs = 0;
const countersElement = document.createElement("div");
countersElement.className = "counters";
const movesElement = document.createElement("p");
movesElement.className = "moves";
const pairsElement = document.createElement("p");
pairsElement.className = "pairs";

const updateCounters = () => {
  movesElement.textContent = `Moves: ${moves}`;
  pairsElement.textContent = `Pairs: ${pairs} / 8`;
};

const updateMoves = () => {
  moves += 1;
  updateCounters();
};

const updatePairs = () => {
  pairs += 1;
  updateCounters();
};

const showWinScreen = () => {
  const winElement = document.createElement("div");
  winElement.className = "win";
  const titleElement = document.createElement("h2");
  titleElement.textContent = "🎉 You won!";
  const resultElement = document.createElement("p");
  resultElement.textContent = `Moves: ${moves}`;
  const restartButton = document.createElement("button");
  restartButton.textContent = "Play Again";
  restartButton.addEventListener("click", createGame);
  const closeButton = document.createElement("button");
  closeButton.textContent = "Закрыть";
  closeButton.addEventListener("click", () => {
    winElement.remove();
  });

  winElement.append(titleElement, resultElement, restartButton, closeButton);

  app.append(winElement);
};

const createGame = () => {
  moves = 0;
  pairs = 0;
  updateCounters();
  const cardsElement = cards(updateMoves, updatePairs, showWinScreen);
  countersElement.append(movesElement, pairsElement);
  app.replaceChildren(countersElement, cardsElement);
};

createGame();
