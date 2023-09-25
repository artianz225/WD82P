// let num;

// num = parseInt(prompt("Enter a factorial number: "))

// if (num == 1) {
//   console.log("1 is neither a prime  nor composite");
// } else if (num > 1) {
//     if (num %2 == 0) {
//       console.log(num, ("not a prime"));
//     } else {
//       console.log(num, ("is a prime"))
//     }
//   }
//   else if (num < 1) {
//     console.log("numbers must be greater than 1");
//   }

let n = 0;

n = parseInt(prompt("Enter number to be factorial"));

function factorial(n) {
  if(n === 0 || n === 1) return 1;

  let result = 1;

   for(let i = 2; i <= n; i++) {
      result *= i;
   }
   return result;
 }

 console.log(factorial(n));