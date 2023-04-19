const inputData = document.getElementById("validation-input");
const requiredNumberOfCharacters = Number(inputData.dataset.length);

function changeClass(obj, add, remove) {
  obj.classList.add(add);
  obj.classList.remove(remove);
}

inputData.addEventListener("blur", (event) => {
  if (inputData.value.length === requiredNumberOfCharacters) {
    changeClass(inputData, "valid", "invalid");
  } else {
    changeClass(inputData, "invalid", "valid");
  }
});
