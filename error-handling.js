// Step 7: Centralized error handling — one place that catches errors from
// anywhere in the app and sends back a consistent response.

const express = require('express');
const app = express();
const port = 8080;

// A route that throws an error right away (synchronous error).
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// A route that fails inside async code (e.g. a delayed operation).
app.get('/async-error', (req, res, next) => {
  setTimeout(() => {
    try {
      const result = nonExistentFunction(); // this function doesn't exist
      res.send(result);
    } catch (error) {
      next(error); // hand the error to the error-handling middleware below
    }
  }, 100);
});

// Error-handling middleware MUST have 4 parameters (err, req, res, next),
// and it must be defined after every other route/middleware.
app.use((err, req, res, next) => {
  console.error(err.stack); // log the full error for debugging
  res.status(500).send('Something broke!'); // simple message for the user
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
