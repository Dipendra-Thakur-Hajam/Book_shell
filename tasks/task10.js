const axios = require('axios');

function getBooks(callback) {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=programming')
    .then(response => {
      callback(null, response.data.items);
    })
    .catch(error => {
      callback(error, null);
    });
}

getBooks((error, books) => {
  if (error) {
    console.error('Error fetching books:', error.message);
  } else {
    console.log('Books fetched:', books);
  }
});
