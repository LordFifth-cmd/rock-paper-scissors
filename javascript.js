const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let basescissors = document.querySelector("#basescissors");
let baserock = document.querySelector("#baserock");
let basepaper = document.querySelector("#basepaper");
let personscore = document.querySelector('#personscore');
let aiscore = document.querySelector('#aiscore');
let drawscore = document.querySelector("#drawscore");
let images = document.querySelector(".images");
let roundheading = document.querySelector("#roundheading")
let leftpic = document.querySelector(".left")
let rightpic = document.querySelector(".right")

console.log(leftpic.src)
function getComputerChoice() {
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";
    let computerChoice = SCISSORS;

    randomNumber = getRandomInt(3);

    // Set randomNumber to rock, paper or scissors
    switch (randomNumber) {
        case 0:
            computerChoice = ROCK;
            break;
        case 1:
            computerChoice = PAPER;
            break;
        case 2:
            computerChoice = SCISSORS;
        default:
            computerChoice;
    }

    return computerChoice;
}

function getRandomInt(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function playRound(playerSelection) {

    let playerpic = leftpic.src 
    let computerpic = rightpic.src

    computerSelection = getComputerChoice();

    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";
    console.log(`You played ${playerSelection} and computer played ${computerSelection}`);
    if (computerSelection == ROCK && playerSelection == SCISSORS) {
        leftpic.src = playerpic.replace(/\/[^\/]*$/, '/scissors-right-hand-removebg-preview.png');
        rightpic.src = computerpic.replace(/\/[^\/]*$/,'/rock-left-hand-removebg-preview.png')
        return "You lose! Rock beats Scissors"
    } else if (computerSelection == PAPER && playerSelection == ROCK) {
        leftpic.src = playerpic.replace(/\/[^\/]*$/, '/rock-right-hand-removebg-preview.png');
        rightpic.src = computerpic.replace(/\/[^\/]*$/,'/paper-left-hand-removebg-preview.png')
        return "You lose! Paper beats Rock"
    } else if (computerSelection == SCISSORS && playerSelection == PAPER) {
        leftpic.src= playerpic.replace(/\/[^\/]*$/, '/paper-right-hand-removebg-preview.png');
        rightpic.src = computerpic.replace(/\/[^\/]*$/,'/scissors-left-hand-removebg-preview.png')
        return "You lose! Scissors beats Paper"
    } else if (computerSelection == ROCK && playerSelection == PAPER) {
        leftpic.src = playerpic.replace(/\/[^\/]*$/, '/paper-right-hand-removebg-preview.png');
        rightpic.src = computerpic.replace(/\/[^\/]*$/,'/rock-left-hand-removebg-preview.png')
        return "You Win! Paper beats Rock"
    } else if (computerSelection == PAPER && playerSelection == SCISSORS) {
        leftpic.src = playerpic.replace(/\/[^\/]*$/, '/scissors-right-hand-removebg-preview.png');
        rightpic.src = computerpic.replace(/\/[^\/]*$/,'/paper-left-hand-removebg-preview.png')
        return "You Win! Scissors beats paper"
    } else if (computerSelection == SCISSORS && playerSelection == ROCK) {
        leftpic.src = playerpic.replace(/\/[^\/]*$/, '/rock-right-hand-removebg-preview.png');
        rightpic.src = computerpic.replace(/\/[^\/]*$/,'/scissors-left-hand-removebg-preview.png')
        return "You Win! Rock beats Scissors"
    } else if (computerSelection == playerSelection) {
        return "This is a draw"
    } else {
        return `\"${playerSelection}\" is not rock, paper or scissors`
    }
}

images.addEventListener("click", (e) => {
    console.log(e.target.id);
    let playerSelection = null
    let playerScore =  +personscore.textContent
    let computerScore = +aiscore.textContent
    let drawScore = +drawscore.textContent
    let roundtracker = playerScore + computerScore + drawScore


    if (e.target.id === "basescissors") {
        playerSelection = "scissors"
    } else if (e.target.id === "baserock") {
        playerSelection = "rock"
    } else if (e.target.id === "basepaper") {
        playerSelection = "paper"
    } else {
        playerSelection = null
        console.log("player needs to check")
    }
    console.log(`The AI score is ${aiscore.textContent}`)
    if (playerSelection != null && playerScore < 5 && computerScore < 5) {
        const roundResult = playRound(playerSelection)
        if (roundResult.includes("You Win")) {
            playerScore++;
            personscore.textContent = playerScore
            roundheading.textContent = `ROUND ${roundtracker+1}`
        } else if (roundResult.includes("You lose")) {
            computerScore++;
            aiscore.textContent = computerScore
            roundheading.textContent = `ROUND ${roundtracker+1}`
        } else if (roundResult.includes("This is a draw")) {
            drawScore++;
            drawscore.textContent = drawScore
            roundheading.textContent = `ROUND ${roundtracker+1}`
        } else {
            console.log(`${playerSelection} is not rock, paper or scissors. Replay round`);
            // gameRound--;
        }
        
    }
    
}
)



// console.log(playerSelection) 