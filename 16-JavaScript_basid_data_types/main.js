// JavaScript Basic Data Types 
// 1. Numbers
/* - Integers (e.g. 10, 400, -5)
 - Floating point numbers (eg. 12.5, 56.7786543)
 - Doubles
**/
let age = 28;
let myAge = parseInt ("28");
let tempInFahrenheit = parseFloat ("89.7");
let tempInCelsius = 38.5;

console.log(typeof age);
console.log(typeof tempInFahrenheit);

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = parseInt ("5");

console.log(secondNumber + thirdNumber);
console.log(6 + 9); // add
console.log(20 - 15); // sub
console.log(3 * 7); // multipl
console.log(10 / 5); // exponent
console.log(5 ** 2); //reminder 
console.log(8 % 3);

let year = 2023;
// increment
year = year + 1;
//decrement
year = year - 1;

console.log(year);

let x = 3;
let y = 4;
x *= y;

console.log(x);
console.log((secondNumber % 9) * 10);

let a = 5;
let b = 2;

a == b;

console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);

// 2. Strings
let string = "thee revolution will not be televised";
let single = "thee revolution will not be televised";
let double = "I'm nothing";
let backtick = "thee revolution will not be televised";

console.log(typeof string);
console.log(typeof single);
console.log(typeof double);
console.log(typeof backtick);

console.log("the value of single" + double);

const name = "Arthur";
const greeting = `Hello, ${name}, ${2 + 8}`;

console.log(greeting);

const one = "hello";
const two = "how are you?"
const joined =`${one}, ${two}`;

console.log(joined);

const song = "Golder Hour";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}, I give it a score of ${(score / highestScore) * 100}%`;

const newline = `One day you finally know what you had to do, and began`;

console.log(output);