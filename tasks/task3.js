const axios = require('axios');

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`);
    console.log(`Books by ${author}:`, response.data.items);
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
  }
}

getBooksByAuthor('J.K. Rowling'); // Replace with any author name
