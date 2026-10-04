import createElement from "../shared/createElement.js";
import { changeTheme } from "../features/changeTheme.js";
import "./themeButtons.css";

const createThemeButtons = (app) => {
  const iconLightButton = "../../assets/icon-alliance.png";
  const iconDarkButton = "../../assets/icon-orda.png";
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
    "themeButtonOrda",
    "",
    "",
    iconDarkButton,
  );
  lightButton.addEventListener("click", () => {
    changeTheme(app, "alliance");
  });
  darkButton.addEventListener("click", () => {
    changeTheme(app, "orda");
  });
  buttonsElement.append(lightButton, darkButton);
  return buttonsElement;
};

export default createThemeButtons;
