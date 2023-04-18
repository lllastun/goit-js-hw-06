function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const currentDiv = document.createElement("div");
    currentDiv.className = 'divChild';
    currentDiv.style.width = `${30 + 10 * i}px`;
    currentDiv.style.height = `${30 + 10 * i}px`;
    currentDiv.style.backgroundColor = getRandomHexColor();
    divMainEl.append(currentDiv);
  }
}

function destroyBoxes() {
  const divChildEls = document.querySelectorAll(".divChild");
  divChildEls.forEach((child) => divMainEl.removeChild(child));
}

const readControls = document.getElementById("controls");
const divMainEl = document.getElementById("boxes");

readControls.addEventListener("click", (control) => {
  if (control.target.getAttribute("data-create") == "") {
    const inputElement = readControls.querySelector("input").value;
    createBoxes(inputElement);
  }
  if (control.target.getAttribute("data-destroy") == "") {
    destroyBoxes();
  }
});

