const axios = require('axios');

async function loginUser(credentials) {
  try {
    const response = await axios.post('https://yourapi.com/login', credentials);
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
}

const credentials = { username: 'newuser', password: 'password123' };
loginUser(credentials);
