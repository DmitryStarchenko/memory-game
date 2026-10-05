import createElement from "./createElement";
import "./modalWindow.css";

const modalWindow = (title) => {
  const backModalElement = createElement("div", "backModal");
  const modalElement = createElement("div", "modalElement");
  const titleElement = createElement("h2", "modalTitle", title);
  const closeButton = createElement("button", "closeButton", "Закрыть");
  closeButton.addEventListener("click", () => {
    backModalElement.remove();
  });
  modalElement.append(titleElement, closeButton);
  backModalElement.append(modalElement);
  return { backModalElement, modalElement };
};

export default modalWindow;
