//1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log('Завдання 1 :');

let numbers = [];
for(let i=10; i<=20; i++) {
    numbers.push(i);
}
console.log(numbers);

//2.Вивести квадрати чисел від 10 до 20.

console.log('Завдання 2 :');

for(let i=10; i<=20; i++) {
    console.log (`Квадрат числа ${i} = ${i * i}`);
}

//3.Вивести таблицю множення на 7.

console.log('Завдання 3 :');

for(let i=0; i<=10; i++) {
    console.log (`${i} * 7 = ${i *7}`);
}

//4.Знайти суму всіх цілих чисел від 1 до 15.

console.log('Завдання 4 :');

let integers = [];
let sum = 0;

for(let i = 1; i <= 15; i++) {
    integers.push(i);
}
for(let j =0; j < integers.length; j++) {
    sum += integers[j];
}

console.log(` Сума всіх цілих чисел від 1 до 15 дорівнює ${sum}`);

//5.Знайти добуток усіх цілих чисел від 15 до 35.

console.log('Завдання 5 :');

let integers2 = [];
let product = 1;

for( let i=15; i <=35; i++) {
    integers2.push(i);
}

for (let j= 0; j < integers2.length; j++) {
    product *= integers2[j];
}
console.log(` Добуток усіх цілих чисел від 15 до 35 дорівнює ${product}`);

//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

console.log('Завдання 6 :');

let integers3 = [];
let sum3 = 0;

for(let i = 1; i <= 500; i++) {
    integers3.push(i);
}

for(let j = 0; j < integers3.length; j++) {
    sum3 += integers3[j];
}

console.log (`Середнє арифметичне всіх цілих чисел від 1 до 500 дорівнює ${sum3 / integers3.length}`);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

console.log('Завдання 7 :');

let integers4 = [];
let sum4 = 0;
for(let i=30; i <=80; i++) {
    if(i % 2 ===0) {
        integers4.push(i);
    }
}
for(let j=0; j < integers4.length; j++) {
    sum4 += integers4[j];
}
console.log(`Сума парних чисел в діапазоні від 30 до 80 дорівнює ${sum4}`);

//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

console.log('Завдання 8 :');

let integers5 = [];

for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        integers5.push(i);
    }
}
console.log(`Всі числа в діапазоні від 100 до 200, які кратні 3 : ${integers5}`)

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

console.log('Завдання 9 :');

let a = 50;

for(let i = 1; i<=a; i++) {
    if(a % i ===0) {
        console.log (`Це один з дільників числа 50 : ${i}`);
    }
}
//10.Визначити кількість його парних дільників.

console.log('Завдання 10 :');

let quantity = 0;

for(let i = 1; i<=a; i++) {
    if(a % i === 0 &&  i % 2 === 0) {
        quantity++;
    }
}

console.log(`Кількість парних дільників = ${quantity}`);

//11.Знайти суму його парних дільників.

console.log('Завдання 11 :');

let even = [];
let sum2 = 0;

for(let i = 1; i<=a; i++) {
    if(a % i === 0 &&  i % 2 === 0) {
        even.push(i);
    }
}

for(let j = 0; j < even.length; j++) {
    sum2 += even[j];
}
console.log(`Сума парних дільників = ${sum2}`);

//12.Надрукувати повну таблицю множення від 1 до 10.

console.log('Завдання 12 :');

for(let i = 1; i <= 10; i++) {
    for( let j = 1; j <= 10; j++) {
        console.log (`${i} * ${j} = ${i*j}`);
    }
}