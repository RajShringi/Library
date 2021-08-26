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
  "Atomic habits",
  "Raj Shringi",
  "250",
  "not read yet"
);
let theLordOfTheRings = new Book(
  "The lord of the rings",
  "Raj Shringi",
  "550",
  "not read yet"
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showBook() {
  tableBody.innerHTML += myLibrary
    .map((book) => {
      return `<tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${book.status}</td>
        </tr>`;
    })
    .join("");
}

addBookToLibrary(hobbit);
addBookToLibrary(atomicHabit);
addBookToLibrary(theLordOfTheRings);

showBook();
