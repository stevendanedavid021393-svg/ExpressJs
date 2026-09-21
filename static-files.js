// Step 8: Serving static files (images, CSS, JS) from a "public" folder.

const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve files from "public" directly (e.g. /hello.txt, /css/style.css).
app.use(express.static('public'));

// Serve the same files again, but under a "/static" prefix.
app.use('/static', express.static('public'));

// Serve the same files again, using an absolute path (the safest option).
app.use('/assets', express.static(path.join(__dirname, 'public')));

// A page that uses the static image, CSS, and JS from above.
app.get('/', (req, res) => {
  res.send(`
    <h1>Static Files Example</h1>
    <img src="/images/logo.png" alt="Logo">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js"></script>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
