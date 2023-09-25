let palindrome;

palindrome = prompt("Enter Palindrome words");

// const str = palindrome;

const isPalindrome = (inStr) => {
  inStr = inStr.replace(/\W/g, '');
  inStr = inStr.toLowerCase();

  // return inStr === inStr.split('').reverse().join('');

  for (let i=0; i<inStr.length; i+=1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]){
       return palindrome.toUpperCase() + " is not a palindrome word";
    }
  }
  return palindrome.toUpperCase() + " is a palindrome word"
}
console.log((isPalindrome(palindrome)));

