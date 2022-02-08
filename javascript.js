function computerPlay() {
  let randomNo = Math.floor(Math.random() * 3) + 1;

  switch (randomNo) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

//Return integer so we can print different statement based on output
//Player lose -1 , draw 0, win 1
function play(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return 0;
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return -1;
    } else {
      return 1;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (computerSelection === "Rock") {
      return 1;
    } else {
      return -1;
    }
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    let choice = prompt("Enter your choice: \n 1: Rock \n 2: Paper \n 3: Scissors.");

    let playerSelection =
      choice == 1 ? "Rock" : choice == 2 ? "Paper" : choice == 3 ? "Scissors" : undefined;

    if (playerSelection === undefined) {
      console.log("Enter valid choice, round will restart again");
      round--;
      continue;
    }
    let computerSelection = computerPlay();
    let result = play(playerSelection, computerSelection);

    if (result === 1) {
      playerScore++;
      console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    } else if (result === -1) {
      computerScore++;
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log(`Draw! computer also chose ${playerSelection}`);
    }

    console.log(
      `Current Scores: \n Player: ${playerScore} \n Computer: ${computerScore}`
    );

    console.log("------------------------------------------------");
  }
  console.log("Final Result\n ");
  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("Draw");
  }
}

game();
