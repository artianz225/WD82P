let num1;
let num2;

num1 = parseInt(prompt("Enter first number to be added"));
num2 = parseInt(prompt("Enter second number to be added"));

function addiNumbers(num1,num2) {
  return num1 + num2;
}
 let sum = addiNumbers(num1, num2)
 console.log("The sum of the numbers is:",sum);