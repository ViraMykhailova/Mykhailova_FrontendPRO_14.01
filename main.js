let randomNumb = Math.floor(Math.random() * 9 + 1);
let myImage = document.querySelector('#myImage');
myImage.src = `./images/${randomNumb}.jpeg`;