const axios = require('axios');

async function addBookReview(bookId, reviewData) {
  try {
    const response = await axios.post(`https://yourapi.com/reviews/${bookId}`, reviewData);
    console.log('Review added/modified:', response.data);
  } catch (error) {
    console.error('Error adding/modifying review:', error.message);
  }
}

const reviewData = { rating: 5, comment: 'Great book!' };
addBookReview('bookId123', reviewData); // Replace with an actual book ID
