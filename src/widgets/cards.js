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
  let moves = 0;
  let matchedPairs = 0;
  let openedCards = [];

  const updateMoves = () => {
    moves += 1;
    document.querySelector(".moves").textContent = `Moves: ${moves}`;
  };

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
      if (openedCards.length === 2) {
        updateMoves();
        const [firstCard, secondCard] = openedCards;
        if (firstCard.dataset.value === secondCard.dataset.value) {
          console.log("Pair!");
          firstCard.classList.add("card--matched");
          secondCard.classList.add("card--matched");
          matchedPairs += 1;
          openedCards = [];
          if (matchedPairs === numberCards.length) {
            console.log("You won!");
          }
        } else {
          console.log("Not a pair!");
          setTimeout(() => {
            firstCard.classList.remove("card--opened");
            secondCard.classList.remove("card--opened");
            openedCards = [];
          }, 1000);
        }
      }
    });
    cardsElem.append(cardElement);
  });
  return cardsElem;
};

export default cards;
