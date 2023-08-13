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

function capitalize(text){
    firstLetter = text[0].toUpperCase();
    restOfText = text.slice(1).toLowerCase();

    return `${firstLetter}${restOfText}`

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameOutcome;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Enter your choice: ');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result == 'player'){
            playerScore += 1;
            console.log(`${capitalize(result)} won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
        }
        else if (result =='computer'){
            computerScore += 1;
            console.log(`${capitalize(result)} won! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`)

        }
        else{
            console.log("Tie!")
        }
        console.log(`Try ${i}`)
    }

    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`)
    if (playerScore > computerScore){
        gameOutcome = 'You won!'
    }
    else if (computerScore == playerScore){
        gameOutcome = 'It was tie!'
    }
    else {
        gameOutcome = "You lost :("
    }
    console.log(gameOutcome)


}