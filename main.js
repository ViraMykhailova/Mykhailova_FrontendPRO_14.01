
function showDiv () {
const showEl=document.querySelector('#empty');
showEl.classList.add('displayBlock');
}

function hideDiv () {
    const showEl=document.querySelector('#empty');
    showEl.classList.remove('displayBlock');
}
document.querySelector('#textArea').addEventListener('focus', showDiv);
document.querySelector('#textArea').addEventListener('blur', hideDiv);