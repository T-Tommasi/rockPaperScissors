//Array of possible answers for the PC, and other usefull vars
const ANSWERS = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;
const WIN_MESSAGE = `You won! `;
const LOSE_MESSAGE = `You lost! `;
const DRAW_MESSAGE = `It's a draw! `;
const CONTAINER = document.querySelector('.container')
const WIN_LOSE_CONDITION = document.createElement('div');
const SCORE_PLAYER = document.createElement('div');
SCORE_PLAYER.textContent = `Player: ${playerScore}`;
const SCORE_COMPUTER = document.createElement('div');
SCORE_COMPUTER.textContent = `Computer: ${computerScore}`;
const PLAYER_ROCK = document.querySelector('#rock');
const PLAYER_PAPER = document.querySelector('#paper');
const PLAYER_SCISSORS = document.querySelector('#scissors');

//Append to the DOM the score counter and win status
CONTAINER.appendChild(WIN_LOSE_CONDITION);
CONTAINER.appendChild(SCORE_PLAYER);
CONTAINER.appendChild(SCORE_COMPUTER);

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
        return {message: WIN_MESSAGE + playerAnswer + ' beat ' + pcAnswer, status: WIN_MESSAGE}
    } else if (playerAnswer == 'rock' && pcAnswer == 'paper' ||
    playerAnswer == 'paper' && pcAnswer == 'scissors' ||
    playerAnswer == 'scissors' && pcAnswer == 'rock') {
        return {message: LOSE_MESSAGE + pcAnswer + ' beat ' + playerAnswer, status: LOSE_MESSAGE}
    } else if (playerAnswer == pcAnswer) {
        return {message: DRAW_MESSAGE + pcAnswer + ' is the same as ' + playerAnswer, status: DRAW_MESSAGE}
    }
};

//This function starts a game of RPS
function playGame (playerAnswer) {
    let result = playRound(pcResponse(ANSWERS),playerAnswer);
    if (result.message.includes('You won! ')) {
        WIN_LOSE_CONDITION.textContent = result.message;
        ++playerScore
    } else if (result.message.includes('You lost! ')) {
        WIN_LOSE_CONDITION.textContent = result.message;
        ++computerScore
    } else {
        WIN_LOSE_CONDITION.textContent = result.message
    }
    if (playerScore == 5) {
        alert('You won the game, congratulations!')
        playerScore = 0
        computerScore = 0
    } else if  (computerScore == 5) {
        alert('Damn! you lost the game!')
        computerScore = 0
        playerScore = 0
    };
    console.log(playerAnswer);
    console.log(result);
    console.log(playerScore, computerScore);
    SCORE_PLAYER.textContent = `Player: ${playerScore}`;
    SCORE_COMPUTER.textContent = `Computer: ${computerScore}`;
    return;
};

//Start the game and use the button selected by the player as his choiche of play
PLAYER_ROCK.addEventListener('click', function() {
    playGame('rock')
});
PLAYER_PAPER.addEventListener('click', function() {
    playGame('paper')
});
PLAYER_SCISSORS.addEventListener('click', function() {
    playGame('scissors')
});