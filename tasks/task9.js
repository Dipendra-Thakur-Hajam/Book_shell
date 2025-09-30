const axios = require('axios');

async function deleteBookReview(bookId) {
  try {
    const response = await axios.delete(`https://yourapi.com/reviews/${bookId}`);
    console.log('Review deleted:', response.data);
  } catch (error) {
    console.error('Error deleting review:', error.message);
  }
}

deleteBookReview('bookId123'); // Replace with an actual book ID
