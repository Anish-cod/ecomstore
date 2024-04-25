

// document.addEventListener('DOMContentLoaded', function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = parseInt(urlParams.get('id'), 10);  // Ensure the id is an integer
//     fetchProductDetails(productId);
// });

// function fetchProductDetails(productId) {
//     const product = products.find(p => p.id === productId);
//     const detailElement = document.getElementById('productDetail');
//     if (product) {
//         detailElement.innerHTML = `<h1>${product.name}</h1><p>${product.description}</p><p>Price: $${product.price}</p><button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button><img src="${product.imageUrl}" alt="${product.name}" style="width:100%;height:auto;">`;
//     } else {
//         detailElement.innerHTML = '<p>Product not found.</p>';
//     }
// }

// function addToCart(id, name, price) {
//     alert(`${name} added to cart.`);
// }
