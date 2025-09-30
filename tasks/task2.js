const axios = require('axios');

async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    console.log('Book fetched by ISBN:', response.data.items);
  } catch (error) {
    console.error('Error fetching book by ISBN:', error.message);
  }
}

getBookByISBN('1234567890'); // Replace with an actual ISBN
