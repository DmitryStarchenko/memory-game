import createElement from "../shared/createElement.js";
import { mainCharacters } from "../shared/constants/mainCharacters.js";
import "./createCharacters.css";

const createCharacters = (characters) => {
  const backCharactersElement = createElement("div", "backCharacters");
  const charactersElement = createElement("div", "characters");
  const charactersContent = createElement("div", "charactersContent");

  characters.forEach((character) => {
    const characterElement = createElement("article", "character");
    const imageElement = createElement(
      "div",
      "character__image",
      "",
      "",
      character.image,
    );
    const contentElement = createElement("div", "character__content");
    const nameElement = createElement("h2", "character__name", character.name);
    const descriptionElement = createElement(
      "p",
      "character__description",
      character.description,
    );
    contentElement.append(nameElement, descriptionElement);
    characterElement.append(imageElement, contentElement);
    charactersContent.append(characterElement);
  });

  const closeButton = createElement("button", "characters__close", "Закрыть");
  closeButton.addEventListener("click", () => {
    backCharactersElement.remove();
  });
  charactersElement.append(charactersContent);
  charactersElement.append(closeButton);
  backCharactersElement.append(charactersElement);
  return backCharactersElement;
};

const openCharacter = (app) => {
  const existingCharacter = app.querySelector(".backCharactersElement");
  if (existingCharacter) {
    return;
  }
  const charactersElement = createCharacters(mainCharacters);
  app.append(charactersElement);
};

export default openCharacter;
