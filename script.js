const picks = ["rock", "paper", "scissors"];

let result = "";
let message = "";
let playerSelection;
let computerSelection;
function getComputerChoice() {
    return picks[Math.floor(Math.random() * picks.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        result = "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "loss";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "loss";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "draw";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result = "draw";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "loss";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "win";
    } else {result = "error";};

    if (result === "win") {
        message = "You won, fuck yeah!";
    } else if (result === "draw") {
        message = "It's a draw...";
    } else if (result === "loss") {
        message = "You lost this time, you loser.";
    } else {
        message = "Something went terribly wrong :/";
    };

    return message;
};

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        alert(message);
    };
};

game();