let num;

num = parseInt(prompt("Enter a factorial number: "))

if (num == 1) {
  console.log("1 is neither a prime  nor composite");
} else if (num > 1) {
    if (num %2 == 0) {
      console.log(num, ("not a prime"));
    } else {
      console.log(num, ("is a prime"))
    }
  }
  else if (num < 1) {
    console.log("numbers must be greater than 1");
  }