

// Array of Featured Books
const featuredBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://m.media-amazon.com/images/I/81xXAy7rHYL._AC_UY327_FMwebp_QL65_.jpg",
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

// Dynamically Add Featured Books
function displayFeaturedBooks() {
    // Select the container where the books will be displayed
    const booksContainer = document.getElementById("books-container");

    // Loop through each book in the array
    featuredBooks.forEach((book) => {
        // Create a book card div
        const bookCard = document.createElement("div");
        bookCard.className = "col-md-3"; // Bootstrap grid class

        // Add the book content (image, title, author)
        bookCard.innerHTML = `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}" class="img-fluid rounded">
                <div class="p-3">
                    <h4 class="fw-bold">${book.title}</h4>
                    <p class="text-muted">by ${book.author}</p>
                </div>
            </div>
        `;

        // Append the book card to the container
        booksContainer.appendChild(bookCard);
    });
}

// Call the function to display books on page load
displayFeaturedBooks();
