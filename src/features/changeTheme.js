import playMusic from "./playMusic";

const THEME_KEY = "memory-game-theme";

const themes = {
  alliance: "/assets/background-alliance.jpg",
  horde: "/assets/background-horde.jpg",
};

const changeTheme = (app, theme) => {
  if (!themes[theme]) {
    return;
  }
  const playAudio = playMusic(theme);
  playAudio();

  app.style.backgroundImage = `url(${themes[theme]})`;
  localStorage.setItem(THEME_KEY, theme);
};

const loadTheme = (app) => {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme && themes[savedTheme]) {
    changeTheme(app, savedTheme);
    return;
  }

  changeTheme(app, "alliance");
};

export { changeTheme, loadTheme };
