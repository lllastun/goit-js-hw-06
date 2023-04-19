const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.getElementById(`ingredients`)

const array = ingredients.map(ingredient => {
  const liItem = document.createElement(`li`)
  liItem.classList.add(`item`)
  liItem.textContent = ingredient
  return liItem;
})
  ulRef.append(...array)
