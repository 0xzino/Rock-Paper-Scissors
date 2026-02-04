const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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
            console.log(`You win! ${humChoice} beats ${comChoice}`);
            humanScore++;
        } 
        
        else if (humChoice == comChoice){
            console.log("It's a tie!");
        }

        else {
            console.log(`You lose! ${comChoice} beats ${humChoice}`);
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
        console.log(`You win!`)
    }

    if (humanScore < computerScore){
        console.log(`You lose!`)
    }

    if (humanScore == computerScore){
        console.log(`It's a tie!`)
    }
}

playGame();