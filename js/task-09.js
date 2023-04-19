function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const newColorEl = document.querySelector(".color");
changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  newColorEl.textContent = newColor;
  document.querySelector('body').style.backgroundColor  = newColor
});

