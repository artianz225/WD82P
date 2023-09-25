const container = document.querySelector("#container");
container.style.textAlign = "center";
container.style.backgroundColor = "lightgreen";
container.style.padding = "2px";

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is a text Content";

// container.appendChild(content);

const p = document.createElement("p");
//content.classList.add("Red");
p.textContent = "Hey I'm Red";
p.style.color = "red";
container.appendChild(p);
console.log(p)

const h3 = document.createElement("h3");
// content.classList.add("Red");
h3.textContent = "Hey I'm Blue";
h3.style.color = "blue";
container.appendChild(h3);
console.log(h3)

// const div2 = document.createElement("div");
// const div2_container = document.getElementById("container");
// div2.setAttribute("id","div2");
// div2.style.border = "1px solid black"
// div2.style.backgroundColor = "pink"
// div2_container.appendChild(div2);

const div = document.createElement("div");
// div.setAttribute("id","div2"); // creating id inside of elements
div.classList.add("div2") // creating class inside of elements
div.style.border = "1px solid black" // creating style
div.style.backgroundColor = "pink" // creating style
div.style.textAlign = "center"
container.appendChild(div);
console.log(div);
console.log(container);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"; // creating text contents 
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

















// const btn = document.querySelector('#btn');
// btn.onClick = function() {
//   alert("Hello, World!");
// }

const btn = document.getElementById('btn');
btn.addEventListener("click", changeWord);
// alert("Hello, World!");

// function alertFunction () {
//   alert("Hello, World")
function changeWord () {
  if (btn.textContent === "Clicked") {
    btn.textContent = "Click me!";
    btn.style.color = "red";
    btn.style.fontSize = "24px";
    btn.style.backgroundColor = "blue";
    btn.style.borderRadius = "5px";
    btn.style.borderColor = "red";
    btn.style.position = "fixed";
  } else {
    btn.textContent = "Clicked";
    btn.style.color = "blue";
    btn.style.fontSize = "24px";
    btn.style.backgroundColor = "red";
    btn.style.borderRadius = "5px";
    btn.style.borderColor = "blue";
    btn.style.position = "relative";
  }
 // btn.textContent = "Clicked!";
}











// const display = document.querySelector(".display");
// const controls = document.querySelector(".controls");

// Create nodes in the DOM
// const div = document.createElement("div");
// container.appendChild(div);

//Append element in the DOM or another node
// div.classList.add("red-box");

//Remove elements from the DOM or another node
// container.removeChild(div);

// container.style.height = "100px" 
// container.style.width = "100px" 

// container.style.cssText = "background-color: red;";

// container.setAttribute."style", "background: red";


// const div2 = document.createElement("div");
// div2.style.backgroundColor = "red";
// div2.style.width = "100px";
// div2.style.height = "100px";

// div2.style.cssText = 'height: 100px'; 'width: 100px'; 'background-color: red';

// div2.textContent = "Hello Word!";
