import createElement from "../shared/createElement.js";
import modalWindow from "../shared/modalWindow.js";

const STORAGE_KEY = "memory-game-leaderboard";
const MAX_RESULTS = 10;
const getResults = () => {
  const savedResults = localStorage.getItem(STORAGE_KEY);
  if (!savedResults) {
    return [];
  }
  try {
    return JSON.parse(savedResults);
  } catch {
    return [];
  }
};

const saveResults = (results) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const addResult = (moves) => {
  const results = getResults();
  results.push({
    moves,
    date: formatDate(new Date()),
    timestamp: Date.now(),
  });

  results.sort((firstResult, secondResult) => {
    if (firstResult.moves !== secondResult.moves) {
      return firstResult.moves - secondResult.moves;
    }
    return firstResult.timestamp - secondResult.timestamp;
  });
  const topResults = results.slice(0, MAX_RESULTS);
  saveResults(topResults);
};

const createLeaderboard = () => {
  const title = "Таблица лидеров";
  const { backModalElement, modalElement } = modalWindow(title);
  const results = getResults();
  if (results.length === 0) {
    const emptyElement = createElement(
      "p",
      "leaderboardEmpty",
      "Пока нет результатов",
    );
    modalElement.append(emptyElement);
  } else {
    const tableElement = createElement("table", "leaderboardTable");
    const theadElement = createElement("thead");
    const headerRowElement = createElement("tr");
    const placeHeaderElement = createElement("th", "", "Место");
    const movesHeaderElement = createElement("th", "", "Ходы");
    const dateHeaderElement = createElement("th", "", "Дата");
    headerRowElement.append(
      placeHeaderElement,
      movesHeaderElement,
      dateHeaderElement,
    );
    theadElement.append(headerRowElement);
    const tbodyElement = createElement("tbody");

    results.forEach((result, index) => {
      const rowElement = createElement("tr");
      const placeElement = createElement("td", "", String(index + 1));
      const movesElement = createElement("td", "", String(result.moves));
      const dateElement = createElement("td", "", result.date);
      rowElement.append(placeElement, movesElement, dateElement);
      tbodyElement.append(rowElement);
    });
    tableElement.append(theadElement, tbodyElement);
    modalElement.append(tableElement);
  }

  backModalElement.append(modalElement);
  return backModalElement;
};

const openLeaderboard = (app) => {
  const existingLeaderboard = app.querySelector(".leaderboard");
  if (existingLeaderboard) {
    return;
  }
  const leaderboardElement = createLeaderboard();
  app.append(leaderboardElement);
};

export { addResult, openLeaderboard };
