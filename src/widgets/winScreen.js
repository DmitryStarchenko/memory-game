import createElement from "../shared/createElement.js";
import { addResult } from "./leaderboard.js";
import modalWindow from "../shared/modalWindow.js";
import "./winScreen.css";

const showWinScreen = (app, moves, createGame) => {
  const title = "Победа";
  const { backModalElement, modalElement } = modalWindow(title);
  const resultElement = createElement("p", "", `Шагов: ${moves}`);
  const restartButton = createElement("button", "restartButton", "Новая Игра");
  restartButton.addEventListener("click", createGame);

  modalElement.append(resultElement, restartButton);
  addResult(moves);
  app.append(backModalElement);
};

export default showWinScreen;
