import createGame from "../pages/game.js";
import { loadTheme } from "../features/changeTheme.js";
import "./style.css";

const app = document.querySelector("#app");
loadTheme(app);
createGame(app);
