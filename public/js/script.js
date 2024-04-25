// document.addEventListener('DOMContentLoaded', function() {
//     fetchProducts();
//     setupEventHandlers();
// });

// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// function fetchProducts() {
//     // Fetch to backend to get products
//     fetch('/api/products')  // Ensure the URL matches the Express route
//     .then(response => response.json())
//     .then(products => {
//         const productList = document.getElementById('productList');
//         productList.innerHTML = '';  // Clear the list before adding new elements
//         products.forEach(product => {
//             const prodElement = document.createElement('div');
//             prodElement.className = 'product';
//             prodElement.innerHTML = `
//                 <span onclick="openProduct(${product.id})">${product.name} - $${product.price}</span>
//                 <button class="button" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
//             `;
//             productList.appendChild(prodElement);
//         });
//     })
//     .catch(error => console.error('Error fetching products:', error));
// }

// function setupEventHandlers() {
//     const loginForm = document.getElementById('form-login');
//     const signupForm = document.getElementById('form-signup');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const email = document.getElementById('login-email').value;
//         const password = document.getElementById('login-password').value;
//         // Replace with your API endpoint
//         fetch('/api/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         })
//         .then(response => {
//             if (!response.ok) throw new Error('Login failed');
//             return response.json();
//         })
//         .then(data => {
//             localStorage.setItem('token', data.token);  // Save the token or user info as needed
//             alert('Login successful!');
//             window.location.href = '/profile.html'; // Redirect to profile or other page
//         })
//         .catch(error => alert('Error logging in: ' + error.message));
//     });

//     signupForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         // Gather all input values...
//         fetch('/api/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             // Convert form data to JSON...
//         })
//         .then(/* handle response */)
//         .catch(/* handle error */);
//     });
// }

// function addToCart(id, name, price) {
//     // Cart operations...
//     updateCartDisplay();
// }

// function updateCartDisplay() {
//     // Update cart display...
//     localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
// }

// function placeOrder() {
//     // Place order...
//     cart = [];
//     updateCartDisplay();
// }

// function openProduct(productId) {
//     // Open product details page...
// }
