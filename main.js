let operation = prompt('Введіть операцію: +, - , * , /');
let a = +prompt('Введіть перше число');
let b = +prompt('Введіть друге число');

switch (operation) {
    case '+':
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case '-':
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case '*':
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case '/':
        if (b !== 0) {
            console.log(`${a} / ${b} = ${a / b}`);
        } else {
            console.log ('Помилка - ділення на нуль!');
        }
        break;
    default :
        console.log('Ви ввели не знак математичної операції');
}