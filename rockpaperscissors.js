let playerWins = 0;
let compWins = 0;

function computerPlay() { //This function provides a random choice of rock, paper or scissors

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

function playerWin(playerChoice, compChoice) { //Adds a win to global var and returns the player's win message
    ++playerWins;
    return `You won! ${playerChoice} beats ${compChoice}.`;
}

function computerWin(playerCho, compCho) { //Adds a win to global var and returns the computer's win message
    ++compWins;
    return `You lost! ${compCho} beats ${playerCho}.`;
}


function singleRound(playerSelection, computerSelection) { //A round of rock, paper, scisssors.
    
    //Making the arguments lowercase, thus case-insensitive
    let playerSel = playerSelection.toLowerCase();
    let compSel = computerSelection.toLowerCase();

    //Just logging  both player's (human and computer) selections
    console.log("Player selection: ", playerSel);
    console.log("Computer selection: ", compSel);

    switch (playerSel) { //This switch is the meat of the program. I used the ternary op ? chaining it further
        case 'rock': //when player uses rock
            return (compSel === 'rock') ? "It's a tie! Both of you chose Rock!" : 
                   (compSel === 'paper') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel) 
        case 'paper': //when player uses paper
            return (compSel === 'paper') ? "It's a tie! Both of you chose Paper!" : 
                   (compSel === 'scissors') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel)      
        case 'scissors': //when player uses scissors
            return (compSel === 'scissors') ? "It's a tie! Both of you chose Scissors!" : 
                   (compSel === 'rock') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel)
        default:
            alert('Wrong input');
    }
}

function game() { //The game itself. 5 Rounds- Invokes singleRound() inside the for loop that executes 5 times
    for (let i = 0; i < 5; i++) {
        
        //Asking the player for their choice, and generating the computer's selection
        let playerSelection = prompt("Choose between Rock, Paper or Scissors.");
        let computerSelection = computerPlay();

        //Invoking singleRound and logging it to console
        console.log(singleRound(playerSelection, computerSelection));
    }

    
    //This conditionals keeps tabs on who wins, looses and when a ties occurs.
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
} //end of game()

game();

