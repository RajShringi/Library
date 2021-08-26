const myLibrary = [];
const tableBody = document.querySelector(".table-body");
const bookForm = document.querySelector(".add-book-form");

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

// function addBookToLibrary(book) {
//   myLibrary.push(book);
// }

function addBookToLibrary(e) {
  e.preventDefault();
  const title = bookForm.querySelector("#title").value;
  const author = bookForm.querySelector("#author").value;
  const pages = bookForm.querySelector("#pages").value;
  const status = bookForm.querySelector("#status").value;
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  console.log(myLibrary);
  showBook();
  bookForm.reset();
}

function showBook() {
  tableBody.innerHTML = myLibrary
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

// addBookToLibrary(hobbit);
// addBookToLibrary(atomicHabit);
// addBookToLibrary(theLordOfTheRings);

bookForm.addEventListener("submit", addBookToLibrary);
console.log(myLibrary);
