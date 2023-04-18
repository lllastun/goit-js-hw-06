const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", (event) => {
  if (event) {
     outputName.textContent = event.currentTarget.value.trim()
  }
  if (outputName.textContent.trim()  === "")  {
    outputName.textContent = "Anonymous"
  }
})

