const dsp = document.querySelector(".display");
const second = document.querySelector(".second");
const btn = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".ops");
const eql = document.querySelector(".equals");
const clr = document.querySelector(".clear");

let prevNumbers = "";
let newNumbers = "";
let operation = "";
let answer = "";

function evalaute (prevNumbers, newNumbers, operation) {
  let total;
  const prev = parseFloat(prevNumbers);
  const newN = parseFloat(newNumbers);

  switch(operation) {
    case "+":
      total = prev + newN;
      break;
    case "-":
      total = prev - newN;
      break;
    case "*":
      total = prev * newN;
      break;
    case "/":
      total = prev / newN;
      break;
    default:
      return '';
  }

  return total;
}

btn.forEach(numberButtonz => {
  numberButtonz.addEventListener("click", function(e) {
    newNumbers += e.target.textContent;
    newNumbers = newNumbers;
    dsp.value = newNumbers;
    console.log(newNumbers);
  });  
});

ops.forEach(operationalButtons => {
  operationalButtons.addEventListener("click", function(e) {
    operation = e.target.textContent;
    prevNumbers = newNumbers;
    newNumbers = "";
    dsp.value = newNumbers;
    console.log(operation);
  });  
});

eql.addEventListener("click", function (e) {
  answer = evalaute (prevNumbers, newNumbers, operation);
  dsp.value = answer;
  second.value = prevNumbers + operation + newNumbers + e.target.textContent + answer;
  console.log(answer);
});

clr.addEventListener("click", function(e) {
  newNumbers = "";
  prevNumbers = "";
  operation = "";
  answer = "";
  dsp.value = "";
});

