let choices = document.querySelectorAll(".box");
// let userScr = document.querySelector(".user-score");
// let compScr = document.querySelector(".comp-score");
// let reset = document.querySelector(".resetbtn");
// let msgBar = document.querySelector(".massage");
 let msgPar = document.querySelector(".msg");

let userScore = 0;
let compScore = 0;

const compRendChoice = () => {
    const options = ["🗿","🧻","✂"];
    const opt = Math.floor(Math.random() * 3);
    return options[opt];
}

const drawGame = () => {
    console.log("Game is Draw.");
    msgPar.innerText="Game is Draw."
}

const showWinner = (userWin) => {
    if (userWin){
        console.log("You wins.");
        msgPar.innerText="You wins.";
        msgPar.style.backgroundcolor="green";
        msgPar.style.color="white";
    } 
    else {
        console.log("You lose");
        msgPar.innerText="You lose."
        msgPar.style.backgroundcolor="red";
        msgPar.style.color="white";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = compRendChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "🗿") {
            //🧻,✂
            userWin = compChoice === "🧻" ? false : true;
        } else if (userChoice === "🧻") {
            //🗿,✂
            userWin = compChoice === "✂" ? false : true;
        } else {
            //🗿,🧻
            userWin = compChoice === "🗿" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.innerText;
        console.log("you maked a choice.");
        playGame(userChoice);
        
    });
});
