const myLibrary = [
    'Europe',
    'The Son',
    'South America',
];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return (title + ' by ' + author + ', ' + pages + ', ' + read)
    };
};

let theHobbit = new book('The Hobbit', 'JR Tolkien', '500 pages', 'not read yet');

const addBookToLibrary = (bookTitle) => {
    myLibrary.push(bookTitle.title);
    console.log(bookTitle.title + ' has been added to the library!');
};

// console.log(addBookToLibrary(theHobbit));



// console.log(theHobbit.info());


// const displayBooks = () => {
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log(myLibrary[i]);
//     }
// };

// console.log(displayBooks());

const displayBooks = () => {
    myLibrary.forEach(book => console.log(book));
};

console.log(displayBooks());
