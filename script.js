function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "rock";
    if (num === 2) return "paper";
    if (num === 3) return "scissors";
}

function getPlayerSelection() {
    let preSelection = prompt("Rock, Paper or Scissors?");
    let selection = preSelection.toLowerCase().trim();
    let count = 0;
    while (true) {
        if (
            selection === "rock" ||
            selection === "paper" ||
            selection === "scissors"
        )
            break;
        else {
            count++;
            if (count === 3) {
                alert("Clueless");
                window.location.replace(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ://www.w3schools.com"
                );
                exit;
            }
            alert("invalid input (type rock, paper or scissors!");
            preSelection = prompt("Rock, Paper or Scissors?");
            selection = preSelection.toLowerCase().trim();
        }
    }
    return selection;
}

function playRound() {
    let cpu = getComputerChoice();
    let player = getPlayerSelection();
    if (player === "rock") {
        if (cpu === "rock") {
            console.log(
                `Draw! ${player} against ${cpu} is an unresolved conflict.`
            );
            alert(`Draw! ${player} against ${cpu} is an unresolved conflict.`);
            return 0;
        } else if (cpu === "paper") {
            console.log("You lose! " + cpu + " beats " + player);
            alert("You lose! " + cpu + " beats " + player);
            return -1;
        } else {
            console.log("You win! " + player + " beats " + cpu);
            alert("You win! " + player + " beats " + cpu);
            return 1;
        }
    }
    if (player === "paper") {
        if (cpu === "paper") {
            console.log(
                `Draw! ${player} against ${cpu} is an unresolved conflict.`
            );
            alert(`Draw! ${player} against ${cpu} is an unresolved conflict.`);
            return 0;
        } else if (cpu === "scissors") {
            console.log("You lose! " + cpu + " beats " + player);
            alert("You lose! " + cpu + " beats " + player);
            return -1;
        } else {
            console.log("You win! " + player + " beats " + cpu);
            alert("You win! " + player + " beat " + cpu);
            return 1;
        }
    }
    if (player === "scissors") {
        if (cpu === "scissors") {
            console.log(
                `Draw! ${player} against ${cpu} is an unresolved conflict.`
            );
            alert(`Draw! ${player} against ${cpu} is an unresolved conflict.`);
            return 0;
        } else if (cpu === "rock") {
            console.log("You lose! " + cpu + " beats " + player);
            alert("You lose! " + cpu + " beats " + player);
            return -1;
        } else {
            console.log("You win! " + player + " beat " + cpu);
            alert("You win! " + player + " beat " + cpu);
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
        alert(`Player ${pWins} - ${cWins} Computer`);
    }
    console.log(`Game over! Player: ${pWins} - ${cWins} : Computer`);
    alert(`Game over! \nPlayer: ${pWins} - ${cWins} : Computer`);
}

function gameSet() {
    let set = 0;
    let count = 0;
    set = prompt("How many wins do you want to play for?\nEnter a number:");
    while (isNaN(set)) {
        count++;
        if (count === 3) {
            alert("Clueless");
            window.location.replace(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ://www.w3schools.com"
            );
            exit;
        }
        set = prompt(
            `Invalid input!\nHow many wins do you want to play for?\nEnter a number:`
        );
    }
    return set;
}
game(gameSet());
