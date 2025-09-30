const axios = require('axios');

async function getBookRatings(isbn) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    if (response.data.items && response.data.items[0].volumeInfo.ratingsCount) {
      console.log('Book ratings:', response.data.items[0].volumeInfo.ratingsCount);
    } else {
      console.log('No ratings available for this book.');
    }
  } catch (error) {
    console.error('Error fetching book ratings:', error.message);
  }
}

getBookRatings('1234567890'); // Replace with an actual ISBN
