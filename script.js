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
display_results.textContent = "Click any of the buttons to begin playing!"

rock_btn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paper_btn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissors_btn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});


function playRound(humanChoice, computerChoice){
    human = humanChoice.toLowerCase();
    if (human === computerChoice){
        display_results.textContent = "It was a draw";
    }
    else if (human === "rock"){
        if (computerChoice === "paper"){
            display_results.textContent = ("You lose! Paper beats Rock");
            computerScore++;
        } else {
            display_results.textContent = ("You Win! Rock beats Scissors");
            humanScore++;
        }
    }
    else if (human === "paper"){
        if (computerChoice === "rock"){
            display_results.textContent = ("You Win! Paper beats Rock");
            humanScore++;
        } else {
            display_results.textContent = ("You Lose! Scissors beats Paper");
            computerScore++;
        }
    }
    else if (human === "scissors"){
        if (computerChoice === "rock"){
            display_results.textContent = ("You lose! Rock beats Scissors");
            computerScore++;
        } else {
            display_results.textContent = ("You Win! Scissors beats Paper");
            humanScore++;
        }
    }
}

function playGame(){
    
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
}


