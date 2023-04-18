function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const newColor = document.querySelector(".color");
changeColorButton.addEventListener("click", () => {
  newColor.textContent = getRandomHexColor();
  document.querySelector('body').style.backgroundColor  = newColor.textContent
});

