const listall = document.querySelector('.listall')
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    static displayBooks() {
        const books = Book.getBooks();
        books.forEach((book) => Book.addBookToList(book));
    }

    static addBookToList(book) {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>"${book.title}"  by  ${book.author}</td>
        <td class="d-none">${book.author}</td>
        <td><a href="#" class="btn btn-sm btn-danger delete float-end">Remove</a></td>
        `;
        listall.appendChild(row);
    }

      static deleteBook(el) {
        if (el.classList.contains('btn')) {
          el.parentElement.parentElement.remove();
        }
      }

      static clearField() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
      }

      static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
          books = [];
        } else {
          books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
      }

      static addBook(book) {
        const books = Book.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
      }

      static removeBook(author) {
        const books = Book.getBooks();
        let index = 0;
        books.filter((book) => {
          if (book.author !== author) { index = +1; }
          return books;
        });
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
      }
}

let form = document.querySelector('form')
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let id = Math.random() * 10000000;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let book = new Book(id, title, author);
    Book.addBookToList(book);
  Book.addBook(book);
  Book.clearField();
})

document.addEventListener('DOMContentLoaded', Book.displayBooks);
document.querySelector('.listall').addEventListener('click', (e) => {
    Book.removeBook(e.target.parentElement.previousElementSibling.innerHTML);
    Book.deleteBook(e.target);
  });