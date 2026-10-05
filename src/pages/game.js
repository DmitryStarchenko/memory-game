import cards from "../widgets/cards.js";
import createHeader from "../widgets/header.js";
import createCounters from "../features/counters.js";
import createWinScreen from "../widgets/winScreen.js";
import createElement from "../shared/createElement.js";
import "./game.css";

const createGame = (app) => {
  let gameFinished = false;
  let startGame;
  const headerElement = createHeader(app, () => {
    startGame();
  });

  const countersElement = createElement("div", "counters");
  const movesElement = createElement("p", "moves");
  const pairsElement = createElement("p", "pairs");
  const counters = createCounters(movesElement, pairsElement);
  const showWinScreen = () => {
    if (gameFinished) {
      return;
    }
    gameFinished = true;
    createWinScreen(app, counters.getMoves(), startGame);
  };

  startGame = () => {
    gameFinished = false;
    counters.reset();
    const cardsElement = cards(
      counters.updateMoves,
      counters.updatePairs,
      showWinScreen,
    );
    countersElement.replaceChildren(movesElement, pairsElement);
    app.replaceChildren(headerElement, countersElement, cardsElement);
  };
  startGame();
};

export default createGame;
