
let myArr = [1, 2, [1, 2], 3, 4];
const wrapper = document.querySelector('#wrapper');
function generateList (arr){
    let ul = document.createElement('ul');

    arr.forEach(element => {
        let listItem = document.createElement('li');
        // Якщо елемент не є масивом, створюємо новий елемент li з текстом елемента масиву:
        if(!Array.isArray(element)) {
            listItem.innerText = element;
        } else {
            let newUl = generateList(element);
            listItem.appendChild(newUl);

        }
        ul.appendChild(listItem);

    })
    return ul;
}
wrapper.appendChild(generateList(myArr));