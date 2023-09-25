// Activity 1 Code -------------------------------------
// function addNumbers (num1, num2) {
//   return num1 + num2;
// }

// // const addNumbers = (num1, num2) => num1 + num2;

// console.log(addNumbers);
//------------------------------------------------------


//------------------------------------------------------
// function factorial(n) {
//   if(n === 0 || n === 1) return 1;

//   let result = 1;

//   for(let i = 2; i <= n; i++) {
//      result *= i;
//   }
//   return result;
// }

// console.log(factorial(10));
//------------------------------------------------------
// function reverseString (str) {
//   let reverseStr = '';

//   for (let i = str.lenght -1; i >= 0; i--) {
//     reverseString += str.char(i);
//   }
//   return reverseStr;
// }

// console.log(reverseString("Hello"));

// function findLargestNumber(arr) {
//   if(arr.lenght === 0) return undefined;

//   let largest = arr[0];

//   for (let i = 1; i < arr.lenght; i++) {
//     if(arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }


// console.log(findLargestNumber([5, 100, 3, 4, 2, 1]));

function isPalindrome(str) {
  let reversedStr = '';

  for (let i = str.lenght; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return str === reversedStr;
}
console.log(isPalindrome("hello"));

