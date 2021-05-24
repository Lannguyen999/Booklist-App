// Book Class
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Get element by id
const $ = document.querySelector.bind(document)
//Sửa tí hihi
const title = $('#title')
// const title = document.getElementById('title');

// const author = document.getElementById('author');
const author = $('#author')

// const isbn = document.getElementById('isbn');
const isbn = $('#isbn')

const list = document.getElementById('book-list');
const form = document.getElementById('book-form');
// Add a book
function addBookToList(book){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-sm btn-danger delete">X</a></td>
    `;
    list.appendChild(row);
}
// Remove a book
function removeBook(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
        // 1st parentElement is row
        // 2nd parentElement is the parentElement of row, which is the list
    }
}

// Pops up messages
function showAlert(message, className){
    // Create a div element and insert it before the form 
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    container.insertBefore(div,form);
    // Vanish the message in about 2 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
}
// Get book from local storage
function getBooks(){
    let books;
    if(localStorage.getItem('books') == null){
        books = [];
        //if local storage is empty then books array is empty 
    }
    else{
        books = JSON.parse(localStorage.getItem('books'));
        // get books array from local storage if it is not empty
    }
    return books;
}
// Add book to storage 
function addBookToStorage(book){
    // Get books array
    const books = getBooks();
    // Push the new book to the array
    books.push(book);
    // set to local storage
    localStorage.setItem('books', JSON.stringify(books));
}
// Remove book from storage
function removeBookFromStorage(book){
    // Get books array
    const books = getBooks();

}
// Display Books that stored in the local storage
function displayBooks(){
    // Get books array
    const books = getBooks();
    // use the for each method to add book to the list 
    books.forEach((book) => {
        addBookToList(book);
    });
}

// Clear input
function clearInput(){
    title.value = " ";
    author.value = " ";
    isbn.value = " ";
}
// Display books event handle
document.addEventListener('DOMContentLoaded', displayBooks());
// Book Add event handle
form.addEventListener('submit', (e) => {
    // Prevent from default submitting
    e.preventDefault();
    // Get form value
    titleValue = title.value;
    authorValue = author.value;
    isbnValue = isbn.value;
    // Initiate a book 
    const book = new Book(titleValue, authorValue, isbnValue);
    // Add book to list
    addBookToList(book);
    // Add book to storage
    addBookToStorage(book);
    // Clear input
    clearInput();   
    // Pop up success message
    showAlert("Book Added", 'success');
});

// Remove book event handle
list.addEventListener('click', (e) =>{
    removeBook(e.target);
});