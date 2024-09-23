// Load express module
const express = require('express');

// Create an express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Listen for incoming requests on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
