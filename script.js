let books = [];

//add book function...
const addBook = (ev) => {
    ev.preventDefault();
    let book = {
        title: document.getElementById('title').ariaValueMax,
        author: document.getElementById('author').value
    }

    books.push(book);

    //clear the form for next entry...
    document.querySelector('form').reset();

    
}