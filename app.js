const myLibrary = JSON.parse(localStorage.getItem("books")) || [];
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
  localStorage.setItem("books", JSON.stringify(myLibrary));
  bookForm.reset();
}

function showBook() {
  tableBody.innerHTML = myLibrary
    .map((book, index) => {
      let i = 0;
      return `<tr data-index=${index}>
          <td data-column='column${i}'>${book.title}</td>
          <td data-column='column${i + 1}'>${book.author}</td>
          <td data-column='column${i + 2}'>${book.pages}</td>
          <td data-column='column${i + 3}'>${book.status}</td>
          <td data-column='column${
            i + 4
          }'><button class='btn btn-status'>STATUS</button></td>
          <td data-column='column${
            i + 5
          }'><button class='btn btn-remove'>REMOVE</button></td>
        </tr>`;
    })
    .join("");
}

function removeBook(e) {
  if (!e.target.matches(".btn-remove")) return;
  const tableRow = e.target.parentNode.parentNode.dataset.index;
  myLibrary.splice(tableRow, 1);
  localStorage.setItem("books", JSON.stringify(myLibrary));
  showBook();
}

function changeStatus(e) {
  if (!e.target.matches(".btn-status")) return;
  const tableRow = e.target.parentNode.parentNode.dataset.index;
  myLibrary[tableRow].status === "read"
    ? (myLibrary[tableRow].status = "not read yet")
    : (myLibrary[tableRow].status = "read");
  localStorage.setItem("books", JSON.stringify(myLibrary));
  showBook();
}
// addBookToLibrary(hobbit);
// addBookToLibrary(atomicHabit);
// addBookToLibrary(theLordOfTheRings);

bookForm.addEventListener("submit", addBookToLibrary);
tableBody.addEventListener("click", removeBook);
tableBody.addEventListener("click", changeStatus);
showBook();
console.log(myLibrary);
