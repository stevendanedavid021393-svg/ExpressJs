// Step 5: Query parameters — the ?key=value part of a URL.

const express = require('express');
const app = express();
const port = 8080;

app.get('/search', (req, res) => {
  const { q, category } = req.query;
  res.send(`Search query: ${q}, Category: ${category || 'none'}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
