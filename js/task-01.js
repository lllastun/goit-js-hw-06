
// const categories = document.querySelectorAll('#categories li.item')
// console.log(`Number of categories: ${categories.length}`);

// categories.forEach(element => {
//   console.log(`Category: ${element.querySelector('h2').textContent}\nElements: ${element.querySelectorAll('li').length}`)
// });

const allCategories = document.querySelectorAll('.item');
console.log('Number of categories:', allCategories.length);

allCategories.forEach(category => {
    console.log('Category:', category.firstElementChild.textContent, 
    '\nElements:', category.lastElementChild.children.length);
});