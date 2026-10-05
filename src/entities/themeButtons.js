import createElement from "../shared/createElement.js";
import { changeTheme } from "../features/changeTheme.js";
import "./themeButtons.css";

const createThemeButtons = (app) => {
  const iconLightButton = "../../assets/icon-alliance.png";
  const iconDarkButton = "../../assets/icon-horde.png";
  const buttonsElement = createElement("div", "themeButtons");
  const lightButton = createElement(
    "button",
    "themeButtonAlliance",
    "",
    "",
    iconLightButton,
  );
  const darkButton = createElement(
    "button",
    "themeButtonHorde",
    "",
    "",
    iconDarkButton,
  );
  lightButton.addEventListener("click", () => {
    changeTheme(app, "alliance");
  });
  darkButton.addEventListener("click", () => {
    changeTheme(app, "horde");
  });
  buttonsElement.append(lightButton, darkButton);
  return buttonsElement;
};

export default createThemeButtons;
