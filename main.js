const imagesSrc = [
    './images/1.jpeg',
    './images/2.jpeg',
    './images/3.jpeg',
    './images/4.jpeg',
    './images/5.jpeg',
    './images/6.jpeg',
    './images/7.jpeg',
    './images/8.jpeg',
    './images/9.jpeg',
]

const image = document.querySelector('#image');
const buttonPrev = document.querySelector('#buttonPrev');
const buttonNext = document.querySelector('#buttonNext');
let imageIndex = 0;

image.src = imagesSrc[imageIndex];
buttonNext.addEventListener('click', () =>{
    imageIndex++;
    if (imageIndex === 8) {
        buttonNext.classList.add('hidden');
    } else if (imageIndex > 0) {
        buttonPrev.classList.remove('hidden');
    }
    image.src = imagesSrc[imageIndex];
});


buttonPrev.addEventListener('click', () =>{
   imageIndex--;
    if(imageIndex === 0){
        buttonPrev.classList.add('hidden');
    } else if (imageIndex < 8) {
        buttonNext.classList.remove('hidden');
    }
    image.src = imagesSrc[imageIndex];

});

