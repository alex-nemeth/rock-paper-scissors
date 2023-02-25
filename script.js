function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "Rock";
    if (num === 2) return "Paper";
    if (num === 3) return "Scissors";
}
function playRound(player) {
    cpu = getComputerChoice();
    if (player === cpu) {
        gameText.textContent = "Draw!";
        return 0;
    } else if (player === "Rock") {
        if (cpu === "Paper") {
            gameText.textContent = "You lose! " + cpu + " beats " + player;
            return -1;
        } else {
            gameText.textContent = "You win! " + player + " beats " + cpu;
            return 1;
        }
    }
    if (player === "Paper") {
        if (cpu === "Scissors") {
            gameText.textContent = "You lose! " + cpu + " beats " + player;
            return -1;
        } else {
            gameText.textContent = "You win! " + player + " beats " + cpu;
            return 1;
        }
    }
    if (player === "Scissors") {
        if (cpu === "Rock") {
            gameText.textContent = "You lose! " + cpu + " beats " + player;
            return -1;
        } else {
            gameText.textContent = "You win! " + player + " beat " + cpu;
            return 1;
        }
    }
}
function game(numOfGames) {
    let pWins = 0;
    let cWins = 0;
    let round = 0;
    for (let i = 1; i <= numOfGames; i++) {
        round = playRound();
        if (round === 0) i--;
        else if (round === 1) pWins++;
        else cWins++;
        gameText.textContent = `Player ${pWins} - ${cWins} Computer`;
    }
    gameText.textContent = `Game over! \nPlayer: ${pWins} - ${cWins} : Computer`;
}

let scoreText = document.querySelector(".score");
let gameText = document.querySelector(".top");

let playerSelection;
let computerSelection;
let playerScore = 0;
let cpuScore = 0;
let result;

const modal = document.getElementById("myModal");
// popup close
const span = document.getElementsByClassName("close")[0];
const popup = document.querySelector(".popup");
const buttons = document.querySelectorAll(".selection");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
// on click away
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        playerSelection = button.textContent;
        result = playRound(playerSelection);
        if (result === 1) {
            playerScore++;
        }
        if (result === -1) {
            cpuScore++;
        }
        scoreText.textContent = `${playerScore} - ${cpuScore}`;
        if (playerScore === 5) {
            popup.textContent = `You win with a score of ${playerScore} - ${cpuScore}!`;
            modal.style.display = "block";
            playerScore = 0;
            cpuScore = 0;
            scoreText.textContent = "";
            gameText.textContent = "Rock, paper or scissors?";
        }
        if (cpuScore === 5) {
            popup.textContent = `You lost with a score of ${playerScore} - ${cpuScore}!`;
            modal.style.display = "block";
            playerScore = 0;
            cpuScore = 0;
            scoreText.textContent = "";
            gameText.textContent = "Rock, paper or scissors?";
        }
    })
);

//game(gameSet());
