const createElement = (teg, className = "", text = "", id = "") => {
  const elem = document.createElement(teg);
  elem.className = className;
  elem.id = id;
  elem.textContent = text;
  return elem;
};

export default createElement;
