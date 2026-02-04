const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


const rockButton = document.getElementById("btn-rock");
const paperButton = document.getElementById("btn-paper");
const scissorsButton = document.getElementById("btn-scissors");

const resultsDiv = document.getElementById("results");

rockButton.addEventListener("click", () => playRound("rock", getcomputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getcomputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getcomputerChoice()));

function getcomputerChoice() { // Randomly selects rock, paper, or scissors
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function gethumanChoice() { // Prompts user for rock, paper, or scissors
    let input = prompt("rock, paper, or scissors?");
    return input;
}

function playRound(humanChoice, computerChoice) {
    let humChoice = humanChoice.toLowerCase();
    let comChoice = computerChoice;

    if ((humChoice == "rock" && comChoice == "scissors") ||
        (humChoice == "paper" && comChoice == "rock") ||
        (humChoice == "scissors" && comChoice == "paper")){
            resultsDiv.textContent = `You win! ${humChoice} beats ${comChoice}`;
            humanScore++;
        } 
        
        else if (humChoice == comChoice){
            resultsDiv.textContent = "It's a tie!";
        }

        else {
            resultsDiv.textContent = `You lose! ${comChoice} beats ${humChoice}`;
            computerScore++;
        }
}

function playGame() {
    /*
    playRound(gethumanChoice(), getcomputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    playRound(gethumanChoice(), getcomputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);   
    playRound(gethumanChoice(), getcomputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);  
    playRound(gethumanChoice(), getcomputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);  
    playRound(gethumanChoice(), getcomputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    */

    if (humanScore > computerScore){
        resultsDiv.textContent = `You win!`
    }

    if (humanScore < computerScore){
        resultsDiv.textContent = `You lose!`
    }

    if (humanScore == computerScore){
        resultsDiv.textContent = `It's a tie!`
    }
}

playGame();