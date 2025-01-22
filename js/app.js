// Array of Featured Books
const featuredBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "great.jpeg",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://m.media-amazon.com/images/I/81jT-7+eVZL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://m.media-amazon.com/images/I/81B4Z4HpBLL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "https://m.media-amazon.com/images/I/91QxZDBBXRL._AC_UY327_FMwebp_QL65_.jpg",
    },
];

// Get the books container
const booksContainer = document.getElementById('books-container');

// Dynamically render featured books
featuredBooks.forEach((book) => {
    const bookCard = `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text"><strong>Author:</strong> ${book.author}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>`;
    booksContainer.innerHTML += bookCard;
});
