function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "Rock";
    if (num === 2) return "Paper";
    if (num === 3) return "Scissors";
}

function checkResult(cpuChoice, player) {
    if (cpu === cpuChoice) {
        gameText.textContent = "You lose! " + cpu + " beats " + player;
        return -1;
    } else {
        gameText.textContent = "You win! " + player + " beats " + cpu;
        return 1;
    }
}

function playRound(player) {
    cpu = getComputerChoice();
    if (player === cpu) {
        gameText.textContent = "Draw!";
        return 0;
    } else if (player === "Rock") {
        return checkResult("Paper", player);
    } else if (player === "Paper") {
        return checkResult("Scissors", player);
    } else return checkResult("Rock", player);
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
    }
    gameText.textContent = `Game over! \nPlayer: ${pWins} - ${cWins} : Computer`;
}

function reset() {
    modal.style.display = "block";
    playerScore = 0;
    cpuScore = 0;
    scoreText.textContent = "";
    gameText.textContent = "Rock, paper or scissors?";
}

let scoreText = document.querySelector(".score");
let gameText = document.querySelector(".top");

let playerScore = 0;
let cpuScore = 0;

const images = document.querySelectorAll(".dwayne");

images.forEach((image) =>
    image.addEventListener("click", () => {
        const playerSelection = image.dataset.choice;
        const result = playRound(playerSelection);
        if (result === 1) {
            playerScore++;
        } else if (result === -1) {
            cpuScore++;
        }
        scoreText.textContent = `${playerScore} - ${cpuScore}`;
        if (playerScore === 5) {
            popup.textContent = `You win with a score of ${playerScore} - ${cpuScore}!`;
            reset();
        } else if (cpuScore === 5) {
            popup.textContent = `You lost with a score of ${playerScore} - ${cpuScore}!`;
            reset();
        }
    })
);

const modal = document.getElementById("myModal");
// popup close
const span = document.getElementsByClassName("close")[0];
const popup = document.querySelector(".popup");

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
