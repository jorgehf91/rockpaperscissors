let playerWins = 0;
let compWins = 0;

function computerPlay() {

    //first a random number generator
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let randNum = getRandomInt(3); //Now  randNum will -randomly- store three possible numbers: 0, 1 and 2.

    if (randNum === 0) {
        return "Paper";
    }
    else if (randNum === 1) {
        return "Rock";
    } else {
        return "Scissors";
    }
}

function playerWin(playerChoice, compChoice) {
    ++playerWins;
    return `You won! ${playerChoice} beats ${compChoice}.`;
}

function computerWin(playerCho, compCho) {
    ++compWins;
    return `You lost! ${compCho} beats ${playerCho}.`;
}


function singleRound(playerSelection, computerSelection) {
    
    //Making the arguments case-insensitive
    let playerSel = playerSelection.toLowerCase();
    let compSel = computerSelection.toLowerCase();

    console.log("Player selection: ", playerSel);
    console.log("Computer selection: ", compSel);

    switch (playerSel) {
        case 'rock':
            return (compSel === 'rock') ? "It's a tie! Both of you chose Rock!" : 
                   (compSel === 'paper') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel) 
        case 'paper':
            return (compSel === 'paper') ? "It's a tie! Both of you chose Paper!" : 
                   (compSel === 'scissors') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel)      
        case 'scissors':
            return (compSel === 'scissors') ? "It's a tie! Both of you chose Scissors!" : 
                   (compSel === 'rock') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel)
        default:
            alert('Wrong input');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("Choose between Rock, Paper or Scissors.");
        let computerSelection = computerPlay();

        console.log(singleRound(playerSelection, computerSelection));
    }

    
    if (playerWins > compWins) {
        console.log(`You won ${playerWins} out of 5 games.`);
        console.log("The winner of the game is you!");
    } 
    
    else if (compWins > playerWins) {
        console.log(`The computer won ${compWins} out of 5 games.`);
        console.log("You lost the game :(");
    }
    
    else {
        console.log(`You won ${playerWins} and the computer won ${compWins} out of 5 games.`);
        console.log("It's a proper tie!");
    }
}

game();

