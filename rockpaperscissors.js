let playerWins = 0;
let compWins = 0;
let playerClicks = 0; //this should be where the each click is counted, until 5 (hence 5 rounds in total)

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
    return divResultMessage.textContent = `You won! ${playerChoice} beats ${compChoice}.`;
}

function computerWin(playerCho, compCho) { //Adds a win to global var and returns the computer's win message
    ++compWins;
    return divResultMessage.textContent = `You lost! ${compCho} beats ${playerCho}.`;
}


function singleRound(x) { //A round of rock, paper, scisssors.
    //console.log(e.target.textContent);
    playerClicks++;
    
//     //Making the arguments lowercase, thus case-insensitive
    let playerSel = x.target.textContent.toLowerCase();
    let compSel = computerPlay().toLowerCase();

    //onsole.log('playerSel: ', playerSel);
    divPlayerChoices.textContent = `Player Selects: ${playerSel}`;
    //console.log('compSel: ', compSel); 
    divCompChoices.textContent = `Computer Selects: ${compSel}`;

    //Where the winner and loser is determined in each round
    switch (playerSel) { //This switch is the meat of the program. I used the ternary op ? and keep chaining it further
        case 'rock': //when player uses rock
            return (compSel === 'rock') ? divResultMessage.textContent = "It's a tie! Both of you chose Rock!" : 
                   (compSel === 'paper') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel) 
        case 'paper': //when player uses paper
            return (compSel === 'paper') ? divResultMessage.textContent = "It's a tie! Both of you chose Paper!" : 
                   (compSel === 'scissors') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel)      
        case 'scissors': //when player uses scissors
            return (compSel === 'scissors') ? divResultMessage.textContent = "It's a tie! Both of you chose Scissors!" : 
                   (compSel === 'rock') ? computerWin(playerSel, compSel) : playerWin(playerSel, compSel)
        default:
            alert('Wrong input');
    } //end of switch
}//end of function singleRound

function game(e) { //The game itself. 5 Rounds- Invokes singleRound() inside the for loop that executes 5 times
        
        //Re-starting the final score
        newDiv.textContent = '';
        divTwo.textContent = '';
        //Invoking singleRound and logging it to console
        console.log(singleRound(e));
        console.log('player clicks: ', playerClicks);
        playerScore.textContent = `Player Score: ${playerWins}`;
        computerScore.textContent = `Computer Score: ${compWins}`;
        rounds.textContent = `Round #${playerClicks}`;
        

    
        
            
    //This conditionals keeps tabs on who wins, looses and when a ties occurs. And also restarts every global counter
    if (playerClicks === 5) {
        if (playerWins > compWins) {
            //console.log(`You won ${playerWins} out of 5 games.`);
            divTwo.textContent = `You won ${playerWins} out of 5 games.`;
            //console.log("The winner of the game is you!");
            newDiv.textContent = `The winner of the game is you!`;
            // Restarts every counter for a new game
            playerClicks = 0;
            playerWins = 0;
            compWins = 0;
        } 
        
        else if (compWins > playerWins) {
            //console.log(`The computer won ${compWins} out of 5 games.`);
            divTwo.textContent = `The computer won ${compWins} out of 5 games.`;
            //console.log("You lost the game :(");
            newDiv.textContent = "You lost the game :(";
            // Restarts every counter for a new game
            playerClicks = 0; 
            playerWins = 0;
            compWins = 0;
        }
        
        else {
            //console.log(`You won ${playerWins} and the computer won ${compWins} out of 5 games.`);
            divTwo.textContent = `You won ${playerWins} games and the computer won ${compWins} games out of 5 games.`;
            //console.log("It's a tie!");
            newDiv.textContent = "It's a tie!";
            // Restarts every counter for a new game
            playerClicks = 0;
            playerWins = 0;
            compWins = 0;
        } 
    }
} //end of game()


//The events for the 3 buttons
let rock = document.getElementById('1');
let paper = document.getElementById('2');
let scissors = document.getElementById('3');
let body = document.querySelector('body');

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

//Now a div that shows the console logs.

let divPlayerChoices = document.createElement('div');
let divCompChoices = document.createElement('div');
let divResultMessage = document.createElement('div');
let playerScore = document.createElement('div');
let computerScore = document.createElement('div');
let rounds = document.createElement('div');
let newDiv = document.createElement('div');
let divTwo = document.createElement('div');

body.appendChild(rounds);
body.appendChild(divPlayerChoices);
body.appendChild(divCompChoices);
body.appendChild(divResultMessage);
body.appendChild(playerScore);
body.appendChild(computerScore);
body.appendChild(divTwo);
body.appendChild(newDiv);


let divs = document.getElementsByTagName('div');

//divs.style.borderStyle = '5px solid red';
console.log(divs);

// for (let i = 0; i < divs.length; i++) {  
//     divs[i].style.margin = '20px';
// } 

rounds.style.textAlign = 'center';
rounds.style.fontWeight = 'bold';
rounds.style.fontSize = '20px';
rounds.style.color = 'yellow';

//divPlayerChoice.style.
divCompChoices.style.float = 'right';
divCompChoices.style.marginTop = '-40px';


divResultMessage.style.paddingTop = '14px';
divResultMessage.style.textAlign = 'center';
divResultMessage.style.fontWeight = 'bold';

playerScore.style.borderTop = '2px solid red';
playerScore.style.paddingTop = '14px';

divTwo.style.textAlign = 'center';
newDiv.style.textAlign = 'center';
newDiv.style.fontSize= '40px';
divTwo.style.fontSize= '40px';