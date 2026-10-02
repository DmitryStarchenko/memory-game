import cards from "../widgets/cards.js";
import "./style.css";

const app = document.querySelector("#app");
const movesElement = document.createElement("p");

movesElement.className = "moves";
movesElement.textContent = "Moves: 0";

app.append(movesElement);
app.append(cards());
