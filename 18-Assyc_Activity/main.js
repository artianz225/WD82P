let balance = 1000;

let transaction1 = 500;
let transaction2 = 200;
let transaction3 = 1000;

balance = balance + transaction1 
balance = balance - transaction2 
balance = balance - transaction3 

console.log(balance);

let testScore1 = 92;
let testScore2 = 85.6;
let testScore3 = 72.5;

averageScore = (testScore1 + testScore2 + testScore3) / 3;

console.log(Math.round(averageScore));

let temperature = parseFloat (prompt("That is the temperature today?"));
celsius = temperature;
console.log(celsius) ;

if (temperature > 30) {
  console.log("It's hot outside!");
}
else if (temperature >= 20) {
  console.log("The Weather is pleasant");  
}
else {
  console.log("It's bit chilly");
}

const Activirt1 = balance;
const Activity2 = averageScore;
const Activirt3 = temperature;
const output = `The answer for Activiry-1 is ${Activirt1}, 
And the answer for the Activity-2 is ${(Math.round(averageScore))}, 
Lastly the answer for the Activity-3 is ${Activirt3}`;

console.log(output);

//logical Operators (AND = &&, OR = ||, NOT = !)
// expression 1 || expression2 || expression3 

let age = 4;

if (age > 5 || age < 10) {
  console.log("kids");
} else {
  console.log("teenager");

}

const isAdult = false;
const hasLicense = true;

if (isAdult && hasLicense) {
  console.log("you can drive a car");
} else {
  console.log("you can't drive a car");
}

const isRaining = true;
const haveUmbrella = false;

if (isRaining && haveUmbrella) {
  console.log("You won't get wet");
} else {
  console.log("You might get wet");
}

//logical operator AND and OR

const yearsofExperience = 2;
const hasDegree = true;
const knowsprogramming = true;
const hasCertification = false;

if ((yearsofExperience >= 3 && hasDegree && knowsprogramming)
   || 
   (hasCertification && knowsprogramming)){
  console.log("you are qualified");
} else {
  console.log("Sorry");
}

const isSingle = true;

if (!isSingle) {
  console.log("Im single");
} else {
  console.log("Im not single");
}

const iceCreamVanOutside = true;
const houseStatusOnFire = true;

if (!(iceCreamVanOutside || houseStatusOnFire)) {
  console.log("you shoud leave the house quick");
} else {
  console.log("you should stay inside");
}

// let weather = "sunny";

// switch (weaher) {
//   case "sunny":
//     console.log("It's beastiful day");
//     break

//     case "rainy":
//     console.log("grab you umbrella");
//     break

//     case "snowing":
//     console.log("grab you umbrella");
//     break

//     default:
//       console.log("wear a coat and take a shovel");

// }

// let grade = 75;

// switch(true) {
//   case grade >= 90;
//   console.log("A");
//   break;
//   case grade >= 80;
//   console.log("B");
//   break;
//   case grade >= 70;
//   console.log("C");
//   break;
//   case grade >= 60;
//   console.log("D");
//   break;
//   case grade >= 50;
//   console.log("E");
//   break;
// }

let yourAge = 18;
let Vote;

if (age >= 18) {
  Vote = true;
} else {
  Vote = false;
}

let youreAge = 19;
let isEligibletoBote = youreAge >= 18 ? `"you can Vote"` : `"You Cant Vote"`;

console.log(isEligibletoBote);

const myText = "I am string";
const newString = myText.replace("string", "sausage");

console.log(newString);

let name = "Arthur";
console.log(name);

function printName (name) {
  console.log(name);
}

printName(("What is you name?"));
printName("John");
printName("Philipps");


function myFunction(firstNamE, lastName){
  console.log(firstNamE + " " + lastName + " is a programming");
}

myFunction("Arthur", "Epiz");
myFunction("Kodego", "Bootcamp");

function averagePrices (order1, order2, order3, order4, order5) {
  let sum = order1 + order2 + order3 + order4 + order5;
  let average = sum / 5;
  console.log(average);
}

averagePrices(10, 20, 30, 40, 50);

function hello (name = "Arthur") {
  console.log(`hello ${name}`);
}

hello("Arhur"); 
hello(); 

function numbers (num1, num2) {
  let total = num1 - num2;
  console.log(total);
}

numbers(15, 10);
numbers(25, 26);

const subtract = (x, y) => x - y;
console.log(subtract);

let age1 = 18;

function printAge1 () {
  let age1 = 19;
  console.log(age1)
}

printAge1();

function add (x,y) {return x + y;}

console.log(add(1, 2));
console.log(add(5, 5));


// new 
const addition = (x, y) => x + y;
console.log(addition(15, 5));

let output1 = 0;

function add1(a, b) {
  output1 = a + b;
}

add1(2, 7);

console.log(output1);

function favorateAnimal (animal) {
  return animal + " is my favorate animal";
}

console.log(favorateAnimal("Dog"))


function mynames (myFirstname, myLastname){
  console.log(myFirstname + " " + myLastname);
}

mynames("Carlo", "Dacuyan");
mynames("Jose", "Rizal");
mynames("juan", "pablo");

function favoratename (Myname) {
  return Myname;
}

console.log(favoratename("Carlo Dacuyan"))
console.log(favoratename("Jose Rizal"))
console.log(favoratename("Juan Pablo"))



function add7 (number) {
  return number + 7;
}

console.log(add7(3));

function multiply (number1, number2) {
  return number1 * number2;
}

console.log(multiply(10, 10));


// This example to capitalize the First letter and lowercase the remaining letters
const word = "arTHur JoHN PhilipPs";
const remainingLetters = word.slice(1).toLocaleLowerCase();
const firstLetter = word.charAt(0);
const firstLetterCap = firstLetter.toUpperCase();
const capitalizedWord = firstLetterCap + remainingLetters;
console.log(capitalizedWord);

function capitalize (string) {
  string.toLocaleLowerCase();

}


// This example getting only the last letter of the string
function lastletter (string) {
  return string.charAt(string.length -1);
}

console.log(lastletter("Arrtthhuurrz"))


//This example is to capitalize every first letter of the words
const str = 'i have learned something new today';

const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log(str2);