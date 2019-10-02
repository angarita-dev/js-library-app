let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let numPages = document.querySelector("#numPages").value;
  let read = document.querySelector("#read").value;

  let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  alert(newBook.title + " was added successfully !!!");
} 