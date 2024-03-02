const express = require('express');
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});