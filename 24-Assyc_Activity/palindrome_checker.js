let palindrome;

palindrome = prompt("Enter Palindrome words");

// const str = palindrome;

const isPalindrome = (inStr) => {
  inStr = inStr.replace(/\W/g, '');
  inStr = inStr.toLowerCase();

  // return inStr === inStr.split('').reverse().join('');

  for (let i=0; i<inStr.length; i+=1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]){
       return console.log((palindrome).toUpperCase(), ("is not a alindrome"));
    }
  }
  return console.log((palindrome).toUpperCase(), ("is a palindrome"));
}
console.log((isPalindrome(palindrome)));

