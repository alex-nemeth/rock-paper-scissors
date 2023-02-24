function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "rock";
    if (num === 2) return "paper";
    if (num === 3) return "scissors";
}

function getPlayerSelection() {
    let preSelection = prompt("Rock, Paper or Scissors?");
    let selection = preSelection.toLowerCase();
    while (true) {
        if (
            selection === "rock" ||
            selection === "paper" ||
            selection === "scissors"
        )
            break;
        else {
            alert("invalid input (type rock, paper or scissors!");
            preSelection = prompt("Rock, Paper or Scissors?");
            selection = preSelection.toLowerCase();
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

function game() {
    const numOfGames = 3;
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
    console.log(`Game over! Player: ${pWins} - ${cWins} : Computer`);
}

game();
