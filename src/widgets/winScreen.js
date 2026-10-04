import createElement from "../shared/createElement.js";
import { addResult } from "./leaderboard.js";

const showWinScreen = (app, moves, createGame) => {
  const winElement = createElement("div", "win");
  const titleElement = createElement("h2", "", "🎉 You won!");
  const resultElement = createElement("p", "", `Moves: ${moves}`);
  const restartButton = createElement("button", "", "Play Again");
  restartButton.addEventListener("click", createGame);
  const closeButton = createElement("button", "", "Закрыть");
  closeButton.addEventListener("click", () => {
    winElement.remove();
  });
  winElement.append(titleElement, resultElement, restartButton, closeButton);
  addResult(moves);
  app.append(winElement);
};

export default showWinScreen;
