import createElement from "../shared/createElement.js";
import "./card.css";

const card = (id, text) => {
  const card = createElement("div", "card", "", id);
  const cardText = createElement("p", "cardText", text);
  card.append(cardText);
  return card;
};

export default card;
