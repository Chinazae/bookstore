document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the search query and trim it
    const query = document.getElementById('search-query').value.trim();

    // If the query is empty, alert the user
    if (!query) {
        alert('Please enter a search term');
        return;
    }

    const booksContainer = document.getElementById('search-results');
    booksContainer.innerHTML = '<p>Loading...</p>'; // Show a loading message

    // Fetch books from the Google Books API
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            // Clear the container
            booksContainer.innerHTML = '';

            // Check if there are any books in the response
            if (!data.items || data.items.length === 0) {
                booksContainer.innerHTML = '<p>No books found. Please try another search term.</p>';
                return;
            }

            // Iterate over books and create cards
            data.items.forEach(book => {
                const image = book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg'; // Default thumbnail
                const authors = book.volumeInfo.authors?.join(', ') || 'Unknown author'; // Default author text

                const bookCard = `
                    <div class="col-md-3">
                        <div class="card">
                            <img src="${image}" class="card-img-top" alt="${book.volumeInfo.title}">
                            <div class="card-body">
                                <h5 class="card-title">${book.volumeInfo.title}</h5>
                                <p class="card-text">${authors}</p>
                                <button class="btn btn-primary" onclick="viewBookDetails('${book.id}')">View Details</button>
                            </div>
                        </div>
                    </div>`;
                booksContainer.innerHTML += bookCard;
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            booksContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        });
});

// View Book Details Function
function viewBookDetails(bookId) {
    // Fetch the book details using the book ID
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then(response => response.json())
        .then(book => {
            // Save the selected book to localStorage
            localStorage.setItem('selectedBook', JSON.stringify(book));
            // Redirect to the details page
            window.location.href = 'book-details.html';
        })
        .catch(error => {
            console.error('Error fetching book details:', error);
            alert('Failed to fetch book details. Please try again.');
        });
}
