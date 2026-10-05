import createGame from "../pages/game.js";
import { loadTheme } from "../features/changeTheme.js";
import playMusic from "../features/playMusic.js";

import "./style.css";

const THEME_KEY = "memory-game-theme";
const app = document.querySelector("#app");
loadTheme(app);
createGame(app);

const savedTheme = localStorage.getItem(THEME_KEY);
const startMusic = () => {
  playMusic(savedTheme);
};
window.addEventListener("click", startMusic, {
  once: true,
});
