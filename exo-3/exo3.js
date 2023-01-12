
let playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput){

    playerInput = playerInput.toLowerCase();
   
    if(playerInput === "rock" || playerInput === "paper" || playerInput === "scissors" || playerInput === "bomb"){
        return playerInput;

    } else { 
        error = prompt("Your choice ( rock, paper, scissors) ?");
        console.log('Ce n\'est pad un choix valide');
    }
}


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0){
        return('rock');
    }

    else if(randomNumber === 1){
        return('paper');
    } 

    else if(randomNumber === 2){
        return('scissors');
    } 
    return randomNumber;
}


function findWinner(playerChoice, computerChoice){
    if (playerChoice === 'bomb'){
        console.log('win')
    }

    if(playerChoice === computerChoice){
        console.log('tied');
    }

    else{
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                return('win');
            }
            else{
                return('lost');
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                return('win');
            }
            else{
                return('lost');
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                return('win');
            }
            else{
                return('lost');
            }
        }
    }
}

function playGame(){
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();

    console.log("Ordinateur "+computerChoice);
    console.log("Vous "+uChoice);



    console.log(findWinner(uChoice, computerChoice));
}


//getPlayerChoice(playerInput);
//console.log(playerInput);
//getComputerChoice();
playGame();