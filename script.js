let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Darw. Play again.";
    msg.style.backgroundColor = "green";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#081b31";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame(); //draw Game
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false:true;    //scissors,paper
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;   //rock, scissors
        }
        else{
            compChoice === "rock" ? false : true;     //rock,paper
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});