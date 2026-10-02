import createElement from "../shared/createElement.js";
import "./card.css";

const card = (id, value) => {
  const cardElement = createElement("div", "card", "", id);
  cardElement.dataset.value = value;
  const cardText = createElement("p", "cardText", value);
  cardElement.append(cardText);
  return cardElement;
};

export default card;
