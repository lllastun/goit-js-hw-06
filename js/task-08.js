// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;
//   console.log(email.value, password.value);
// });

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  // const objFieldsForm = {
  //   email: email.value,
  //   password: password.value,
  // }

  ///// alternative way start
  function getFields(form) {
    // return form.getElementsByTagName("input");
    return form.querySelectorAll('[name]');
  }
  const objFieldsForm = Array.from(getFields(form)).reduce((acc, input) => {
    acc[input.name] = input.value;
    return acc;
  }, {});
    ///// alternative way end

  console.log(objFieldsForm);
  event.currentTarget.reset();
}
