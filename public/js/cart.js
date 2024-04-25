// function addToCart(productId, productName, productPrice) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let productIndex = cart.findIndex(item => item.id === productId);

//     if (productIndex !== -1) {
//         cart[productIndex].quantity += 1; // Increment quantity if item exists
//     } else {
//         cart.push({
//             id: productId,
//             name: productName,
//             price: productPrice,
//             quantity: 1
//         });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${productName} added to cart.`);
// }

// function displayCart() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-items');

//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//     } else {
//         cartContainer.innerHTML = cart.map(item => `
//             <div class="cart-item">
//                 <h4>${item.name}</h4>
//                 <p>Price: $${item.price}</p>
//                 <p>Quantity: ${item.quantity}</p>
//                 <button onclick="removeFromCart(${item.id})">Remove</button>
//             </div>
//         `).join('');
//     }
// }

// function removeFromCart(productId) {
//     let cart = JSON.parse(localStorage.getItem('cart'));
//     cart = cart.filter(item => item.id !== productId);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCart();
// }

// function clearCart() {
//     localStorage.removeItem('cart');
//     displayCart();
// }
