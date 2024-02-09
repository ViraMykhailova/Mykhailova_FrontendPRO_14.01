
function showDiv () {
const showEl=document.querySelector('#empty');
showEl.classList.add('displayDiv');
}

function hideDiv () {
    const hideEl=document.querySelector('#empty');
    hideEl.classList.remove('displayDiv');
}
document.querySelector('#textArea').addEventListener('focus', showDiv);
document.querySelector('#textArea').addEventListener('blur', hideDiv);