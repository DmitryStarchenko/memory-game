const createCardClickHandler = (onMove, onPair, onWin, totalPairs) => {
  let openedCards = [];
  let matchedPairs = 0;
  const handleCardClick = (cardElement) => {
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
      onPair();
      openedCards = [];
      if (matchedPairs === totalPairs) {
        onWin();
      }
      return;
    }
    setTimeout(() => {
      firstCard.classList.remove("card--opened");
      secondCard.classList.remove("card--opened");
      openedCards = [];
    }, 1000);
  };
  return handleCardClick;
};

export default createCardClickHandler;
