// const express = require('express');
// const mysql = require('mysql2');

// const app = express();
// const PORT = 3000; // Server running port

// // Set up a connection pool to MySQL database
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root', // replace with your database username
//   password: 'jisquz-hatdod-1gyqVu', // replace with your database password
//   database: 'ecomstore', // replace with your database name
//   port: 3306
// });

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Define a route to fetch data
// app.get('/products', (req, res) => {
//   pool.query('SELECT * FROM products', (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });

// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   // Simulate a database check
//   const user = { email: 'test@example.com', password_hash: await bcrypt.hash('password', 10) }; // Simulated user

//   if (email === user.email && await bcrypt.compare(password, user.password_hash)) {
//       res.json({ message: 'Login successful', userId: 1 });
//   } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
