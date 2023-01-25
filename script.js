let form = document.querySelector('form')
const addBook = (ev) => {
    ev.preventDefault();
    let books = [{
        id: Math.random() * 10000000,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value
    },];
    //clear the form for next entry...
    form.reset();
    books.forEach((book) => {
        let container = document.createElement('div');
        container.className = "book-container";
        container.dataset.id = book.id;
        let itemHR = document.createElement('hr');
        let buttonRemove = document.createElement('button');
        buttonRemove.className = "btn";
        buttonRemove.innerHTML = 'remove';
        buttonRemove.dataset.id = book.id;
        let itemP1 = document.createElement('p');
        let itemP2 = document.createElement('p');
        let itemP1Text = document.createTextNode(book.title);
        let itemP2Text = document.createTextNode(book.author);

        itemP2.appendChild(itemP2Text);
        itemP1.appendChild(itemP1Text);
        container.appendChild(itemP1);
        container.appendChild(itemP2);
        container.appendChild(buttonRemove);
        container.appendChild(itemHR);
        listall.appendChild(container);
    });
}
const listall = document.getElementsByClassName('listall')[0];
console.log(listall);
listall.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")){
        let bookId = e.target.dataset.id;
        let bookContainer = document.querySelector(`div[data-id="${bookId}"]`);
        bookContainer.remove();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addBook);
});