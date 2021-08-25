const myLibrary = [];
const tableBody = document.querySelector(".table-body");

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  }
}

let hobbit = new Book("Hobbit", "Raj Shringi", "200", "read");
let atomicHabit = new Book(
  "atomic habits",
  "Raj Shringi",
  "250",
  "not read yet"
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(hobbit);
addBookToLibrary(atomicHabit);
