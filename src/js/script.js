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
  render();
  document.getElementsByClassName("input")[0].style.display = "none"; 
  alert(newBook.title + " was added successfully !!!");
}

function render(){
  var bookList = "";
  myLibrary.forEach((book,index) => { bookList += `<div class='bookInfo'>
                                                 <div class='book' data-index='${index}'>
                                                     <h2>Title: ${book.title} </h2>
                                                     <h5>Author: ${book.author} </h5>
                                                     <h5>Number of pages: ${book.numPages} </h5>
                                                     <h5>Current state: ${book.read} </h5>
                                                     <select name="read" class="book-read" onChange="changeRead(${index})">
                                                      <option value="none" selected disable hidden>Change read status</option>
                                                      <option value="Read">Read</option>
                                                      <option value="Currently reading">Currently reading</option>
                                                      <option value="Not read">Not read</option>
                                                     </select>
                                                    <button onClick=removeBook(${index}) class="delete-book-btn">Delete</button>
                                                 </div>
                                                </div>`;}); 
  document.getElementById("library").innerHTML = bookList;
}

function newBook(){
  document.getElementsByClassName("input")[0].style.display = "block";
}

function removeBook(bookIndex){
  myLibrary.splice(bookIndex,1);
  render();
}