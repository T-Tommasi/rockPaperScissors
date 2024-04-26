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
        return {message: win + playerAnswer + 'beat ' + pcAnswer, status: win}
    } else if (playerAnswer == 'rock' && pcAnswer == 'paper' ||
    playerAnswer == 'paper' && pcAnswer == 'scissors' ||
    playerAnswer == 'scissors' && pcAnswer == 'rock') {
        return {message: lose + pcAnswer + 'beat ' + playerAnswer, status: lose}
    } else {
        return {message: draw + pcAnswer + 'is the same as ' + playerAnswer, status: draw}
    }
}

//This function starts a game of RPS
function playGame (playerAnswer) {
    let result = playRound(playerAnswer,pcResponse(answers));
    if (result.includes('You won')) {
        statusDiv.textContent = win.message
        return ++playerScore
    } else if (result.includes('You lost')) {
        statusDiv.textContent = lose.message
        return ++computerScore
    } else {
        statusDiv.textContent = draw.message
    }
    if (playerScore == 5) {
        alert('You won the game, congratulations!')
        playerScore = 0
        computerScore = 0
        return
    } else if  (computerScore == 5) {
        alert('Damn! you lost the game!')
        computerScore = 0
        playerScore = 0
        return
    }
}

