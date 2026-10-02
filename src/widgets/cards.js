import card from "../entities/card.js";
import createElement from "../shared/createElement.js";
import { numberCards } from "../shared/constants/numberCards.js";
import "./cards.css";

const cards = () => {
  const cardsElem = createElement("div", "cards");
  for (let i = 0; i < 2; i++) {
    for (let number of numberCards) {
      cardsElem.append(card(number.toString(), number.toString()));
    }
  }
  return cardsElem;
};

export default cards;
