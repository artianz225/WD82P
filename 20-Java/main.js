//let fruits = ["Apple", "Banana", "Orange", "Grapes", "Stawberry"];
// console.log(fruits[4]);

let cars = ["Toyota", "Honda", "Mitsubishi", "Ferrari", "BMW"];
// console.log(cars[4]);

const pruts = new Array ("Apol", "Banana", "Orange", "Grapes", "Stawberry");
// pruts[0] = "Apples"; // if you want to correct the value of the specific array list
// console.log(pruts);
// pruts.pop(); // remove the last value of array
// pruts.shift(); // remove the 1st value of array
// pruts.splice(3,1); // remove spicific
// pruts.push("Mango"); // adding items form the array
// pruts.splice(3,1, "Arthur");

const vegetables = ["Tomato", "Potato", "Onion", "Cucumber"];

const meats = ["Chicken", "Pork", "Beef", "lamb"];

const ages = [32, 33, 16, 40];

// const foods = fruits.concat(vegetables, meats, ages); // Concat Method Add more list in array
// console.log(foods);

// console.log(pruts);

// let size = pruts.length;
// console.log(size);

const fruts = ["Apple", "Banana", "Orange"];

for (let counter = 0; counter < fruts.length; counter++) {
  console.log(fruts[counter]);
// initialization; CSSConditionRule; iteration
}

//fruts.forEach(function(fruts) {
//  console.log(fruts);
//});


fruts.forEach(function(fruts) {
  console.log(fruts)
});


fruts.forEach((fruts) => console.log(fruts));

for (let frut of fruts) {
  console.log(fruts);
}



const attemps = 3;

for (let counter = 0; counter < 3; counter++) {
  console.log(attemps);
}