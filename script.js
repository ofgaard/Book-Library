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
    myLibrary.push(book);
    console.log(book.title + ' has been added to the library!');
};

addBookToLibrary(theHobbit);
addBookToLibrary(goldFinch);
addBookToLibrary(prettyHorses);



const displayBooks = () => {
    contentGrid.innerHTML = '';
    myLibrary.forEach((book, index) => {
        let bookCard = document.createElement('div');
        let cardText = document.createElement('p');
        let icons = document.createElement('div');
        icons.classList.add('book-icons');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
        cardText.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`;
        bookCard.appendChild(cardText);
        icons.appendChild(deleteButton);
        bookCard.appendChild(icons);
        contentGrid.appendChild(bookCard);
    });
};


displayBooks();


const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.close')
const submit = document.querySelector('.submit')

addButton.addEventListener("click", function() {
   document.querySelector('.add-form').style.display = "flex";
   document.querySelector('.add-form').style.flexDirection = "column";
})

closeButton.addEventListener("click", function() {
    document.querySelector('.add-form').style.display = "none";
})

submit.addEventListener("click", function() {
    let inputTitle = document.getElementsByName('title')[0].value;
    let inputAuthor = document.getElementsByName('author')[0].value;
    let inputPages = document.getElementsByClassName('pages')[0].value; 
    let inputRead = document.getElementsByName('read')[0].value;
    let allInputs = document.querySelectorAll('input');
    if (inputTitle === '' || inputAuthor === '' || inputPages === '' || inputRead === '') {
        alert('Please fill in all fields before submitting.');
        return; 
    }
    let newBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);
    addBookToLibrary(newBook);
    allInputs.forEach(singleInput => singleInput.value = '');
    displayBooks();

    document.querySelector('.add-form').style.display = "none";
})
