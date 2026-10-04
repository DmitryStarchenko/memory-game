import createElement from "../shared/createElement.js";
import { addResult } from "./leaderboard.js";
import "./winScreen.css";

const showWinScreen = (app, moves, createGame) => {
  const backWinElement = createElement("div", "backWin");
  const winElement = createElement("div", "win");
  const titleElement = createElement("h2", "", "Победа");
  const resultElement = createElement("p", "", `Шагов: ${moves}`);
  const restartButton = createElement("button", "restartButton", "Новая Игра");
  restartButton.addEventListener("click", createGame);
  const closeButton = createElement("button", "closeButton", "Закрыть");
  closeButton.addEventListener("click", () => {
    backWinElement.remove();
  });
  backWinElement.append(winElement);
  winElement.append(titleElement, resultElement, restartButton, closeButton);
  addResult(moves);
  app.append(backWinElement);
};

export default showWinScreen;
