const axios = require('axios');
const Product = require('../models/Product');

const API_ENDPOINT = 'https://api.example.com/products'; // Replace with your API endpoint

exports.getProducts = async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await axios.get(API_ENDPOINT);
    
    // Process and send relevant data to the frontend
    const products = response.data; // Modify this based on your API response
    
    // Save products to the database (Assuming MongoDB for this example)
    await Product.insertMany(products);

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
