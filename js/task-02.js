const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.getElementById(`ingredients`)

ingredients.forEach(ingredient => {
  const liItem = document.createElement(`li`)
  liItem.classList.add(`item`)
  liItem.textContent = ingredient
  ulRef.append(liItem)
})
