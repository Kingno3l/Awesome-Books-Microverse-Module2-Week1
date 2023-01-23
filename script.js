//let books = [];

//add book function...
const addBook = (ev) => {
    ev.preventDefault();
    let books = [{
        title: document.getElementById('title').value,
        author: document.getElementById('author').value
    },];

    //clear the form for next entry...
    document.querySelector('form').reset();

    const listall = document.getElementsByClassName('listall')[0];
    console.log(listall);
    
    books.forEach((book) => {
        let itemHR = document.createElement('hr');
        let buttonRemove = document.createElement('button');
        buttonRemove.innerHTML = 'remove';
        let itemP1 = document.createElement('p');
        let itemP2 = document.createElement('p');

        let itemP1Text = document.createTextNode(book.author);
        let itemP2Text = document.createTextNode(book.title);

        itemP1.appendChild(itemP1Text);
        itemP2.appendChild(itemP2Text);

        listall.appendChild(itemP1);
        listall.appendChild(itemP2);
        listall.appendChild(buttonRemove);
        listall.appendChild(itemHR);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addBook);
});