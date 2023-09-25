const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
const opsBtns = document.querySelectorAll(".operational");
const eqlsBtn = document.querySelector(".equals");

let lastNumber = "";
let newNumber  = "";
let operation  = "";
let answer     = "";

function calculate (lastNumber, newNumber, operation) {
  let total;

  const lasnum = parseFloat(lastNumber);
  const newnum = parseFloat(newNumber);

  switch(operation) {
    case "/":
      total = lasnum / newnum;
      break;
    case "*":
      total = lasnum * newnum;
      break;
    case "-":
      total = lasnum - newnum;
      break;
    case "+":
      total = lasnum + newnum;
      break;
    default:
      return '';
  }
  
  return total;
}


numBtns.forEach(numberButtons => {
  numberButtons.addEventListener("click", function(e) {
    newNumber += e.target.textContent;
    newNumber = newNumber;
    display.value = newNumber;
    console.log(newNumber)
  });  
});

opsBtns.forEach(operationalButtons => {
  operationalButtons.addEventListener("click", function(e) {
    operation = e.target.textContent;
    lastNumber = newNumber;
    newNumber = "";
    display.value = newNumber;
    console.log(operation);
  });  
});

eqlsBtn.addEventListener("click", function(e) {
  eql = e.target.textContent;
  newNumber = calculate(lastNumber, newNumber, operation);
  display.value = newNumber;
  console.log(lastNumber);
  console.log(operation);
  console.log(newNumber);
  console.log(eql);
  console.log(answer);
});