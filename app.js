// Step 9 (final): The main app, built from smaller router files.
// This replaces the very first "Hello World" version of app.js from Step 2 —
// the same file, evolved as the tutorial progressed.

const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
const port = 8080;

// Anything starting with /users goes to usersRouter.
app.use('/users', usersRouter);
// Anything starting with /products goes to productsRouter.
app.use('/products', productsRouter);

// The main homepage.
app.get('/', (req, res) => {
  res.send('Main application home page');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
