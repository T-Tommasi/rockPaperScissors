//Array of possible answers for the PC, and other usefull vars
let answers = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;
const win = `You won! `;
const lose = `You lost! `;
const draw = `It's a draw! `;
const statusDiv = document.querySelector('.gameStatus');

//Function for choosing a random answer from the array
function pcResponse (answers) {
    let pcPlay = answers[Math.floor(Math.random()*answers.length)]
    return pcPlay
};

//Test on console if the function is working properly
console.log(pcResponse(answers));

//Function for playing a round of RPS
function playRound(pcAnswer,playerAnswer) {
    if (playerAnswer == 'rock' && pcAnswer == 'scissors' ||
    playerAnswer == 'paper' && pcAnswer == 'rock' ||
    playerAnswer == 'scissors' && pcAnswer == 'paper') {
        return {message: win + playerAnswer + 'beat ' + pcAnswer}
    } else if (playerAnswer == 'rock' && pcAnswer == 'paper' ||
    playerAnswer == 'paper' && pcAnswer == 'scissors' ||
    playerAnswer == 'scissors' && pcAnswer == 'rock') {
        return {message: lose + pcAnswer + 'beat ' + playerAnswer}
    } else {
        return {message: draw + pcAnswer + 'is the same as ' + playerAnswer}
    }
}

//This function starts a game of RPS
function playGame (playerAnswer) {
    let result = playRound(playerAnswer,pcResponse(answers));
    if (result.includes('You won')) {
        statusDiv.textContent = win
    } else if (result.includes('You lost')) {
        statusDiv.textContent = lose
    } else {
        statusDiv.textContent = draw
    }
}

