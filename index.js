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
        if(computerChoice === "paper")
            return "human";
        else
            return "computer";
    }
}

function playGame(humanChoice){
    //for(let i = 0; i < 5; i++){

        // const humanChoice = getHumanChoice();
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
        

        //Display Selections
        const hSelection = document.querySelector(".cSelection")
        hSelection.textContent = `${computerChoice}`;

        const cSelection = document.querySelector(".hSelection")
        cSelection.textContent = `${humanChoice}`;
        

        //Displays Score    
        const cScore = document.querySelector(".spanOne")
        cScore.textContent = `${computerScore}`;

        const hScore = document.querySelector(".spanTwo")
        hScore.textContent = `${humanScore}`;



        //Declares Winner after 5 Points Earned
        if(computerScore === 5 && flag === 0){
            flag = 1;

            const result = document.querySelector(".resultPara");
            result.textContent = "Computer Wins!";
            result.setAttribute("style", "color: Red; fontWeight: bolder;");

        }else if(humanScore === 5 && flag === 0){
            flag = 1;
            const result = document.querySelector(".resultPara");
            result.textContent = "Human Wins!";
            result.setAttribute("style", "color: Blue; fontWeight: bolder;");
            
        }

        console.log(`Human Score: ` + humanScore);
        console.log(`Computer Score: ` + computerScore);
    //}

    // if(flag === 1){
    //     flag = 0;
    //     const resetDiv = document.querySelector(".resetDiv");
    //     const resetBut = document.createElement("button");
    //     resetBut.textContent = "RESET";
    //     resetDiv.appendChild(resetBut);
    // }
}

let flag = 0;

let computerScore = 0;
let humanScore = 0;








let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");



rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});





//playGame();