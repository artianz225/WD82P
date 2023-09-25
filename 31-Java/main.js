const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("modal");
const horrorContainer = document.getElementById("horror-content");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const addBookBtn = document.getElementById("add-book-btn");
const genreSelectOption = document.getElementById("genre-select-option");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

function addNewBook(event) {
  event.preventDefault();


  if (titleInput.value === "" ||
      authorInput.value === "" || 
      pagesInput.value === "" ||
      genreSelectOption.value === "Select genres"
    ) {
    return alert("Some inputs are required");
  } else if (genreSelectOption == "Horror"){
    console.log("make a append for horror")
  } 
  
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const genres = genreSelectOption.value;

  const book = bookFactory(title, author, pages, genres);

  clearInput();
  closeModal();
  appendNewBook(book);
}

function getSelectGenres (){
  let selectedValue = document.getElementById("genre-select-option").value;
  console.log(selectedValue);

  if (selectedValue.value === "Horror") {
    return;
  }
}

function bookFactory(title, author, pages, genres) {
  return { title, author, pages, genres };
}

function clearInput() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  genreSelectOption.value = "Select genres";
}


function appendNewBook(book) {
  console.log(book);

  const article = document.createElement("article");
  article.classList.add("book");
  console.log(article);

  const div = document.createElement("div");
  div.classList.add("card-span");
  // console.log(div);

  const h2 = document.createElement("h2");
  h2.classList.add("book-title");
  h2.textContent = (book.title);

  const authorPara = document.createElement("p");
  authorPara.classList.add("book-author");
  authorPara.textContent = (book.author);

  const pagesPara = document.createElement("p");
  pagesPara.classList.add("book-pages");
  pagesPara.textContent = (book.pages + " Pages");

  div.append(h2, authorPara, pagesPara);
  horrorContainer.appendChild(div);

  article.append(div);
  horrorContainer.appendChild(article);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
addBookBtn.addEventListener("click", addNewBook);

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}