const form = document.querySelector('form');
const addBook = (ev) => {
  ev.preventDefault();
  const books = [{
    id: Math.random() * 10000000,
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  }];
    // clear the form for next entry...
  form.reset();
  books.forEach((book) => {
    const container = document.createElement('div');
    container.className = 'book-container';
    container.dataset.id = book.id;
    const itemHR = document.createElement('hr');
    const buttonRemove = document.createElement('button');
    buttonRemove.className = 'btn';
    buttonRemove.innerHTML = 'remove';
    buttonRemove.dataset.id = book.id;
    const itemP1 = document.createElement('p');
    const itemP2 = document.createElement('p');
    const itemP1Text = document.createTextNode(book.author);
    const itemP2Text = document.createTextNode(book.title);
    itemP1.appendChild(itemP1Text);
    itemP2.appendChild(itemP2Text);
    container.appendChild(itemP1);
    container.appendChild(itemP2);
    container.appendChild(buttonRemove);
    container.appendChild(itemHR);

    let listall;
    listall.appendChild(container);
  });
};
const listall = document.getElementsByClassName('listall')[0];
console.log(listall);
listall.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const bookId = e.target.dataset.id;
    const bookContainer = document.querySelector(`div[data-id="${bookId}"]`);
    bookContainer.remove();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addBook);
});