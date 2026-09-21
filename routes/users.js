// Step 9: A mini "app" (router) that only knows about /users routes.

const express = require('express');
const router = express.Router();

// This runs before every route in this router.
router.use((req, res, next) => {
  console.log('Users Router Time:', Date.now());
  next(); // keep going to the matching route below
});

// GET /users/
router.get('/', (req, res) => {
  res.send('Users home page');
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User profile for ID: ${userId}`);
});

module.exports = router; // so app.js can use this router
