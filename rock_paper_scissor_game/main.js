// Buttons
const rockImg = document.getElementById('rock-img');
const paperImg = document.getElementById('paper-img');
const scissorsImg = document.getElementById('scissors-img');
// Scoreboard Labels
const userScoreLabel = document.getElementById('player-score-label');
const computerScoreLabel = document.getElementById('computer-score-label');
const tieScoreLabel = document.getElementById('tie-score-label');
// Turns Labels
const playerTurnLabel = document.getElementById('player-turn-label');
const computerTurnLabel = document.getElementById('computer-turn-label');
const drawLabel = document.getElementById('draw-turn-label');

let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerWeapon, computerWeapon) {
  if (playerWeapon === computerWeapon) {
    return 'Tie';
  } else if (
    (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
    (playerWeapon === 'paper' && computerWeapon === 'rock') ||
    (playerWeapon === 'scissors' && computerWeapon === 'paper')
  ) {
    return 'You win';
  } else {
    return 'You lose';
  }
}


function getComputerWeapon() {
  const weapons = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}

function gameHandler(playerWeapon) {
  const computerSelection = getComputerWeapon();
  const playerSelection = playerWeapon.toLowerCase();
 
  playerTurnLabel.textContent = playerSelection;
  computerTurnLabel.textContent = computerSelection;

  const result = playRound(playerSelection, computerSelection);

  if (result === 'You win') {
    userScore++;
    userScoreLabel.textContent = userScore;
  } else if (result === 'You lose') {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    tieScore++;
    tieScoreLabel.textContent = tieScore;
  }
}

rockImg.addEventListener('click', () => gameHandler(rockImg.textContent));
paperImg.addEventListener('click', () => gameHandler(paperImg.textContent));
scissorsImg.addEventListener('click', () => gameHandler(scissorsImg.textContent));