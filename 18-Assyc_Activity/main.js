let balance = 1000;

let transaction1 = 500;
let transaction2 = 200;
let transaction3 = 1000;

balance = balance + transaction1 
balance = balance - transaction2 
balance = balance - transaction3 

console.log(balance);

let testScore1 = 2.5;
let testScore2 = 7.1;
let testScore3 = 5.3;

averageScore = testScore1 + testScore2 + testScore3;

console.log(Math.round(averageScore));

let temperature = parseFloat ( prompt ("That is the temperature today?"));
celsius = temperature;
console.log(celsius) ;

if (celsius > 30) {
  console.log("It's hot outside!");
}
else if (celsius >= 20) {
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