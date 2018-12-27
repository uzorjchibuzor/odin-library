class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read
      }`;
    };
  }
}

let myLibrary = [
  
];

let table = document.querySelector(".contents"),
    title = document.querySelector("#title"),
    author = document.querySelector("#author-name"),
    numberOfPages = document.querySelector("#pages"),
    read = document.querySelector("#read");

const addToLibrary = () => {

  book = new Book(title.value, author.value, numberOfPages.value, read.value);
  myLibrary.push(book);
  table.innerHTML = '';
  let form = document.getElementById("myForm"); 
        function handleForm(event) { 
          event.preventDefault(); 
        } 
        
        form.addEventListener('submit', handleForm)
  render(myLibrary)
};

function render(books) {
  books.forEach(book => {
    table.innerHTML += `
  <tr data-book="${books.indexOf(book)}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read ? "Yes" : "No"}</td>
    <td><button onclick="change(${books.indexOf(book)})"> Make
    ${book.read ? "Unread" : "Read"}
    </button></td>
    <td><button onclick="removeBook(${books.indexOf(book)})">Remove Book</button></td>
    
  </tr>
`;
  });
}

const change = (index) => {
 (myLibrary[index].read = !myLibrary[index].read);
 table.innerHTML = '';
 render(myLibrary);
}

const removeBook = (index) => {
  myLibrary.splice(index, 1);
  table.innerHTML = '';
  render(myLibrary);
}

render(myLibrary);
