/*
function DogConstructor (breed, color) {
  this.breed = breed;
  this.color = color;
  this.bark = function () {
    console.log("aw aw aw aw");
  }
}

function dogFactory (breed, color) {
  const bark = () => console.log(" aw aw aw aw ");

  return {breed, color, bark};
}

class Dog {
  constructor (breed, color) {
    this.breed = breed;
    this.color = color;
  }

  get breed() {
    return this._breed;
  }

  set breed(value) {
    this._breed = value;
  }

  bark () {
  console.log("aw aw aw aw") 
  }
}

const dog1 = new Dog("Golden Puspin", "Brown");
dog1.breed = "Rottweiler";
dog1.color = "red"
console.log(dog1.breed);
console.log(dog1.color);

*/

/*
function calculator (){
  const add = (a,b) => a+b;
  const sub = (a,b) => a-b;
  const mul = (a,b) => a*b;
  const div = (a,b) => a/b;

  return {
    add,
    sub,
    mul,
    div
  }
}

const myCalculator  = calculator();
console.log(myCalculator.add(1,2));
console.log(myCalculator.sub(1,2));
console.log(myCalculator.mul(1,2));
console.log(myCalculator.div(1,2));

const world = (() => {

})();
*/