function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "rock";
    if (num === 2) return "paper";
    if (num === 3) return "scissors";
}

function getPlayerSelection() {
    const selection = prompt("Rock, Paper or Scissors?");
    return selection.toLowerCase();
}

function playRound(player, cpu) {
    if (player === "rock") {
        if (cpu === "rock")
            console.log(
                `Draw! ${player} against ${cpu} is an unresolved conflict.`
            );
        if (cpu === "paper")
            console.log("You lose! " + cpu + " beats " + player);
        else console.log("You win! " + player + " beats " + cpu);
    }
    if (player === "paper") {
        if (cpu === "paper")
            console.log(
                `Draw! ${player} against ${cpu} is an unresolved conflict.`
            );
        if (cpu === "scissors")
            console.log("You lose! " + cpu + " beats " + player);
        else console.log("You win! " + player + " beats " + cpu);
    }
    if (player === "scissors") {
        if (cpu === "scissors")
            console.log(
                `Draw! ${player} against ${cpu} is an unresolved conflict.`
            );
        if (cpu === "rock")
            console.log("You lose! " + cpu + " beats " + player);
        else console.log("You win! " + player + " beat " + cpu);
    }
}

const cpu = getComputerChoice();
let player = getPlayerSelection();
while (true) {
    if (player === "rock" || player === "paper" || player === "scissors") break;
    else {
        alert("invalid input (type rock, paper or scissors!");
        player = getPlayerSelection();
    }
}
playRound(player, cpu);
