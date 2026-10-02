import card from "../entities/card.js";
import createElement from "../shared/createElement.js";
import { numberCards } from "../shared/constants/numberCards.js";
import "./cards.css";

const cards = () => {
  const cardsElem = createElement("div", "cards");
  let cardId = 1;
  for (let i = 0; i < 2; i++) {
    for (let number of numberCards) {
      cardsElem.append(card(`card-${cardId}`, number.toString()));

      cardId++;
    }
  }
  return cardsElem;
};

export default cards;
