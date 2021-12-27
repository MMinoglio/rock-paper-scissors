// Se crean convesrores de palabras a numeros y biceversa 

function getSelectionFromNumber(num) {
  if (num === 1) return "rock";
  if (num === 2) return "paper";
  if (num === 3) return "scissors";
}

// Se genera un N° aleatorio del 1 al 3, y devuelve rock, paper, scissors segun corresponda
/*
function computerPlay() {
  return getSelectionFromNumber(Math.ceil(Math.random() * 3));
}*/

// Se toman los valores de selección del jugador y la comutadora, y se devuelve el resultado 

function round(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    window.alert(`Computer selected ${computerSelection}`);
    window.alert(`It's a tie! they both chose ${computerSelection}`);
  } else if (
    (playerSelection === "rock" && computerSelection != "paper") ||
    (playerSelection === "paper" && computerSelection != "scissors") ||
    (playerSelection === "scissors" && computerSelection != "rock")
  ) {
    window.alert(`Computer selected ${computerSelection}`);
    window.alert(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    window.alert(`Computer selected ${computerSelection}`);
    window.alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
//  for (i = 1; i <= 5; i++) {
    let playerSelected = prompt("Select Rock, Paper or Scissors").toLowerCase();
    let computerSelected = computerPlay();
    round(playerSelected, computerSelected);
//  }
}
