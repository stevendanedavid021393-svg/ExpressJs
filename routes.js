// Step 3: Different routes for different URLs and HTTP methods.

const express = require('express');
const app = express();
const port = 8080;

// GET request to the homepage.
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// POST request to the homepage.
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// GET request to '/about'.
app.get('/about', (req, res) => {
  res.send('About page');
});

// Anything else (any method, any URL not defined above) → 404 Not Found.
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
