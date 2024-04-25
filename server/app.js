const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jisquz-hatdod-1gyqVu',
    database: 'ecomstore',
    port: 3306
});

app.use(express.json());
app.use(cors());

app.get('/products', (req, res) => {
    pool.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/cart', async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM cart');
        res.json(rows);
    } catch (err) {
        res.status(500).send({ error: 'Error fetching cart items' });
    }
});

app.post('/cart', async (req, res) => {
    console.log("Received request:", req.body);
    const { productId, quantity } = req.body;
    try {
        const [existingCart] = await pool.promise().query('SELECT * FROM cart WHERE product_id = ?', [productId]);
        if (existingCart.length > 0) {
            const newQuantity = existingCart[0].quantity + quantity;
            await pool.promise().query('UPDATE cart SET quantity = ? WHERE product_id = ?', [newQuantity, productId]);
            res.status(200).send({ message: 'Cart quantity updated' });
        } else {
            await pool.promise().query('INSERT INTO cart (product_id, quantity) VALUES (?, ?)', [productId, quantity]);
            res.status(201).send({ message: 'Item added to cart' });
        }
    } catch (err) {
        res.status(500).send({ error: 'Error updating cart' });
    }
});

// Remove an item from the cart
app.delete('/cart/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
      await pool.promise().query('DELETE FROM cart WHERE product_id = ?', [productId]);
      res.status(200).send({ message: 'Item removed from cart' });
  } catch (err) {
      res.status(500).send({ error: 'Error removing item from cart' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
