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
const modalForm = document.querySelector('#form');
const orderForm = document.querySelector('#order-form');
const orderCompleteWindow = document.querySelector('#modal-orderComplete');
const buyerName =document.querySelector('#name');
const buyerCity = document.querySelector('#city');
const buyerAddress = document.querySelector('#post-address');
const buyerPayment = document.querySelector('#payment-type');
const quantity = document.querySelector('#quantity');
const buyerComment = document.querySelector('#comment');
const myOrdersBtn = document.querySelector('#orderInfoBtn');
const ordersList = document.querySelector('#ordersList');
let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];


showCategories();
function showCategories() {
    BeautyShopData.forEach(item => {
        const category = document.createElement('div');
        category.innerText = item.category;
        category.classList.add('categoryItem');

        category.addEventListener('click', () => {
            productsInfo.innerHTML = '';
            showProductsList(item.products);
        });
        categoriesList.appendChild(category);
    });
}
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

            buyButton.addEventListener('click', ()=> {
                const orderItem = {
                    name: item.name,
                    info: item.info,
                    date: new Date().toLocaleString(),
                }
                orders.push(orderItem);
                localStorage.setItem('orders', JSON.stringify(orders));

                myOrdersBtn.style.visibility = 'hidden'
                categoriesList.innerHTML = '';
                productsList.innerHTML = '';
                productsInfo.innerHTML = '';
                ordersList.innerHTML = '';
                modalForm.style.visibility = 'visible'
            });
            productsInfo.appendChild(info);
            info.appendChild(buyButton);
        });
        productsList.appendChild(product);
    });
}
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(quantity.value < 1){
        alert ('Bи ввели не вірну кількість');
    } else {
        modalForm.style.visibility = 'hidden';
        orderCompleteWindow.style.visibility = 'visible';

        const orderData = document.querySelector('#ordered-data');
        orderData.innerHTML = `
        <p>Деталі вашого замовлення : </p>
        <p class ='buyer-data'>ПІБ: ${buyerName.value}</p>
        <p class ='buyer-data'>Місто: ${buyerCity.value}</p>
        <p class ='buyer-data'>Склад НП: ${buyerAddress.value}</p>
        <p class ='buyer-data'>Спосіб оплати: ${buyerPayment.value}</p>
        <p class ='buyer-data'>Кількість товару: ${quantity.value}</p>
        <p class ='buyer-data'>Коментар: ${buyerComment.value}</p> `

        document.querySelector('#close-data').addEventListener('click', ()=> {
            orderCompleteWindow.style.visibility = 'hidden';
            showCategories();
            myOrdersBtn.style.visibility = 'visible';

        });
        buyerName.value = '';
        buyerCity.value = '';
        buyerAddress.value = '';
        buyerPayment.value = '';
        quantity.value = '';
        buyerComment.value = '';
    }
});
function deleteOrder(order) {
     orders = orders.filter( o => {
        return o.date !== order.date;
    });
     localStorage.setItem('orders', JSON.stringify(orders));
    showOrders(orders);
}
function showOrders (ordersArr) {
    if(ordersList) {
       ordersList.innerHTML = ''
    }
    ordersArr.forEach(product => {
        const orderedProductWrapper = document.createElement('div');
        orderedProductWrapper.classList.add('orderedProductWrapper');

        const orderDate = document.createElement('div');
        orderDate.innerText = product.date;
        orderDate.classList.add('order-date');

        const orderedProduct = document.createElement('div');
        orderedProduct.innerText = product.name;
        orderedProduct.classList.add('ordered-name');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-order-btn');
        deleteBtn.innerText = 'X'

        deleteBtn.addEventListener('click', (e)=> {
            e.stopPropagation();
            deleteOrder(product);
        });

        const orderDetails = document.createElement('span');
        orderDetails.classList.add('order-details');
        orderDetails.innerText = 'Деталі замовлення'

        const infoWrapper =document.createElement('div');

        orderDetails.addEventListener('click', () => {
            infoWrapper.innerHTML = '';

            const orderedProductInfo = document.createElement('div');
            orderedProductInfo.innerText = product.info;
            orderedProductInfo.classList.add('ordered-info');
            infoWrapper.appendChild(orderedProductInfo);
        });

        ordersList.appendChild(orderedProductWrapper);
        orderedProductWrapper.appendChild(orderDate);
        orderedProductWrapper.appendChild(orderedProduct);
        orderedProduct.appendChild(deleteBtn);
        orderedProductWrapper.appendChild(orderDetails);
        orderedProductWrapper.appendChild(infoWrapper)
    });
}
myOrdersBtn.addEventListener('click', () => {
    categoriesList.innerHTML = '';
    showOrders(orders);
});


