const picks = ["rock", "paper", "scissors"];

let result = "";
let message = "";
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let winner = "none";

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
    
    return result;
};

function informOfResult() {
    if (result === "win") {
        message = "You won, fuck yeah!";
    } else if (result === "draw") {
        message = "It's a draw...";
    } else if (result === "loss") {
        message = "You lost this time, you loser.";
    } else {
        message = "Something went terribly wrong :/";
    };

    alert(message);
}

function addScore() {
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    };
};

function informOfWinner() {
    if (playerScore > computerScore) {
        winner = "You've won the whole game!";
    } else if (playerScore < computerScore) {
        winner = "You've lost the whole game...";
    } else if (playerScore === computerScore) {
        winner = "It's a tie.";
    };

    alert(winner);
}

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        informOfResult();
        addScore();
    };
};

game();
informOfWinner();