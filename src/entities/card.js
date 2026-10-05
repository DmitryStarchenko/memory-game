import createElement from "../shared/createElement.js";
import "./card.css";

const card = (id, value) => {
  const cardBack = "../../assets/cardBack.png";
  const cardElement = createElement("div", "card", "", id, cardBack);
  cardElement.dataset.value = value;
  const cardText = createElement("p", "cardText", "", "", value);
  cardElement.append(cardText);
  return cardElement;
};

export default card;
