// Problem Solving

// 1. Understand the Problem

// 2. Plan
//   -Algoritm - Pseudocode
//   -psuedocode:
//    1 kapag ang user nag type ng number - (when the user input the Number) 
//    2 Mag create nang counter variable kung saan ilalagay nation ang value na zero - (create a variable if where to put the zero CSSMathValue)
//    3 Mag create pa ng isang variable na mag hohold nang value na nilagay ni user
//    4 Habang mas mababa and counter variable kumpara sa numero print

// 3. Divide and conquer

let userInput = parseInt(prompt("Enter a number"));

for (let i = 1; i <= userInput; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
  console.log("fizzBuzz");
} else if (i % 5 === 0) {
  console.log("Buzz");
} else if (i % 3 === 0) {
  console.log("Fizz");
} else {
  console.log(i);
}
}

let attemps = 3;

const userName = (prompt("enter username"));

for (let attemps = 1; attemps <= userName; attemps++ ) {
  console.log("Try Again");
}
