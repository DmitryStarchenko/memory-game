import createElement from "../shared/createElement.js";

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
  const modalElement = createElement("div", "leaderboard");
  const contentElement = createElement("div", "leaderboard__content");
  const titleElement = createElement(
    "h2",
    "leaderboard__title",
    "Таблица лидеров",
  );
  const results = getResults();
  contentElement.append(titleElement);
  if (results.length === 0) {
    const emptyElement = createElement(
      "p",
      "leaderboard__empty",
      "Пока нет результатов",
    );
    contentElement.append(emptyElement);
  } else {
    const tableElement = createElement("table", "leaderboard__table");
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
    contentElement.append(tableElement);
  }

  const closeButton = createElement("button", "leaderboard__close", "Закрыть");
  closeButton.addEventListener("click", () => {
    modalElement.remove();
  });
  contentElement.append(closeButton);
  modalElement.append(contentElement);
  return modalElement;
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
