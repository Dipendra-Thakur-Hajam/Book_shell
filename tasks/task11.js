const axios = require('axios');

function getBookByISBN(isbn) {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
}

getBookByISBN('1234567890')  // Replace with a valid ISBN
  .then(response => {
    console.log('Book fetched by ISBN:', response.data.items);
  })
  .catch(error => {
    console.error('Error fetching book by ISBN:', error.message);
  });
