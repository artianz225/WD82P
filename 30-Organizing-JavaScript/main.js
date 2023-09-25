// const myObject = {
//   property: 'value',
//   otherProperty: 77,
//   "abnoxious property": function () {
//   }
// };



// // 2. Object Constructors
// function sum (a,b){
//   return a + b;
// }

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// const pLayerOne = new Player ('steve', 'Y');
// const pLayertwo = new Player ('John', 'W');

// function Book (title, autor, pages) {
//   this.title = title;
//   this.autor = autor;
//   this.pages = pages;
// }

// const bookOne = new Book ("Harry Potter", "JK Howling", 500);
// const bookTwo = new Book ("Atomic Habits", "James Clear", 250);

// const book1 = {
//   title: "Harry Potter",
//   autor: "JK Rowling",
//   page: 500

// };const book2 = {
//   title: "Atomic Habits",
//   autor: "James Clear",
//   page: 500
// };

// // 3. Factory Functions
// function personFactory(name, marker) {
//   return {name, marker };
// }

// const playerFive = personFactory("Arthur", "A")
// console.log(playerFive);

// MMORPG

function pokemonFactory (name, playerLevel) {
  let playerHealth = playerLevel;

  const getLevel = () => playerLevel;
  const getHP = () => playerHealth;
  const getName = () => name;
  const die = () => console.log(`${name} has reach zero HP, ${name} is dead`);
  const damage = (x) => {
    playerHealth -= x;

    if (playerHealth <=0) die();
  };

  const attact = (enemy) => {
    if (playerLevel < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    } 

    if (playerLevel >= enemy.getLevel()) {
      enemy.damage(1)
      console.log(`${name} has damage ${enemy.getName()}, Oponent's current HP is ${enemy.getHP()}`);
    }
  };
  return {attact, damage, getLevel, getName, getHP};
 }

 const ashPlayer = pokemonFactory("Pikachu", 5);
 const computerPlayer = pokemonFactory("Bulbasur", 5);

 console.log(ashPlayer.getLevel());
 console.log(computerPlayer.getLevel());

ashPlayer.attact(computerPlayer);
computerPlayer.attact(ashPlayer);
computerPlayer.attact(ashPlayer);
computerPlayer.attact(ashPlayer);
computerPlayer.attact(ashPlayer);
ashPlayer.attact(computerPlayer);
ashPlayer.attact(computerPlayer);
ashPlayer.attact(computerPlayer);
ashPlayer.attact(computerPlayer);



/*
function pokemonFactory(name, level) {
  let health = level * 2;

  const getLevel = () => level;
  const getName = () => name;

  const die = () => console.log(`${name} has reached zero hp. I'm dead!`);

  const damage = (x) => {
    health -= x;

    if (health <= 0) die();
  };

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }

    if (level >= enemy.getLevel()) {
      enemy.damage(5);
      console.log(`${name} has damaged ${enemy.getName()}.`);
    }
  };

  return { attack, damage, getLevel, getName };
}

const ashPlayer = pokemonFactory("pikachu", 10);
const computerPlayer = pokemonFactory("ratata", 5);

ashPlayer.attack(computerPlayer);
computerPlayer.attack(ashPlayer);
ashPlayer.attack(computerPlayer);
*/
