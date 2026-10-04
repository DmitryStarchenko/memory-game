import cards from "../widgets/cards.js";
import createHeader from "../widgets/header.js";
import createCounters from "../features/counters.js";
import createWinScreen from "../widgets/winScreen.js";
import createElement from "../shared/createElement.js";

const createGame = (app) => {
  let gameFinished = false;
  const headerElement = createHeader(app);
  const countersElement = createElement("div", "counters");
  const movesElement = createElement("p", "moves");
  const pairsElement = createElement("p", "pairs");
  const counters = createCounters(movesElement, pairsElement);

  const startGame = () => {
    gameFinished = false;
    counters.reset();
    const cardsElement = cards(
      counters.updateMoves,
      counters.updatePairs,
      showWinScreen,
    );
    countersElement.append(movesElement, pairsElement);
    app.replaceChildren(headerElement, countersElement, cardsElement);
  };

  const showWinScreen = () => {
    if (gameFinished) {
      return;
    }
    gameFinished = true;
    createWinScreen(app, counters.getMoves(), startGame);
  };
  startGame();
};

export default createGame;
