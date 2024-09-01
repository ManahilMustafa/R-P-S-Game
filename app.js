// for games we make modular functions  means we make functions for each thing separetly

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Rock , paper, sciissors /comp choice randomly one choice
    // we use Math.random becuse it slect random nmbers b/w 0-1 and * 3 bcoz it now select b/w 0-2
     // Math.floor remove the after decimal numbers
   const randIdx = Math.floor(Math.random() * 3);  
   return options [randIdx];   
};
  const drawGame = ()=> {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };

  const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        //score updation
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
  };
// computer choice
const playGame = (userChoice)=>{
console.log("user Choice =", userChoice);

// Gnerate computer choice
const compChoice = genCompChoice();
console.log("comp Choice =", compChoice);

// actuall winner
if (userChoice == compChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true; //we assume that we win
    if(userChoice == "rock"){
        //commp have 2 choices scissors, paper
       userWin = compChoice == "paper"? false : true;
    }
    else if(userChoice == "paper"){
        //comp have 2 choices rock, scissor
        userWin = compChoice == "scissors"? false : true;

    }else{
        //user chose scissor and comp have 2 options paper, rock
        userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};


// userChoice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {  // Corrected here
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});