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
