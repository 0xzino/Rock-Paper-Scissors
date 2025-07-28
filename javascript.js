console.log("Hello World!");

function getComputerChoice() {
    // Randomly selects rock, paper, or scissors
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());