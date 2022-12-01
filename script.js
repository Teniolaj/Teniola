'use strict'

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0')



score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
let currentScore = 0;
let currentPlayer = 0;

btnRoll.addEventListener('click', function() {
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1
    diceEl.src = `dice-${dice}.png`
    
    if(dice !== 1) {
        currentScore += dice
        current0El.textContent = currentScore
    }else {
        current0El.textContent = 0
    }

})
