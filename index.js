/**
* 1. Напишіть функцію sum, яка приймає два аргументи та повертає їх суму.
* Результат функції запишіть в зміну та виведіть в консоль.
* 2. Напишіть функцію greet, яка приймає ім'я як аргумент та повертає рядок
* "Hello, [ім'я]". Результат функції вивести на сторінку
* 3. Напишіть функцію isEven, яка приймає число та повертає true, якщо воно
* парне, і false - якщо непарне. Результат вивести в консоль
* 4. Напишіть функцію squareArray, яка приймає масив чисел та повертає новий
* масив, де кожен елемент є квадратом відповідного елемента вхідного масиву.
* const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];
* 5. Створіть об'єкт person з властивостями name, age та методом introduce,
* який повертає рядок "My name is [name] and I am [age] years old".
* Перезапишіть властивість name та знову скористайтеся методом introduce.
* 6. Напишіть функцію isAdult, яка приймає об'єкт person та повертає true,
* якщо вік більше або дорівнює 18, і false - якщо менше.
* 7. Напишіть функцію cloneObject, яка приймає об'єкт та повертає його клон.
* Використайте розпилення.
* 8. Напишіть функцію findMax, яка приймає масив чисел та повертає найбільше
* число в масиві. Виконання без циклу
* 9. Напишіть функцію filterEvens, яка приймає масив чисел та повертає новий
* масив, що містить тільки парні числа.
* 10. Напишіть функцію sumArray, яка приймає масив чисел та повертає суму всіх
* елементів масиву.(reduce)
* 11. Створіть кнопку, яка при натисканні змінює текст параграфа на "Button
* clicked!".
* 12. Створіть форму з текстовим полем та кнопкою. При натисканні на кнопку
* виведіть значення текстового поля в консоль.
*/
// 1
// const a = 2;
// const b = 5;
// const sum = a + b;
// console.log(sum)

// 2
function greet(name) {
    return `Hello, ${name}`;
}

function showGreeting() {
    const name = "Pasha";
    const result = greet(name);
    document.querySelector("#greeting").innerHTML = result
}
showGreeting()

// 3
function isEvenNum(number) {
    return number % 2 === 0;
}

function checkNumber() {
    const number = 4;  
    const result = isEvenNum(number);
    console.log(`${number}is ${result}`);
}
// 4
function squareArray(numbers) {
    return numbers.map(number => number * number);
}

function showArray() {
    const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];
    const squaredNumbers = squareArray(numbers);
    console.log("original arr:", numbers);
    console.log("square arr:", squaredNumbers);
}
// 5
const person = {
    name: "Pasha",
    age: 30,
    introduce() {
        return `Я ${this.name} і мені ${this.age}років.`;
    }
};
console.log(person.introduce());
person.name = "Pavlo";
console.log(person.introduce());
// 6
function isAdult(person) {
    return person.age >= 18;
}
const person = {
    name: "Pasha",
    age: 16
};

console.log(isAdult(person));
// 7
function cloneObject(obj) {
    return {...obj};
}
const originalObject = {
    name: "Pasha",
    age: 16,
    hobbie: "none"
};

const clonedObject = cloneObject(originalObject);
console.log("Original Object:", originalObject);
console.log("Cloned Object:", clonedObject);
console.log("Are objects equal?", originalObject === clonedObject);
// 8
// function findMax(numbers) {
//     return Math.max(...numbers);
// }
// const numbers = [1, 2, 3, 4, 5];

// const maxNumber = findMax(numbers);
// console.log("Max number is -", maxNumber);
// 9
// function filterEvens(numbers) {
//     return numbers.filter(number => number % 2 === 0);
// }
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = filterEvens(numbers);
// console.log("pair nums -", evenNumbers); 
// 10
function sumArray(numbers) {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log("Sum:", sum);
// 11
  const button = document.getElementById("changeButton");
  const paragraph = document.getElementById("demo");
  button.addEventListener("click", function() {
      paragraph.textContent = "Змінено";
  });
// 12

 const form = document.getElementById("form");
 const textInput = document.getElementById("textInput");
 const submitButton = document.getElementById("submitButton");

 submitButton.addEventListener("click", function(event) {
     event.preventDefault();
     const inputValue = textInput.value;
     console.log("Введений текст:", inputValue);
 });