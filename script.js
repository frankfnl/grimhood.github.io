let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let invalidHumanInput = false;

// Generate target number
const generateTarget = () => Math.floor(Math.random()*10);

// Get absolute differente between two numbers
const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);

// Test generateTarget
// console.log(generateTarget());

// Test that the user input is valid
const validateHumanInput = (uGuess) => (uGuess >= 0 && uGuess <= 9) ? true : false;

// Compare guess and target
const compareGuesses = (uGuess, cGuess, target) => ( ((getAbsoluteDistance(uGuess, target) < getAbsoluteDistance(cGuess, target)) && invalidHumanInput === false)||
    (getAbsoluteDistance(uGuess, target) === getAbsoluteDistance(cGuess, target))) ? true : false;

// Return the score
const updateScore = (winnerstring) => winnerstring === 'human' ? humanScore += 1 : computerScore += 1;

// Advance round
const advanceRound = () => currentRoundNumber += 1;