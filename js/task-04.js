const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementButton = document.querySelector('[data-action="increment"]')
const valueSpan = document.getElementById('value')
let counterValue = +valueSpan.innerText 

decrementButton.addEventListener("click", () => {
  counterValue = counterValue - 1
  valueSpan.innerText = counterValue
})

incrementButton.addEventListener("click", () => {
  counterValue = counterValue + 1
  valueSpan.innerText = counterValue
})
