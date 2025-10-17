const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

// GET /products - Return all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products - Add a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
