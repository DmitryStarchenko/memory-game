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
      "characterImage",
      "",
      "",
      character.image,
    );
    const contentElement = createElement("div", "characterContent");
    const nameElement = createElement("h2", "characterName", character.name);
    const descriptionElement = createElement(
      "p",
      "characterDescription",
      character.description,
    );
    contentElement.append(nameElement, descriptionElement);
    characterElement.append(imageElement, contentElement);
    charactersContent.append(characterElement);
  });

  const closeButton = createElement("button", "charactersClose", "Закрыть");
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
