const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const resultBox = document.querySelector(".round-winner>h3");
const whoBeatsWho = document.querySelector(".round-winner>h2");
const button = document.createElement("button");
button.textContent = "Play again";
const playerChoiceImage = document.querySelector(".player>img");
const computerChoiceImage = document.querySelector(".computer>img");

function computerPlay() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

let playerScore = 0;
let computerScore = 0;

function updateScore(result, playerChoice, computerChoice) {
  computerChoiceImage.setAttribute("src", `images/${computerChoice}.svg`);
  playerChoiceImage.setAttribute("src", `images/${playerChoice}.svg`);
  if (result === "draw") {
    resultBox.textContent = "Draw!";
    whoBeatsWho.textContent = `Computer also chose ${playerChoice}`;
  } else if (result === "pWon") {
    resultBox.textContent = "You won this round!";
    whoBeatsWho.textContent = `${playerChoice} beats ${computerChoice}`;
    playerScoreElement.textContent = playerScore;
  } else {
    resultBox.textContent = "You lost this round!";
    whoBeatsWho.textContent = `${computerChoice} beats ${playerChoice}`;
    computerScoreElement.textContent = computerScore;
  }
}

flag = 1;
function gameOver(result) {
  if (flag === 0) {
    return;
  }
  whoBeatsWho.remove();
  const finalResultBox = document.querySelector(".round-winner");
  finalResultBox.append(button);
  if (result === "pWon") {
    flag = 0;
    resultBox.textContent = "You Won! 🥳";
  } else {
    flag = 0;
    resultBox.textContent = "You Lost! 🙃";
  }
}

function playRound(playerChoice) {
  let computerChoice = computerPlay();

  if (playerChoice === computerChoice) {
    updateScore("draw", playerChoice, computerChoice);
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
    playerScore++;
    updateScore("pWon", playerChoice, computerChoice);
  } else {
    computerScore++;
    updateScore("pLost", playerChoice, computerChoice);
  }
  if (playerScore === 5) {
    gameOver("pWon");
    return;
  } else if (computerScore === 5) {
    gameOver("pLost");
    return;
  }
}
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissors");

rock.addEventListener("click", () => playRound("ROCK"));
paper.addEventListener("click", () => playRound("PAPER"));
scissor.addEventListener("click", () => playRound("SCISSORS"));

button.addEventListener("click", () => (window.location.href = window.location.href));
