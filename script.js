//function getComputerChoice will randomly return the value rock, paper or scissors.
// We firstly estabilish an array containing all the possible answers

const response = ['Rock','Paper','Scissors'];
console.log(response) //This will return the entire list of the array

let random = Math.floor((Math.random()+0.5)*response.length) //generate a random number from 1 to 3
if (random < 1) {
    ++random
} else if (random > 3) {
    --random
} else (random)
console.log(random)