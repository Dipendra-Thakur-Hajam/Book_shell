const axios = require('axios');

async function registerUser(userData) {
  try {
    const response = await axios.post('https://yourapi.com/register', userData);
    console.log('User registered:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
}

const userData = { username: 'newuser', password: 'password123' };
registerUser(userData);
