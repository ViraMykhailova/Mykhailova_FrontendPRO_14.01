'use strict'

const url = 'https://jsonplaceholder.typicode.com';
const inputID = document.querySelector('#inputId');
const getPostButton = document.querySelector('#getBtn');
const buttonWrapper = document.querySelector('#buttonCommentsWrapper');
const postTitle = document.querySelector('#postTitle');
const postText = document.querySelector('#postBody');

//Функція отримання коментарів:
function getPostComments(postId) {
    fetch(url + `/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
//Функція showPost для заповнення текстом загаловку та тексту поста:
function showPost(post){
    postTitle.innerHTML = '';
    postText.innerHTML = '';
    buttonWrapper.innerHTML = '';

    postTitle.innerText = post.title;
    postText.innerText = post.body;

    const commentsBtn = document.createElement('button');
    commentsBtn.innerText = 'Comments'
    commentsBtn.classList.add('button-getComments');

    commentsBtn.addEventListener('click', () => {
        getPostComments(+inputID.value);
    })

    buttonWrapper.appendChild(commentsBtn);

}

//функція запиту до сервера пошуку поста по ID
function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        fetch(url + `/posts/${postId}`)
            .then(response => {
                if(response.ok) {
                   return response.json();
                } else {
                    throw new Error(`Error ${response.status}`);
                }
            })
            .then(data => {
                resolve(data);
                showPost(data);
            })
            .catch(error => reject(error));

        }
    );
}

//функція показу поста за введеним в інпут ID по кліку на кнопку
getPostButton.addEventListener('click', () =>{

    fetchPost(+inputID.value)
        .then(data => console.log(data))
        .catch(error => alert(error));
});