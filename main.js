'use strict'

const smilesList = [
    { smile:'😀',
    vote_counter: 0,
    }, {
    smile:'😈',
    vote_counter: 0,
    }, {
    smile:'😊',
    vote_counter: 0,
    }, {
    smile:'😎',
    vote_counter: 0,
    }, {
    smile:'😜',
    vote_counter: 0,
    }
];

const wrapper = document.querySelector('#wrapper');

smilesList.forEach(smile =>{

    const smileVoteWrapper = document.createElement('div');
    smileVoteWrapper.classList.add('smile-vote');
    const smileDiv = document.createElement('div');
    smileDiv.textContent = smile.smile;
    smileDiv.classList.add('smileImg');
    const voteCount = document.createElement('p');
    voteCount.textContent = smile.vote_counter;

    wrapper.appendChild(smileVoteWrapper);
    smileVoteWrapper.appendChild(smileDiv);
    smileVoteWrapper.appendChild(voteCount);

    smileDiv.addEventListener('click', () =>{
        smile.vote_counter++;
        voteCount.textContent = smile.vote_counter;
    });

})


