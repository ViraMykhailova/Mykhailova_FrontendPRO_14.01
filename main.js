/*1.Дано масив з елементами різних типів.
 Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
 */

const array =['av', 'rte', 5, 'bkls', 8, 9, 76, NaN, true];

function countAverage () {
    let numbers = array.filter(el => typeof el === 'number' && !isNaN(el));

    let sum = numbers.reduce(function (acum ,currentValue){
        return acum + currentValue;
    },0);
    console.log(`Середнє арифметичне значення чисел в масиві дорівнює ${sum/numbers.length}`);

}
countAverage();

/*2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
 */

function doMath (x, znak, y) {
    x = +prompt('Введіть перше число');
    y = +prompt('Введіть друге число');
    znak = prompt(' Введіть одну з операцій : +, -, *, /, %, ^');
    let result ;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if(y !== 0) {
                result = x / y;
            } else {
                result ='Помилка - ділення на нуль!';
            }
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = 'Ви ввели не вірний знак'

    }
    return result;
}
let mathResult = doMath();
console.log (`Результат вашої операції = ${mathResult}`);

/*3. Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.
 */
function addToArray () {
    let array = [];
    let arrayLength = +prompt('Введіть кількість масивів основного масиву');

for (let i= 0; i < arrayLength; i++) {
    array.push([]);
    let innerArraylength = +prompt(`Введіть кількість елементів в ${i+1} масиві`);
    for (let j = 0; j < innerArraylength; j++) {
        let element = prompt(`Введіть елемент ${j+1} для масиву ${i+1}`);
        array[i].push(element);
    }
}
    return array;
}

let newArray = addToArray();
console.log (newArray);

/*4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
Вихідний рядок та символи для видалення задає користувач.
 */

function deleteSymbols (string, symbols) {

   for (let i = 0; i < symbols.length; i++){
    string = string.replaceAll(symbols[i], '');
   }
console.log(string);
}

deleteSymbols('Hello world', ['l', 'd']);
