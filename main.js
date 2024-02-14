//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
let string1 = prompt('Введіть строку 1');
let string2 = prompt('Введіть строку 2');
let string3 = prompt('Введіть строку 3');

console.log (string1 + ' '+ string2 + ' '+ string3);

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

let x = 67890;
let stringNumber = String(x);
let result = ''

for(let i=0;i < stringNumber.length; i++) {
    result += stringNumber[i] + ' ';
}

console.log(result);
