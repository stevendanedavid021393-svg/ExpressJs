// Step 4: Route parameters — grabbing values straight out of the URL.

const express = require('express');
const app = express();
const port = 8080;

// A ':name' in the path becomes a variable, available in req.params.
app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params;
  res.send(`User ID: ${userId}, Book ID: ${bookId}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
