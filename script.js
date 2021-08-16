const ROCK_PAPER_SCISSORS = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let computerChoice = Math.floor(Math.random()*3);
    return ROCK_PAPER_SCISSORS[computerChoice];
}

function playRound(playerSelection, computerSelection){
    const roundResult = document.getElementById('round-result');
    if (playerSelection == computerSelection){
        roundResult.textContent = `Tie! You both selected ${playerSelection}`;
        return;
    }
    else if (playerSelection == "Rock" & computerSelection == "Paper"){
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints += 1
        return;
    }
    else if (playerSelection == "Paper" & computerSelection == "Scissors"){
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints += 1
        return;   
    } 
    else if (playerSelection == "Scissors" & computerSelection == "Rock"){
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints += 1
        return;     
    } 
    else {
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerPoints += 1      
        return;
    }
}
function playGame(e){
    e.stopPropagation();
    const playerSelection = e.target.innerText;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScore();
    roundCount += 1;
}

function updateScore(){
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    playerScore.textContent = `You: ${playerPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`;
    displayWinner(playerScore, computerScore);
}

function reset(){
    roundcount = 0;
    playerPoints = 0;
    computerPoints = 0;
    updateScore();
    document.getElementById("round-result").textContent = "Select a move to start the game!";
    document.getElementById("winner-text").textContent = "Win 5 rounds to win the game!";
}

function displayWinner(){
    if (playerPoints == 5){
        document.getElementById("winner-text").innerHTML = "<strong>Congratulations! You won... Click Reset to play again!</strong>";
    }
    else if (computerPoints == 5){
        document.getElementById("winner-text").innerHTML = "<strong>Oof! You lost... Click Reset to play again!</strong>";
    }
}

let roundCount = 1;
let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playGame));
document.getElementById("reset").addEventListener('click',reset);

