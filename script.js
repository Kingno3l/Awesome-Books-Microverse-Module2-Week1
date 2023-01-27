class Book {
  constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
  }
  addBook() {
      let container = document.createElement('div');
      container.className = "book-container";
      container.dataset.id = this.id;
      let itemHR = document.createElement('hr');
      let buttonRemove = document.createElement('button');
      buttonRemove.className = "btn";
      buttonRemove.innerHTML = 'remove';
      buttonRemove.dataset.id = this.id;
      let itemP1 = document.createElement('li');
      // let itemP2 = document.createElement('li');
      let itemP1Text = document.createTextNode(`'${this.title}'` + ' by ' + this.author);
      // let itemP2Text = document.createTextNode(this.title);
      itemP1.appendChild(itemP1Text);
      // itemP2.appendChild(itemP2Text);
      container.appendChild(itemP1);
      // container.appendChild(itemP2);
      container.appendChild(buttonRemove);
      // container.appendChild(itemHR);
      listall.appendChild(container);
  }
  removeBook() {
      let bookContainer = document.querySelector(`div[data-id="${this.id}"]`);
      bookContainer.remove();
  }
}
let form = document.querySelector('form')
const addBook = (ev) => {
  ev.preventDefault();
  let id = Math.random() * 10000000;
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let book = new Book(id, title, author);
  book.addBook();
  //clear the form for next entry...
  form.reset();
}
const listall = document.getElementsByClassName('listall')[0];
console.log(listall);
listall.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn")){
      let bookId = e.target.dataset.id;
      let book = new Book(bookId);
      book.removeBook();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addBook);
});