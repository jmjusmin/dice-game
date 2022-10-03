'use strict';

//declare variable
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let randNum = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//roll the dice to start game
btnRoll.addEventListener('click', () => {
  //1. generate a random dice roll
  const dice = randNum();

  //2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. check if roll 1
  if (dice !== 1) {
    //add to current score
    currentScore += dice;
    document.getElementById();
    current0El.textContent = currentScore;
  } else {
    //swtich to next player
  }
});
