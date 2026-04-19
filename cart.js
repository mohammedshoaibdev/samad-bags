
// ===== Cart Management =====
// This file handles cart functionality across the website

// Get cart from localStorage or initialize empty
let cart = JSON.parse(localStorage.getItem('samadBagsCart')) || [];

// Format price in INR
function formatPrice(amount) {
    return '₹' + (amount / 100).toLocaleString('en-IN');
}

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('samadBagsCart', JSON.stringify(cart));
    updateCartCount();
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showToast(`${product.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

// Update item quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
        }
    }
}

// Clear entire cart
function clearCart() {
    cart = [];
    saveCart();
}

// Get cart total
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// ===== Toast Notification =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast?.querySelector('.toast-message');

    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');

        // Animate cart icon
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);
        }

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on page load
    updateCartCount();

    // Add click handlers to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const product = {
                    id: productCard.dataset.id,
                    name: e.target.dataset.name,
                    price: parseInt(e.target.dataset.price),
                    category: productCard.dataset.category
                };
                addToCart(product);
            }
        });
    });

    // Cart icon click - go to checkout
    document.querySelector('.cart-icon')?.addEventListener('click', (e) => {
        if (cart.length === 0) {
            e.preventDefault();
            showToast('Your cart is empty!');
        }
    });
});

// Export functions for use in other scripts
window.Cart = {
    add: addToCart,
    remove: removeFromCart,
    updateQuantity: updateQuantity,
    clear: clearCart,
    getTotal: getCartTotal,
    getItems: () => cart,
    formatPrice: formatPrice
};
