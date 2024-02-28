'use strict'

let arrayLength = +prompt('Введіть довжину масиву');
let userArray = [];

for(let i = 0; i < arrayLength; i++){
    let element = +prompt(`Введіть значення ${i + 1} eлементу`);
    userArray.push(element);
}
console.log(`Ваш масив : ${userArray}`);

function compareNumbers(a, b) {
    return a - b;
}
userArray.sort(compareNumbers);

console.log(`Ваш масив відсортовано за зростанням : ${userArray}`);

userArray.splice(1, 3);

console.log(`З вашого масиву видвлено з 2 по 4 елемент включно.Тепер ваш масив виглядає так: ${userArray}`);