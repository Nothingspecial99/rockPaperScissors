function getComputerChoice(){
    const CHOICENUMBER = Math.floor(Math.random()*100);
    let computerChoice;
    if (CHOICENUMBER <= 33) {
        computerChoice = "rock"
    }
    else if (CHOICENUMBER <= 66){
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissor"
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


function playerMove(event){
    playerChoice = event.target.getAttribute('id');
    computerChoice = getComputerChoice();

    let playerScoreCard = document.querySelector('.player-score-card .score');
    let computerScoreCard = document.querySelector('.computer-score-card .score');

    let playerDisplay = document.querySelector('.player-display');
    let computerDisplay = document.querySelector('.computer-display');

    let winnerDisplay = document.querySelector("#winner");

    //clearing previous choices border from display
    clearCard(playerDisplay, computerDisplay);

    showCard(playerChoice, computerChoice,playerDisplay, computerDisplay);
    

    winnerOfRound = playRound(playerChoice, computerChoice);

    switch (winnerOfRound) {
        case 'computer':
            computerDisplay.style.border = '3px solid gold';
            computerScoreCard.textContent = +computerScoreCard.textContent + 1;
            break

        case 'player':
            playerDisplay.style.border = '3px solid gold';
            playerScoreCard.textContent =  +playerScoreCard.textContent + 1;
    }

    if (+computerScoreCard.textContent ===5){
        console.log('ran');
        winnerDisplay.textContent = "Computer won, you loser!!!";
        computerScoreCard.textContent = 0;
        playerScoreCard.textContent =0;
    }
    else if (+playerScoreCard.textContent === 5){
        winnerDisplay.textContent = "You won!!!";
        computerScoreCard.textContent = 0;
        playerScoreCard.textContent =0;
    }


}

function showCard(playerChoice, computerChoice, playerDisplay, computerDisplay) {
    playerDisplay.textContent = playerChoice.toUpperCase();
    computerDisplay.textContent = computerChoice.toUpperCase();
}

function clearCard(playerDisplay, computerDisplay){
    playerDisplay.style.border = '1px solid white';
    computerDisplay.style.border = '1px solid white';
}


const moveButtons = document.querySelectorAll('.choices button')

moveButtons.forEach(button => button.addEventListener('click', playerMove))