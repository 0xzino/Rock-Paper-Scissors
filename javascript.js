console.log("Hello World!");
    
const choices = ["rock", "paper", "scissors"];
let winCon = {"rock":"scissors", "paper":"scissors", "scissors":"paper"}
let humanScore = 0
let computerScore = 0

function getComputerChoice() { // Randomly selects rock, paper, or scissors
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() { // Prompts user for rock, paper, or scissors
    return prompt("rock, paper, or scissors?")
}

console.log(getComputerChoice());
console.log(getHumanChoice());