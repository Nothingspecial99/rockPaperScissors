function getComputerChoice(){
    const CHOICENUMBER = Math.floor(Math.random()*100);
    let computerChoice;
    if (CHOICENUMBER <= 33) {
        computerChoice = "Rock"
    }
    else if (CHOICENUMBER <= 66){
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissor"
    }
    return computerChoice
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outcome;
    if (playerSelection == "rock" && computerSelection == 'scissor'){
        outcome = "player";
    }
    else if(playerSelection == "paper" && computerSelection == 'rock'){
        outcome = 'player';
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        outcome = 'player';
    }
    else if (playerSelection == computerSelection){
        outcome = 'nobody';
    }
    else{
        outcome = 'computer';
    }
    return outcome;
}
