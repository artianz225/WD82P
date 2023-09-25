const display      = document.querySelector(".display");
const history      = document.querySelector(".history");
const clearBtn     = document.querySelector(".clear");
const equalsBtn    = document.querySelector(".equals");
const numBtns      = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator");
const clearallBtn  = document.querySelector(".clear-all");
const eraseBtn     = document.querySelector(".erase");

let prevNum = "";
let operation = "";
let currentNum = "";
let answer = "";
let spc = " | ";

function compute(prevNum, currentNum, operation) {
  let total;
  const prev = parseFloat(prevNum);
  const curr = parseFloat(currentNum);

  switch(operation) {
    case "+":
      total = prev + curr;
      break;
    case "-":
      total = prev - curr;
      break;
    case "*":
      total = prev * curr;
      break;
    case "/":
      total = prev / curr;
      break;
    default:
      return '';
  }

  return total;
}

clearBtn.addEventListener("click", function(e) {
  currentNum = "";
   prevNum = "";
   operation = "";
   display.value = "";});

eraseBtn.addEventListener("click", function(e){
  display.value = display.value.toString().slice(0, -1); 
  currentNum = display.value;
});

clearallBtn.addEventListener("click", function(e) {
  currentNum = "";
  prevNum = "";
  operation = "";
  display.value = "";
  history.value = "";
});

equalsBtn.addEventListener("click", function(e) {
  ops = e.target.textContent;
  answer = compute(prevNum, currentNum, operation);
  history.value += prevNum + operation + currentNum + ops + answer + spc;
  display.value = answer;
  // console.log(ops);
  // console.log(answer);
});


numBtns.forEach(numberButton => {
  numberButton.addEventListener("click", function(e) {
    currentNum += e.target.textContent;
    display.value = currentNum;
    // console.log(currentNum);  
  });
});

operatorBtns.forEach(operatorButton => {
  operatorButton.addEventListener("click", function(e) {
  operation = e.target.textContent; 
  prevNum = currentNum; 
  currentNum = ""; 
  display.value = currentNum;
  // console.log(operation);  
});
});