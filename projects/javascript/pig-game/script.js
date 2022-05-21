'use strict';

let player0Score, player1Score = 0;
let player0DiceSum, player1DiceSum = 0;

newGame();
document.querySelector('.btn--new').addEventListener('click', newGame);
document.querySelector('.btn--roll').addEventListener('click', rollDiceForCurrentPlayer);
document.querySelector('.btn--hold').addEventListener('click', holdForCurrentPlayer);

// setInterval(countDown, 1000);
function newGame(){
    document.querySelector('.btn--roll').focus();
    document.querySelectorAll('.score').forEach((elem) => {
        elem.innerHTML = 0;
    })
    document.querySelectorAll('.current-score').forEach((elem) => {
        elem.innerHTML = 0;
    })
    document.querySelector('.dice').classList.add('hidden');

    // Default player 0 is active
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
}

function rollDiceForCurrentPlayer(){
    const currentDice = Math.floor(Math.random() * 6 + 1);
    console.log(currentDice);
    let dice = document.querySelector('.dice');
    dice.classList.remove('hidden');
    dice.src = 'dice-' + currentDice + '.png';
    const activePlayer = document.querySelector('.player--active');
    const diceSum = Number(activePlayer.querySelector('.current-score').innerHTML);
    if (currentDice == 1) {
        // Clear the current dice sum
        activePlayer.querySelector('.current-score').innerHTML = 0;
        // Switch player
        holdForCurrentPlayer();
    } else {
        // Add up to dice sum
        activePlayer.querySelector('.current-score').innerHTML = diceSum + currentDice;
    }
}

function holdForCurrentPlayer(){
    // Count up score
    const activePlayer = document.querySelector('.player--active');
    const score = Number(activePlayer.querySelector('.score').innerHTML);
    const diceSum = Number(activePlayer.querySelector('.current-score').innerHTML);

    activePlayer.querySelector('.score').innerHTML = score + diceSum;
    activePlayer.querySelector('.current-score').innerHTML = 0;

    // Switch active player
    document.querySelectorAll('.player').forEach((e) => {
        if (e.classList.contains('player--active')) e.classList.remove('player--active');
        else e.classList.add('player--active');
    })
}

function countDown() {
    console.log('counting down');
}

function endGame() {
    // End Game triggered by timer
}