// Express.js Assignment: a small products API.
//   GET  /products  -> list every product
//   POST /products   -> add a new product (send JSON in the request body)

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); // so req.body works for POST requests

// In-memory list of products (resets whenever the server restarts).
let products = [
  { id: 1, name: 'Keyboard', price: 29.99 },
  { id: 2, name: 'Mouse', price: 14.99 },
];

// GET /products - return the current list.
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products - add a new product from the request body.
app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Both "name" and "price" are required.' });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price,
  };
  products.push(newProduct);

  res.status(201).json({ message: 'Product added', product: newProduct });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
