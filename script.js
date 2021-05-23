// Book Class
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Get id
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
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

// Store books

// Clear input
function clearInput(){
    title.value = " ";
    author.value = " ";
    isbn.value = " ";
}

// Event Handle
form.addEventListener('submit', (e) => {
    // Prevent from default submitting
    e.preventDefault();
    // Get form value
    titleValue = title.value;
    authorValue = author.value;
    isbnValue = isbn.value;
    // Initiate a book 
    const book = new Book(titleValue, authorValue, isbnValue);
    // Add books
    addBookToList(book);
    // Clear input
    clearInput();

});

// Remove book event
list.addEventListener('click', (e) =>{
    removeBook(e.target);
});