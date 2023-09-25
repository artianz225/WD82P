import './style.css';
import { dogFactory } from './factories/dogFactory';

const dog1 = dogFactory("Doggy", "Puspin");
console.log(dog1);

document.querySelector('#app').innerHTML = `
  <div>
 <p>My dogCat name is ${dog1.name} and he is a ${dog1.breed} </p> 
  </div>
`
