import cards from "../widgets/cards.js";
import "./style.css";

const app = document.querySelector("#app");
let moves = 0;
const movesElement = document.createElement("p");

movesElement.className = "moves";

const updateMoves = () => {
  moves += 1;
  movesElement.textContent = `Moves: ${moves}`;
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
  movesElement.textContent = "Moves: 0";
  const cardsElement = cards(updateMoves, showWinScreen);
  app.replaceChildren(movesElement, cardsElement);
};

createGame();
