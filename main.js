let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1.Знайти суму та кількість позитивних елементів.

console.log('Завдання 1');
let count = 0;

array.forEach(function (element) {
    if(element > 0) {
        count++;
    }
})
console.log(`Кількість позитивних елементів в масиві: ${count}`);

let newArray = array.filter(function (element) {
    return element > 0;
})

console.log(newArray);
let sum = newArray.reduce(function (accum, currentValue) {
    return accum + currentValue;
}, 0);

console.log(`Сума позитивних елементів в масиві дорівнює: ${sum}`);

//2.Знайти мінімальний елемент масиву та його порядковий номер.

console.log('Завдання 2');

let minNumber = Math.min(...array);
console.log(`Мінімальний елемент масиву : ${minNumber} , його порядковий номер в масиві : ${array.indexOf(minNumber)}`);

//3.Знайти максимальний елемент масиву та його порядковий номер.
console.log('Завдання 3');

let maxNumber = Math.max(...array);

console.log(`максимальний елемент масиву : ${maxNumber} , його порядковий номер в масиві : ${array.indexOf(maxNumber)}`);

//4.Визначити кількість негативних елементів.
console.log('Завдання 4');

let countNegative = 0;

array.forEach(function (element) {
    if (element < 0) {
        countNegative++;
    }
});

console.log(`Кількість негативних елементів в масиві: ${countNegative}`);

//5. Знайти кількість непарних позитивних елементів.
console.log('Завдання 5');

let count1 = 0;
array.forEach(function (element) {
    if(element % 2 !==0 && element > 0) {
        count1++;
    }

})
console.log(`Кількість непарних позитивних елементів дорівнює ${count1}`);

//6.Знайти кількість парних позитивних елементів.
console.log('Завдання 6');

let count2 = 0;

array.forEach(function (element) {
    if(element % 2 ===0 && element > 0) {
        count2++;
    }

});
console.log(`Кількість парних позитивних елементів дорівнює ${count2}`);

//7. Знайти суму парних позитивних елементів.

console.log('Завдання 7');

let newArray1= array.filter(function (element) {
    return element % 2 ===0 && element > 0;
})

console.log(newArray1);

let sum1 = newArray1.reduce(function (accum,currentValue){
    return accum + currentValue;

}, 0);
console.log(`Сума парних позитивних елементів в масиві дорівнює: ${sum1}`);

//8. Знайти суму непарних позитивних елементів.

console.log('Завдання 8');

let newArray2 = array.filter(function (element){
    return element % 2 !==0 && element > 0;
})
console.log(newArray2);

let sum2 = newArray2.reduce(function (accum, currentValue) {
    return accum + currentValue;
}, 0);

console.log(`Сума непарних позитивних елементів в масиві дорівнює: ${sum2}`);

//9. Знайти добуток позитивних елементів.

console.log('Завдання 9');

let product = newArray.reduce(function (accum, currentValue) {
    return accum * currentValue;
}, 1);

console.log(`Добуток позитивних елементів дорівнює: ${product}`);

//10. Знайти найбільший серед елементів масиву, остальні обнулити.
console.log('Завдання 10');

maxNumber = Math.max(...array);
console.log (maxNumber);

let maxi = array.indexOf(maxNumber);
console.log(maxi);

for(let i= 0; i < array.length; i++) {
    if(i!== maxi){
        array[i] = 0;
    }
}
console.log (array);