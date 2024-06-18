//console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    value = Math.floor(Math.random() * 3);
    if (value == 0) {
        return "rock";
    } else if (value == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    return(prompt("Choose rock, paper, or scissors"));
}

const rock_btn = document.querySelector(".Rock");

const paper_btn = document.querySelector(".Paper");

const scissors_btn = document.querySelector(".Scissors");

const display_results = document.querySelector("#display_results");
display_results.style.fontSize = "50px";
display_results.style.color = "white";
display_results.textContent = "Click any of the buttons to begin playing!";

const running_us = document.querySelector(".user_score");
running_us.style.fontSize = "50px";
const running_cs = document.querySelector(".computer_score");
running_cs.style.fontSize = "50px";


rock_btn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paper_btn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissors_btn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

function change_running_scores(user, computer) {
    running_us.textContent = `User Score: ${user} `
    running_cs.textContent = `Computer Score: ${computer} `
}

function display_winner () {
    rock_btn.disabled = true;
    paper_btn.disabled = true;
    scissors_btn.disabled = true;
    if (humanScore > computerScore){
        running_us.textContent = `Final Score - User: ${humanScore} vs. Computer: ${computerScore}`;
        running_cs.textContent = "Winner Winner, Chicken Dinner";
    } else {
        running_us.textContent = `Final Score - User: ${humanScore} vs. Computer: ${computerScore}`;
        running_cs.textContent = "The Computer takes this one!";
    }
}

function playRound(humanChoice, computerChoice){
    human = humanChoice.toLowerCase();
    if (human === computerChoice){
        display_results.textContent = "It was a draw";
    }
    else if (human === "rock"){
        if (computerChoice === "paper"){
            display_results.textContent = ("You lose! Paper beats Rock");
            computerScore++;
            if (computerScore == 5){
                display_winner();
            } else {
                change_running_scores(humanScore, computerScore);
            }   
        } else {
            display_results.textContent = ("You Win! Rock beats Scissors");
            humanScore++;
            if (humanScoreScore == 5){
                display_winner();
            } else {
                change_running_scores(humanScore, computerScore);
            }
        }
    }
    else if (human === "paper"){
        if (computerChoice === "rock"){
            display_results.textContent = ("You Win! Paper beats Rock");
            humanScore++;
            if (humanScore == 5){
                display_winner();
            } else {
                change_running_scores(humanScore, computerScore);
            }   
        } else {
            display_results.textContent = ("You Lose! Scissors beats Paper");
            computerScore++;
            if (computerScore == 5){
                display_winner();
            } else {
                change_running_scores(humanScore, computerScore);
            }   
        }
    }
    else if (human === "scissors"){
        if (computerChoice === "rock"){
            display_results.textContent = ("You lose! Rock beats Scissors");
            computerScore++;
            if (computerScore == 5){
                display_winner();
            } else {
                change_running_scores(humanScore, computerScore);
            }   
        } else {
            display_results.textContent = ("You Win! Scissors beats Paper");
            humanScore++;
            if (humanScore == 5){
                display_winner();
            } else {
                change_running_scores(humanScore, computerScore);
            }   
        }
    }
}

/*function playGame(){
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    if (humanScore > computerScore){
        console.log("Final Score - User: " + humanScore + " Computer: " +computerScore);
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("Final Score - User: " + humanScore + " Computer: " +computerScore);
        console.log("You lost the game!")
    } else {
        console.log("It was a tie game!")
    }
}*/


