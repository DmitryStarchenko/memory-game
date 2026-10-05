const createCounters = (movesElement, pairsElement) => {
  let moves = 0;
  let pairs = 0;

  const updateCounters = () => {
    movesElement.textContent = `Шагов: ${moves}`;
    pairsElement.textContent = `Пар: ${pairs} / 8`;
  };

  const updateMoves = () => {
    moves += 1;
    updateCounters();
  };

  const updatePairs = () => {
    pairs += 1;
    updateCounters();
  };

  const reset = () => {
    moves = 0;
    pairs = 0;
    updateCounters();
  };

  const getMoves = () => moves;
  return {
    updateMoves,
    updatePairs,
    reset,
    getMoves,
  };
};

export default createCounters;
