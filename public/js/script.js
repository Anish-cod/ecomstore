// document.addEventListener('DOMContentLoaded', function() {
//     fetchProducts();
// });

// let cart = [];

// function fetchProducts() {
//     // This should be replaced by a fetch to your back end in a real application
//     const products = [
//         { id: 1, name: 'Laptop', price: 999.99 },
//         { id: 2, name: 'Smartphone', price: 499.99 },
//         { id: 3, name: 'Tablet', price: 299.99 }
//     ];

//     const productList = document.getElementById('productList');
//     products.forEach(product => {
//         const prodElement = document.createElement('div');
//         prodElement.className = 'product';
//         prodElement.innerHTML = `<span>${product.name} - $${product.price}</span> <button class="button" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>`;
//         productList.appendChild(prodElement);
//     });
// }

// function addToCart(id, name, price) {
//     const cartItem = cart.find(item => item.id === id);
//     if (cartItem) {
//         cartItem.quantity++;
//     } else {
//         cart.push({ id, name, price, quantity: 1 });
//     }
//     updateCart();
// }

// function updateCart() {
//     const cartItems = document.getElementById('cartItems');
//     cartItems.innerHTML = '';
//     let total = 0;
//     cart.forEach(item => {
//         total += item.price * item.quantity;
//         const itemElement = document.createElement('div');
//         itemElement.className = 'cart-item';
//         itemElement.innerHTML = `<span>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</span>`;
//         cartItems.appendChild(itemElement);
//     });
//     document.getElementById('totalPrice').textContent = total.toFixed(2);
// }

// function placeOrder() {
//     alert('Order placed!');
//     cart = [];
//     updateCart();
// }
document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});

let cart = [];

function fetchProducts() {
    // Fetch to backend to get products
    fetch('/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('productList');
        products.forEach(product => {
            const prodElement = document.createElement('div');
            prodElement.className = 'product';
            prodElement.innerHTML = `<span onclick="openProduct(${product.id})">${product.name} - $${product.price}</span> <button class="button" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>`;
            productList.appendChild(prodElement);
        });
    });
}

function openProduct(productId) {
    // Open a new HTML page for product details
    window.location.href = `/product.html?id=${productId}`;
}

function addToCart(id, name, price) {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    alert(`${name} added to cart.`);
}

function updateCart() {
    // This function can be expanded or modified as needed
}

function placeOrder() {
    alert('Order placed!');
    cart = [];
}


