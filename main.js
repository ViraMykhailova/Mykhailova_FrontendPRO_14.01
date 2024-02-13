const body = document.querySelector('body');
const table = document.createElement('table');
body.appendChild(table);

const tbody= document.createElement('tbody');
table.appendChild(tbody);

let number = 1;
for(let i = 0; i <10; i++) {
    const tr = document.createElement('tr');
    for(let j = 0; j < 10; j++) {
        number = Math.floor(Math.random() * 100 + 1);
        const td = document.createElement('td');
        td.classList.add('col');
        td.textContent = number;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
