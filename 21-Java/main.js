// Rock Paper Scissors Console Game
// 2 playes - Human, Computer
// 3 weapon - rock paper, scissors
// Rounds - winner, losser

// Plan
// Console game
// human input - weapon of choice
// computer choice - weapon of choice
// output - winner 
//  1. Get input of human player using prompt  method
//  2. Store the human input in a variable
//  3. Get the weapon of computer
//  4. Create a function that generate ramdom weapon of choice for computer - rock, paper, scissor
//  5. Store the computer weapon in a variable
//  6. create a function that take two parameter playerWeapon, computerWeapon
//  7. Process the weapon to find out the results


//const attemps = 3;

//for (let counter = 0; counter < 3; counter++) {
//  console.log(attemps);
//}







function getComputerSelection() {
  const weapons = ["rock", "paper", "scissor",];
  const randomIndex = Math.round(Math.random() * (weapons.length -1));

 return weapons[randomIndex]
}

function playRound(playerSelection, computerSelection){
  // if the weapon are the same, return "Tie"
  // if the playerWeapon is a rock and the computer weapon is a scissor, return "You Win"
  // if the playerWeapon is a rock and the computer weapon is a scissor, return "You Win"
  // if the playerWeapon is a scissor and the computer weapon is a paper "You Win"
  if (playerSelection === computerSelection) {
    return "Tie"
  } else if (
   (playerSelection === "rock" && computerSelection === "scissor") ||
   (playerSelection === "paper" && computerSelection == "rock") ||
   (playerSelection === "scissor" && computerSelection == "paper")
  ) {
  return "You win";
  } else {
  return ("You Lose");
  }
}

//console.log(playRound(playerSelection, computerSelection));

function game () {
  for (let i = 0; i < 3; i++) {
    const playerSelection = prompt("Type your weapon!");
    const computerSelection = getComputerSelection();
    
    console.log(playRound(playerSelection, computerSelection));

  }
}

game();

// console.log(Math.round(Math.random() * 10)); random number from 10