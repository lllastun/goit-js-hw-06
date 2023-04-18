// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeControl = document.getElementById('font-size-control')
const textSise = document.getElementById('text')
textSise.style.fontSize = sizeControl.value.toString().concat('px')

sizeControl.oninput = () => {
  textSise.style.fontSize = sizeControl.value.toString().concat('px')
}