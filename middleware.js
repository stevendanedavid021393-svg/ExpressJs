// Step 6: Middleware — code that runs on every request before it reaches
// a route. Here we use Express's built-in middleware for JSON, form data,
// and serving static files.

const express = require('express');
const app = express();
const port = 8080;

// Reads JSON in the request body (e.g. from a Postman POST request).
app.use(express.json());

// Reads form data sent from an HTML form (application/x-www-form-urlencoded).
app.use(express.urlencoded({ extended: true }));

// Serves any file inside the "public" folder directly (e.g. /hello.txt).
app.use(express.static('public'));

// Accepts JSON data and echoes it back.
app.post('/api/users', (req, res) => {
  console.log(req.body); // the parsed JSON, thanks to express.json() above
  res.status(201).json({
    message: 'User created',
    user: req.body,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
