import card from "../entities/card.js";
import createElement from "../shared/createElement.js";
import { numberCards } from "../shared/constants/numberCards.js";
import shuffle from "../features/shuffle.js";
import createCardClickHandler from "../features/handleCardClick.js";
import "./cards.css";

const cards = (onMove, onPair, onWin) => {
  const cardsElement = createElement("div", "cards");
  const cardValues = [...numberCards, ...numberCards];
  const shuffledCards = shuffle(cardValues);
  const handleCardClick = createCardClickHandler(
    onMove,
    onPair,
    onWin,
    numberCards.length,
  );

  shuffledCards.forEach((value, index) => {
    const cardElement = card(`card-${index + 1}`, value.toString());
    cardElement.addEventListener("click", () => {
      handleCardClick(cardElement);
    });
    cardsElement.append(cardElement);
  });
  return cardsElement;
};

export default cards;
