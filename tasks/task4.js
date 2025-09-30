const axios = require('axios');

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    console.log(`Books with title "${title}":`, response.data.items);
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
  }
}

getBooksByTitle('Harry Potter'); // Replace with any book title
