
function showDiv () {
const showEl=document.querySelector('#empty');
showEl.classList.add('displayBlock');
}

function hideDiv () {
    const hideEl=document.querySelector('#empty');
    hideEl.classList.remove('displayBlock');
}
document.querySelector('#textArea').addEventListener('focus', showDiv);
document.querySelector('#textArea').addEventListener('blur', hideDiv);