const createElement = (
  teg,
  className = "",
  text = "",
  id = "",
  background = "",
) => {
  const elem = document.createElement(teg);
  elem.className = className;
  elem.id = id;
  elem.textContent = text;
  elem.style.backgroundImage = `url(${background})`;
  return elem;
};

export default createElement;
