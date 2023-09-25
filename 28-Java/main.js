/* 8
8 data types
  Primitive
  1 String
  2 Boolean
  3 Number
  4 Null
  5 Undifine
***/

const user = {
  name: "Arthur",
  age: 29,
  isAdmin: true
};

// get values in an object / read data
user.name;
user.age;
user.isAdmin;
user["likes birds"];

//remove value in an object
delete user.age;


// add values in an object
user.job = "Software Engeneer";

//change value in an object
user.age = 25

console.log(user);

function makeUser(name, age) {
  return { name, age }
}

let user2 = makeUser("john", 30);
let user3 = makeUser("Arthur", 29)

console.log(user2);
console.log(user3);

let obj = {
  return: 3,
  0: "test"
}

// loop in an object
for (let key in user) {
  console.log(user[key]);
}

/*
let codes = {
  "+49": "germany",
  "+41": "Switzerland",
  "+63": "phil",
  "+1": "Usa"
}

for(let code in codes) {
  console.log(+code);
}
***/

const users = {
  name: "John"
}
users.surename = "Smith";
users.name = "Pete";
delete users.name;
console.log(users);

function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
  return true
}

let schedule = {};
schedule.time = "8:30";


console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumAllSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

// sum = salaries.John + salaries.Ann + salaries.Pete;

// console.log(sum);



