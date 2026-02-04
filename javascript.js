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

function winCheck() {
    if (humanScore >= 5){
        resultsDiv.textContent = `\n Congratulations! You reached 5 points and won the game!`;
        return true;
    } else if (computerScore >= 5){
        resultsDiv.textContent = `\n Sorry! The computer reached 5 points and won the game!`;
        return true;
    }
    else {
        return false;
    }
}

function playRound(humanChoice, computerChoice) {
    let humChoice = humanChoice.toLowerCase();
    let comChoice = computerChoice;

    if ((humChoice == "rock" && comChoice == "scissors") ||
        (humChoice == "paper" && comChoice == "rock") ||
        (humChoice == "scissors" && comChoice == "paper")) {
        humanScore++;
        resultsDiv.textContent = `You win! ${humChoice} beats ${comChoice}! \n Human: ${humanScore} Computer: ${computerScore}`;
        if (winCheck()) {
            return;
        }
    } else if (humChoice == comChoice) {
        resultsDiv.textContent = `It's a tie! \n Human: ${humanScore} Computer: ${computerScore}`;
        if (winCheck()) {
            return;
        }
    } else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${comChoice} beats ${humChoice}! \n Human: ${humanScore} Computer: ${computerScore}`;
        if (winCheck()) {
            return;
        }
    }
}
