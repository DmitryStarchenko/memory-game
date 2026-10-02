import card from "../entities/card.js";
import createElement from "../shared/createElement.js";
import { numberCards } from "../shared/constants/numberCards.js";
import "./cards.css";

const shuffle = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
};

const cards = () => {
  const cardsElem = createElement("div", "cards");

  const cardValues = [...numberCards, ...numberCards];

  const shuffledCards = shuffle(cardValues);

  shuffledCards.forEach((value, index) => {
    cardsElem.append(card(`card-${index + 1}`, value.toString()));
  });

  return cardsElem;
};

export default cards;
