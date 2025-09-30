const axios = require('axios');

async function getBooks() {
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=programming');
    console.log('Books fetched:', response.data.items);
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

getBooks();
