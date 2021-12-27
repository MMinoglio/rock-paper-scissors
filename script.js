//devuelve aleatoriamente Rock, Paper o Scissors.

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let selection = ["rock", "paper", "scissors"];
  return selection[Math.round(Math.random() * 2)];
}

function playRound(playerSelection, computerSelection) {
  const div = document.querySelector("div");
  const h3 = document.querySelector("h3");
  const h2 = document.querySelector("h2");
  const body = document.querySelector("body");

  if (playerSelection.toLowerCase() === computerSelection) {
    h3.textContent = `It\' a tie!! Computer selected ${computerSelection}.`;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    h3.textContent = `YOU WIN!!!! Computer selected ${computerSelection}.`;
    ++playerScore;
  } else {
    h3.textContent = `You lost. Computer selected ${computerSelection}.`;
    ++computerScore;
  }
  h2.textContent = `Player: ${playerScore}  /// Computer: ${computerScore}`
  div.appendChild(h3);
  div.appendChild(h2);
  if (playerScore === 5) {
    alert(`¡¡¡YOU WIN!!!    Player: ${playerScore}  /// Computer: ${computerScore}`);
  } else if (computerScore === 5) {
    alert(`You lost :(     Player: ${playerScore}  /// Computer: ${computerScore}`);
  }
  if (playerScore === 5 || computerScore === 5) {
    h3.textContent = "Waiting for your first selection...";
    h2.textContent = `Player: 0  /// Computer: 0`;
    playerScore = 0;
    computerScore = 0;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});



/*
function game() {
  let computerScore = 0;
  const div = document.querySelector("div");
  const h3 = document.querySelector("h3");
  const h2 = document.querySelectorAll("h2");
  let userScore = 
  div.removeChild(h3);
  //  for (i = 0; i < 5; i++) {
  let playerSelection = window.prompt("Choose Rock, Paper or Scissors");
  let computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);
  if (result === "user_win") ++userScore;
  else if (result === "computer_win") ++computerScore;
  alert(`Player: ${userScore}  /// Computer: ${computerScore}`);
  //  }
  if (userScore > computerScore) {
    alert(
      `YOU WIN THE PLAY!!!   Your score is ${userScore} and computer score is ${computerScore}`
    );
  } else if (userScore < computerScore) {
    alert(
      `you lost the play. Your score is ${userScore} and computer score is ${computerScore}`
    );
  } else {
    alert(
      `It is a tie!  Your score is ${userScore} and computer score is ${computerScore}`
    );
  }
  h2.textContent = `Player: ${userScore}  /// Computer: ${computerScore}`;
  div.appendChild(h3);
}

*/


