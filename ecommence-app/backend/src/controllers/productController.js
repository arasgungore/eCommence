const axios = require('axios');

exports.getProducts = async (req, res) => {
  try {
    // Fetch data from the API (Replace with your API endpoint)
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=example&appid=YOUR_API_KEY');
    
    // Process and send relevant data to the frontend
    const products = response.data; // Modify this based on your API response
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
