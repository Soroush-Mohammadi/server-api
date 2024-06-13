// Import required modules
const express = require('express');
const cors = require('cors');
const app = express();
const categories = require('./categories')

// Define a sample products array

app.use(cors())
// Define a route to get the list of products
app.get('/products', (req, res) => {
    res.json(categories);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
