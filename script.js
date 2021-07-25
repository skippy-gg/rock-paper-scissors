const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];

function normalizeOutputs(outputToNormalize){
    return (outputToNormalize.charAt(0)).toUpperCase()+outputToNormalize.substring(1);
}

function computerPlay(){
    let computerChoice = Math.floor(Math.random()*3);
    return ROCK_PAPER_SCISSORS[computerChoice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log(`Tie! You both selected ${normalizeOutputs(playerSelection)}`);
        return null;
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        console.log(`You Lose! ${normalizeOutputs(computerSelection)} beats ${normalizeOutputs(playerSelection)}`);
        return false;
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        console.log(`You Lose! ${normalizeOutputs(computerSelection)} beats ${normalizeOutputs(playerSelection)}`);
        return false;   
    } 
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        console.log(`You Lose! ${normalizeOutputs(computerSelection)} beats ${normalizeOutputs(playerSelection)}`);
        return false;     
    } 
    else {
        console.log(`You Win! ${normalizeOutputs(playerSelection)} beats ${normalizeOutputs(computerSelection)}`);      
        return  true;
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let playerWonRound;
    for(let i = 0; i<5; i++){
        const playerSelection = prompt("Choose a move!");
        const computerSelection = computerPlay();
        playerWonRound = playRound(playerSelection.toLowerCase(), computerSelection);
        if(playerWonRound == true){
            playerPoints++;
        }
        else if (playerWonRound == false){
            computerPoints++;
        }
    }
    if (playerPoints > computerPoints){
        console.log(`Wow! You beat the computer ${playerPoints} to ${computerPoints}`)
    }
    else{
        console.log(`The computer beat you ${computerPoints} to ${playerPoints}...`)
    }
    console.log("Would you like to play again?")
    const playAgain = prompt("Enter Y to play again or N to exit the game!").toUpperCase();
    if (playAgain == "Y"){
        game();
    }
}

game();