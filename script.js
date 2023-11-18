const contentGrid = document.querySelector('.content-grid');

const myLibrary = [
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = (title + ' by ' + author + ', ' + pages + ', ' + read);
};

let theHobbit = new Book('The Hobbit', 'JR Tolkien', '500 pages', 'not read yet');
let goldFinch = new Book('The Goldfinch', 'Donna Tartt', '800 pages', 'read');
let prettyHorses = new Book('All The Pretty Horses', 'Cormac McCarthy', '430 pages', 'not read yet');


const addBookToLibrary = (book) => {
    myLibrary.push(book.info);
    console.log(book.title + ' has been added to the library!');
};

addBookToLibrary(theHobbit);
addBookToLibrary(goldFinch);
addBookToLibrary(prettyHorses);



const displayBooks = () => {
    myLibrary.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.textContent = book;
        contentGrid.appendChild(bookCard);
    });
};

displayBooks();