//Declare the general variables needed for the game
const answers = ['rock', 'paper', 'scissors']
let turn = 0

//Choose a random answer inside the array for the CP
function computerResponse (answers) {
    return answers[Math.floor(Math.random()*answers.length)]
}

//IF Computer has a winning hand return the variable lose, otherwise win - then add or subtract from scores
function playround(playerResponse,computerResponse) {
    console.log(computerResponse);
    const win = `You won! - ${playerResponse} beats ${computerResponse}!`;
    const lose = `You lose! - ${computerResponse} beats ${playerResponse}!`;
    const draw = `Draw! - no one wins!`;
    if (playerResponse == 'rock' && computerResponse == 'scissors' || playerResponse == 'paper' && computerResponse == 'rock' || playerResponse == 'scissors' && computerResponse == 'paper') {
        return console.log(win),win
    } else if (playerResponse == 'scissors' && computerResponse == 'rock' || playerResponse == 'rock' && computerResponse == 'paper' || playerResponse == 'paper' && computerResponse == 'scissors') {
        return console.log(lose),lose
    } else {
        return console.log(draw),draw
    }
}

//console.log(playround('rock',computerResponse(answers)))

//Play the game itself with multiple rounds IF the player wins increase the score, otherwise do the same for the AI - scores must carry between rounds
function playGame () {
    let playerResponse = prompt('Choose your weapon!','rock');
    let playerScore = 0;
    let computerScore = 0;
    let result = playround(playerResponse.toLowerCase(),computerResponse(answers));
    if (result.includes('You won')) {
        ++playerScore
    } else if (result.includes('You lose')) {
        ++computerScore
    } else {}
    console.log(`You score is now: ${playerScore} for you and ${computerScore} for the AI!`)

    playerResponse = prompt('Choose your weapon!','rock');
    result = playround(playerResponse.toLowerCase(),computerResponse(answers));
    if (result.includes('You won')) {
        ++playerScore
    } else if (result.includes('You lose')) {
        ++computerScore
    } else {}
    console.log(`You score is now: ${playerScore} for you and ${computerScore} for the AI!`)

    playerResponse = prompt('Choose your weapon!','rock');
    result = playround(playerResponse.toLowerCase(),computerResponse(answers));
    if (result.includes('You won')) {
        ++playerScore
    } else if (result.includes('You lose')) {
        ++computerScore
    } else {}
    console.log(`You score is now: ${playerScore} for you and ${computerScore} for the AI!`)

    playerResponse = prompt('Choose your weapon!','rock');
    result = playround(playerResponse.toLowerCase(),computerResponse(answers));
    if (result.includes('You won')) {
        ++playerScore
    } else if (result.includes('You lose')) {
        ++computerScore
    } else {}
    console.log(`You score is now: ${playerScore} for you and ${computerScore} for the AI!`)

    playerResponse = prompt('Choose your weapon!','rock');
    result = playround(playerResponse.toLowerCase(),computerResponse(answers));
    if (result.includes('You won')) {
        ++playerScore
    } else if (result.includes('You lose')) {
        ++computerScore
    } else {}
    console.log(`You score is now: ${playerScore} for you and ${computerScore} for the AI!`)

    playerResponse = prompt('Choose your weapon!','rock');
    result = playround(playerResponse.toLowerCase(),computerResponse(answers));
    if (result.includes('You won')) {
        ++playerScore
    } else if (result.includes('You lose')) {
        ++computerScore
    } else {}
    console.log(`You score is now: ${playerScore} for you and ${computerScore} for the AI!`)

    if (playerScore > computerScore) {
        return console.log('Congratulations! you won!')
    } else if (computerScore > playerScore) {
        return console.log('Damn, you lost! - try again by writing playgame() in the console!')
    } else {
        return console.log('Draw!')
    }
}

//Start the game function and play 5 rounds with score-keeping
playGame()