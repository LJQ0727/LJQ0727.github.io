// This small webgame project is a pratice of Jonas Schmedtmann's JS course
// @https://github.com/jonasschmedtmann?tab=repositories

'use strict'

let randomNumber;
let count = 0;
let isGameFinished = false;
let highScore = 0;
const maxRange = 20;    // The random number should be generated from 1 to this, including both edges

// add Keybindings
document.querySelector('.guess').addEventListener('keydown', (event) => {
    if (event.keyCode == 13) checkClicked();
})

document.querySelector('.again').addEventListener('keydown', (event) => {
    if (event.keyCode == 13) againClicked();
})

document.addEventListener('DOMContentLoaded', ()=> {
    // Generate random number
    randomNumber = Math.floor(Math.random() * maxRange + 1);

    // DEV
    //document.querySelector('.number').innerHTML = randomNumber;   // reveal result

    // Set focus to input field
    document.querySelector('.guess').focus();


})
document.querySelector('.check').addEventListener('click', checkClicked);
document.querySelector('.again', againClicked);

function checkClicked() {
    const messageBox = document.querySelector('.message');
    const scoreBox = document.querySelector('.score');

    if (isGameFinished) alert('Press Again button to restart the game');

   
    // Compare between the given number and the real number
    const checkNum = Number(document.querySelector('.guess').value);
    document.querySelector('.guess').value = '';
    // Set focus to input field
    document.querySelector('.guess').focus();

    // DEV
    //console.log(checkNum);


    if (checkNum == NaN) {
        alert('Incorrect number format');
        return;
    }
    if (checkNum == randomNumber){
        // Correct number
        messageBox.innerHTML = 'You are right!';
        isGameFinished = true;
        document.querySelector('.number').innerHTML = randomNumber;   // reveal result
        document.querySelector('.again').focus();
        
        // Reset high score
        if (maxRange - count > highScore) {
            highScore = maxRange - count;
            document.querySelector('.highscore').innerHTML = highScore;
        }
    } else {
        // Not correct number
        count++;
        scoreBox.innerHTML = maxRange - count;
        if (checkNum < randomNumber) messageBox.innerHTML = 'Your number is smaller...';
        else messageBox.innerHTML = 'Your number is bigger!'

        // Increment count
    }
}

function againClicked() {
    // Re-generate the random number, and clear the score
    randomNumber = Math.random() * maxRange + 1;
    isGameFinished = false;
    document.querySelector('.number').innerHTML = '?';
    count = 0;
    document.querySelector('.score').innerHTML = maxRange - count;
    // Set focus to input field
    document.querySelector('.guess').focus();
    document.querySelector('.message').innerHTML = 'Start guessing...';
}
