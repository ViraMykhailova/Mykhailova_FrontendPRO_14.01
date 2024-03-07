'use strict'
const BeautyShopData = [
    {
        category:'Волосся',
        products:[{
            name: 'Шампунь',
            info:'Призначення: відновлення, живлення, очищення, пом\'якшення'
        }, {
            name: 'Бальзам',
            info:'Призначення: відновлення, живлення, розгладження'
        },{
            name: 'Маска',
            info:'Призначення: відновлення, живлення'
        }]
    },
    {
        category:'Обличчя',
        products:[{
            name: 'Крем',
            info:'Призначення: відновлення, зволоження, лікування'
        }, {
            name: 'Маска',
            info:'Призначення: відновлення, заспокоєння, зволоження, охолодження, пом\'якшення'
        },{
            name: 'Флюід',
            info:'Призначення: відновлення, живлення, зволоження'
        }]
    },
    {
        category:'Макіяж',
        products:[{
            name: 'Туш для вій',
            info:'Туш для вій Lash Sensational Sky High ідеальна для створення сенсаційного об\'єму і безмежно довгих вій! '
        }, {
            name: 'Олівець для брів',
            info:'Засіб допоможе створити ідеальну форму брів, про яку ви мріяли. '
        },{
            name: 'Тональна основа',
            info:'Крем має ультралегку напівпрозору консистенцію. Флюїд м\'яко та рівномірно розподіляється по шкірі, не залишаючи смуг і плям'
        }]
    },
];

const categoriesList = document.querySelector('#categories');
const productsList = document.querySelector('#products');
const productsInfo = document.querySelector('#info');

BeautyShopData.forEach(item => {
    const category = document.createElement('div');
    category.innerText = item.category;
    category.classList.add('categoryItem');

    category.addEventListener('click', () => {
        productsInfo.innerHTML = '';
        showProductsList(item.products);

    })

    categoriesList.appendChild(category);
});

function showProductsList(productsArray) {
    productsList.innerHTML = '';
    productsArray.forEach(item => {
        const product = document.createElement('div');
        product.innerText = item.name;
        product.classList.add('productItem');

        product.addEventListener('click', () =>{
            if(productsInfo.children[0]){
                productsInfo.removeChild(productsInfo.children[0]);
            }
            const info = document.createElement('div');
            info.innerText = item.info;
            info.classList.add('productInfo');

            const buyButton = document.createElement('button');
            buyButton.innerText = 'Купити';
            buyButton.classList.add('buyButton');

            buyButton.addEventListener('click', (e)=> {
                e.stopPropagation();
                alert('Товар додано у корзину');
                productsList.innerHTML = '';
                productsInfo.innerHTML = '';

            })

            productsInfo.appendChild(info);
            info.appendChild(buyButton);
        })

        productsList.appendChild(product);

    })

}