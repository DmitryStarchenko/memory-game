const THEME_KEY = "memory-game-theme";

const themes = {
  alliance: "/assets/background-alliance.jpg",
  orda: "/assets/background-orda.jpg",
};

const changeTheme = (app, theme) => {
  if (!themes[theme]) {
    return;
  }
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
