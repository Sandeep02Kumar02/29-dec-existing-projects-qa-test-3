const express = require('express');
const app = express();
const port = 3000;

// Route handler for root endpoint - returns "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// Route handler for evening endpoint - returns "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
