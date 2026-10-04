import createElement from "../shared/createElement.js";
import openCharacter from "./createCharacters.js";
import { openLeaderboard } from "./leaderboard.js";
import "./header.css";

const createHeader = (app, onNewGame) => {
  const headerElement = createElement("header", "header");
  const newGameButton = createElement("button", "newGameButton", "Новая игра");
  newGameButton.addEventListener("click", onNewGame);
  const leaderboardButton = createElement(
    "button",
    "leaderboardButton",
    "Таблица лидеров",
  );
  leaderboardButton.addEventListener("click", () => {
    openLeaderboard(app);
  });
  const characterButton = createElement("button", "characterButton", "Герои");
  characterButton.addEventListener("click", () => {
    openCharacter(app);
  });
  headerElement.append(newGameButton, leaderboardButton, characterButton);
  return headerElement;
};

export default createHeader;
