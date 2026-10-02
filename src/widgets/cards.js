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

const cards = (onMove, onWin) => {
  const cardsElement = createElement("div", "cards");
  let openedCards = [];
  let matchedPairs = 0;
  const cardValues = [...numberCards, ...numberCards];
  const shuffledCards = shuffle(cardValues);

  shuffledCards.forEach((value, index) => {
    const cardElement = card(`card-${index + 1}`, value.toString());

    cardElement.addEventListener("click", () => {
      if (
        cardElement.classList.contains("card--opened") ||
        cardElement.classList.contains("card--matched")
      ) {
        return;
      }
      if (openedCards.length >= 2) {
        return;
      }
      cardElement.classList.add("card--opened");
      openedCards.push(cardElement);
      if (openedCards.length !== 2) {
        return;
      }
      onMove();
      const [firstCard, secondCard] = openedCards;
      if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add("card--matched");
        secondCard.classList.add("card--matched");
        matchedPairs += 1;
        openedCards = [];
        if (matchedPairs === numberCards.length) {
          onWin();
        }
        return;
      }
      setTimeout(() => {
        firstCard.classList.remove("card--opened");
        secondCard.classList.remove("card--opened");
        openedCards = [];
      }, 1000);
    });
    cardsElement.append(cardElement);
  });
  return cardsElement;
};

export default cards;
