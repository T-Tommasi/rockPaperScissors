//Array of possible answers for the PC, and other usefull vars
const ANSWERS = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;
const WIN_MESSAGE = `You won! `;
const LOSE_MESSAGE = `You lost! `;
const DRAW_MESSAGE = `It's a draw! `;
const statusDiv = document.querySelector('.gameStatus');
const PLAYER_ROCK = document.querySelector('#rock');
const PLAYER_PAPER = document.querySelector('#paper');
const PLAYER_SCISSORS = document.querySelector('#scissors');

//Function for choosing a random answer from the array
function pcResponse (ANSWERS) {
    let pcPlay = ANSWERS[Math.floor(Math.random()*ANSWERS.length)]
    return pcPlay
};

//Test on console if the function is working properly
console.log(pcResponse(ANSWERS));

//Function for playing a round of RPS
function playRound(pcAnswer,playerAnswer) {
    if (playerAnswer == 'rock' && pcAnswer == 'scissors' ||
    playerAnswer == 'paper' && pcAnswer == 'rock' ||
    playerAnswer == 'scissors' && pcAnswer == 'paper') {
        return {message: WIN_MESSAGE + playerAnswer + 'beat ' + pcAnswer, status: win}
    } else if (playerAnswer == 'rock' && pcAnswer == 'paper' ||
    playerAnswer == 'paper' && pcAnswer == 'scissors' ||
    playerAnswer == 'scissors' && pcAnswer == 'rock') {
        return {message: LOSE_MESSAGE + pcAnswer + 'beat ' + playerAnswer, status: lose}
    } else {
        return {message: DRAW_MESSAGE + pcAnswer + 'is the same as ' + playerAnswer, status: draw}
    }
}

//This function starts a game of RPS
function playGame (playerAnswer) {
    let result = playRound(playerAnswer,pcResponse(answers));
    if (result.includes('You won')) {
        statusDiv.textContent = WIN_MESSAGE.message
        return ++playerScore
    } else if (result.includes('You lost')) {
        statusDiv.textContent = LOSE_MESSAGE.message
        return ++computerScore
    } else {
        statusDiv.textContent = DRAW_MESSAGE.message
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

//Start the game and use the button selected by the player as his choiche of play
PLAYER_ROCK.addEventListener('click', function () {
    playGame('rock')
});
PLAYER_PAPER.addEventListener('click', function () {
    playGame('paper')
});
PLAYER_SCISSORS.addEventListener('click', function () {
    playGame('scissors')
})