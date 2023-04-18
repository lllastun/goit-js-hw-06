
const categories = document.querySelectorAll('#categories li.item')
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}\nElements: ${element.querySelectorAll('li').length}`)
});