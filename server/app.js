// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.static('../public')); // Serve static files from the public directory

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require('express');
const oracledb = require('oracledb');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function init() {
  try {
    await oracledb.createPool({
      user: 'your_username',
      password: 'your_password',
      connectionString: 'your_connection_string',
      poolAlias: 'ecommerce'
    });
    console.log('Connection Pool Created');
  } catch (err) {
    console.error('Database connection error: ', err.message);
  }
}

// app.get('/products', async (req, res) => {
//   let connection;
//   try {
//     connection = await oracledb.getConnection('ecommerce');
//     const result = await connection.execute(`SELECT * FROM products`);
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).send('Error fetching products');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// });
app.get('/products/:id', async (req, res) => {
    // Implement fetching a single product by id
    res.json({ id: req.params.id, name: "Sample Product", description: "This is a sample description.", price: 99.99 });
});

app.get('/product.html', (req, res) => {
    res.sendFile('path/to/public/product.html');
});


app.post('/order', async (req, res) => {
  let connection;
  const { productId, quantity } = req.body;
  try {
    connection = await oracledb.getConnection('ecommerce');
    await connection.execute(
      `INSERT INTO orders (product_id, quantity) VALUES (:productId, :quantity)`,
      [productId, quantity],
      { autoCommit: true }
    );
    res.send('Order placed successfully');
  } catch (err) {
    res.status(500).send('Error placing order');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  init();
});
