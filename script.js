//function getComputerChoice will randomly return the value rock, paper or scissors.
// We firstly estabilish an array containing all the possible answers

const response = ['Rock','Paper','Scissors'];
console.log(response) //This will return the entire list of the array

let random = Math.floor((Math.random())*++response.length) //generate a random number from 1 to 3

//Since by using math.random we can get up to 4 response we  make sure that random is between 1 and 3
if (random < 1) {
    ++random
} else if (random > 3) {
    --random
} else (random)

console.log(random) //Shouls give back a random number between 1 and 3 with 33% chance for each

//We create a function that extracts a index from the array based on the random number
function choose(array, number) {if (number == 3) 
    {
        return array[0]
    } else if (number == 2) {
        return array[2]
    } else {
        return array[1]
    }
}

//console.log(choose(response,random)) //Should return a response from the array base on the random number

//basic function that estabilish computer selection

const computerResponse = choose(response,random)
console.log(computerResponse) //returns the value chosen by the computer

//function that estabilish player selection
let playerResponse = prompt('Choose your weapon!','Rock')

//function that estabilish who wins
function playRound(computerResponse, playerResponse) {
    if (playerResponse == 'rock' && computerResponse == 'scissors') {
        return 'You won! - Rock beats scissors!'
    } else if (playerResponse == 'rock' && computerResponse == 'paper') {
        return 'You lose! - Paper beats rock!'
    } else if (playerResponse == 'rock' && computerResponse == 'rock') {
        return 'Draw! - none of you wins!'
    } else if (playerResponse == 'paper' &&  computerResponse == 'scissors') {
        return 'You lose! - Scissors beat paper!'
    } else if (playerResponse == 'paper' && computerResponse == 'rock') {
        return 'You win! - Paper beats rock!'
    } else if (playerResponse == 'paper' && computerResponse == 'paper') {
        return 'Draw! - none of you wins!'
    } else if (playerResponse == 'scissors' && computerResponse  == 'paper') {
        return 'You win! - Scissors beat paper!'
    } else if (playerResponse == 'scissors' && computerResponse == 'rock'){
        return 'You lose! - Rock beats scissors'
    } else if (playerResponse == 'scissors' && computerResponse == 'scissors'){
        return 'Draw! - none of you wins!'
    } else {return 'There is an error here, no right answer was found!'}
}

console.log(playRound(computerResponse.toLowerCase(),playerResponse.toLowerCase())) //Should give back a somewhat working game