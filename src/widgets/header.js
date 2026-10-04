import createElement from "../shared/createElement.js";
import { openLeaderboard } from "./leaderboard.js";

const createHeader = (app) => {
  const headerElement = createElement("header", "header");
  const leaderboardButton = createElement("button", "", "Таблица лидеров");
  leaderboardButton.addEventListener("click", () => {
    openLeaderboard(app);
  });
  headerElement.append(leaderboardButton);
  return headerElement;
};

export default createHeader;
