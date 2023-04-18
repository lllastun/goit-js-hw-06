const inputData = document.getElementById("validation-input")

inputData.addEventListener("blur", (event) => {
  if (inputData.value.length === 6) {
    inputData.classList.add("valid") 
    inputData.classList.remove("invalid")
  } else {
    inputData.classList.add("invalid")
    inputData.classList.remove("valid") 
  }
})
