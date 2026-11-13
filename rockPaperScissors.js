// Usage: node rockPaperScissors.js <rock|paper|scissors>

// All valid moves
const moves = ["rock", "paper", "scissors"];

// process.argv[0] = node, [1] = script path, [2] = first user argument
const playerMove = (process.argv[2] || "").toLowerCase();

// Reject missing or invalid input
if (!moves.includes(playerMove)) {
  console.log("Usage: node rockPaperScissors.js <rock|paper|scissors>");
  process.exit(1);
}

// Math.random() gives 0 <= n < 1; multiply by 3 and floor to get index 0, 1 or 2
const computerMove = moves[Math.floor(Math.random() * moves.length)];

// Each key beats its value
const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

let result;
if (playerMove === computerMove) {
  result = "It's a draw!";
} else if (beats[playerMove] === computerMove) {
  result = "You win!";
} else {
  result = "You lose!";
}

console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);
