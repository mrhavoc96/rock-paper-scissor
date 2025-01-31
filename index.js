

/*
getComputerChoice -> PSEUDOCODE:
    1. Math.random() produces a random floating point number between 0 and 1;
    2. Using the formula (randomnum * (max - min)) + min; we get random output in range 1 to 3;
    3. 
*/


function getComputerChoice(){
    let randoChoice = Math.floor(Math.random() * (3 - 0)) + 1;

    if(randoChoice === 1){
        return "rock";
    }else if(randoChoice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your one of ROCK, PAPER or SCISSOR: ")
    choice = choice.toLowerCase();
    return choice;
    
}



function playRound(humanChoice, computerChoice){

    console.log("computer: " + computerChoice);
    console.log("human: " + humanChoice);

    
    if(humanChoice === computerChoice){
        return "tie";
    }
    
    else if(humanChoice === "rock"){
        if(computerChoice === "scissors")
            return "human";
        else
            return "computer";
    }

    else if(humanChoice === "paper"){
        if(computerChoice === "rock")
            return "human";
        else
            return "computer";
    }
    
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper" )
            return "human";
        else
            return "computer";
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        

        let result = playRound(humanChoice, computerChoice);

        if (result === "tie"){
            computerScore += 0;
            humanScore += 0;
        }
        else if (result === "computer"){
            computerScore++;
        }else
            humanScore++;

        console.log(`Human Score: ` + humanScore);
        console.log(`Computer Score: ` + computerScore);
    }
}



let computerScore = 0;
let humanScore = 0;

playGame();