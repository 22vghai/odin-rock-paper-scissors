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

function playRound(humanChoice, computerChoice){
    human = humanChoice.toLowerCase();
    if (human === computerChoice){
        console.log("It was a draw");
    }
    if(human === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        }
    }
    if(human === "paper"){
        if (computerChoice === "rock"){
            console.log("You Win! Paper beats Rock");
            humanScore++;
        } else {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
    }
    if(human === "scissors"){
        if (computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        }
    }
}

function playGame(){
    for(i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
console.log(humanScore.toString());
