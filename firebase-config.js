/**
 * FIREBASE CONFIGURATION
 *
 * STEP 1: Go to https://firebase.google.com and create a free account
 * STEP 2: Create a new project called "Samad Bags"
 * STEP 3: Enable Firestore Database (create database in test mode)
 * STEP 4: Go to Project Settings > General > Your Apps > Web App
 * STEP 5: Register app and copy the config values below
 * STEP 6: Enable Authentication (Email/Password and Anonymous)
 * STEP 7: Get your Firebase config and replace the values below
 */

// Your Firebase config - REPLACE THESE WITH YOUR VALUES FROM FIREBASE CONSOL

// Initialize Firebase (only if not already initialized)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get Firestore and Auth references
const db = firebase.firestore();
const auth = firebase.auth();

// ===========================================
// PRODUCTS DATABASE FUNCTIONS
// ===========================================

const ProductsDB = {
    // Get all products from Firebase
    getAll: async function() {
        try {
            const snapshot = await db.collection('products').orderBy('id').get();
            return snapshot.docs.map(doc => ({
                ...doc.data(),
                firestoreId: doc.id
            }));
        } catch (error) {
            console.error('Error getting products:', error);
            // Fallback to local products if Firebase fails
            return window.localProducts || [];
        }
    },

    // Get products by category
    getByCategory: async function(category) {
        try {
            const snapshot = await db.collection('products')
                .where('category', '==', category)
                .get();
            return snapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.error('Error getting products by category:', error);
            return [];
        }
    },

    // Get single product by ID
    getById: async function(id) {
        try {
            const snapshot = await db.collection('products').where('id', '==', id).get();
            if (!snapshot.empty) {
                return snapshot.docs[0].data();
            }
            return null;
        } catch (error) {
            console.error('Error getting product:', error);
            return null;
        }
    },

    // Add new product (Admin only)
    add: async function(product) {
        try {
            // Generate new ID
            const allProducts = await this.getAll();
            const newId = Math.max(...allProducts.map(p => p.id), 0) + 1;

            const productData = {
                ...product,
                id: newId,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            const docRef = await db.collection('products').add(productData);
            return { success: true, id: newId, firestoreId: docRef.id };
        } catch (error) {
            console.error('Error adding product:', error);
            return { success: false, error: error.message };
        }
    },

    // Update product (Admin only)
    update: async function(firestoreId, updates) {
        try {
            await db.collection('products').doc(firestoreId).update({
                ...updates,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true };
        } catch (error) {
            console.error('Error updating product:', error);
            return { success: false, error: error.message };
        }
    },

    // Delete product (Admin only)
    delete: async function(firestoreId) {
        try {
            await db.collection('products').doc(firestoreId).delete();
            return { success: true };
        } catch (error) {
            console.error('Error deleting product:', error);
            return { success: false, error: error.message };
        }
    }
};

// ===========================================
// ORDERS DATABASE FUNCTIONS
// ===========================================

const OrdersDB = {
    // Create new order
    create: async function(orderData) {
        try {
            const order = {
                ...orderData,
                status: 'pending',
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            const docRef = await db.collection('orders').add(order);
            return { success: true, orderId: docRef.id };
        } catch (error) {
            console.error('Error creating order:', error);
            return { success: false, error: error.message };
        }
    },

    // Get all orders (Admin only)
    getAll: async function() {
        try {
            const snapshot = await db.collection('orders')
                .orderBy('createdAt', 'desc')
                .get();
            return snapshot.docs.map(doc => ({
                ...doc.data(),
                firestoreId: doc.id
            }));
        } catch (error) {
            console.error('Error getting orders:', error);
            return [];
        }
    },

    // Get orders by customer email
    getByCustomer: async function(email) {
        try {
            const snapshot = await db.collection('orders')
                .where('customer.email', '==', email)
                .orderBy('createdAt', 'desc')
                .get();
            return snapshot.docs.map(doc => ({
                ...doc.data(),
                firestoreId: doc.id
            }));
        } catch (error) {
            console.error('Error getting customer orders:', error);
            return [];
        }
    },

    // Update order status (Admin only)
    updateStatus: async function(orderId, status) {
        try {
            await db.collection('orders').doc(orderId).update({
                status: status,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true };
        } catch (error) {
            console.error('Error updating order:', error);
            return { success: false, error: error.message };
        }
    }
};

// ===========================================
// AUTHENTICATION FUNCTIONS
// ===========================================

const Auth = {
    // Sign in as admin
    signIn: async function(email, password) {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Sign out
    signOut: async function() {
        try {
            await auth.signOut();
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Check if user is logged in
    getCurrentUser: function() {
        return auth.currentUser;
    },

    // Listen to auth state changes
    onAuthStateChanged: function(callback) {
        return auth.onAuthStateChanged(callback);
    }
};

// ===========================================
// INITIALIZE - Load products from Firebase
// ===========================================

async function initializeProducts() {
    const products = await ProductsDB.getAll();

    if (products.length === 0) {
        console.log('No products in Firebase, loading defaults...');
        // If Firebase is empty, populate with default products
        await populateDefaultProducts();
    } else {
        console.log(`Loaded ${products.length} products from Firebase`);
        window.firebaseProducts = products;

        // Render products if on main page
        if (typeof renderProducts === 'function') {
            renderProductsFromFirebase(products);
        }
    }
}

// Populate Firebase with default products (first time setup)
async function populateDefaultProducts() {
    const defaultProducts = [
        {
            id: 1,
            name: "Explorer Backpack",
            category: "backpacks",
            price: 1490000,
            oldPrice: null,
            image: "images/bag1.jpg",
            badge: "New",
            description: "Perfect for hiking and daily adventures",
            inStock: true
        },
        {
            id: 2,
            name: "Travel Pro Roller",
            category: "luggage",
            price: 2490000,
            oldPrice: 2990000,
            image: "images/bag2.jpg",
            badge: "Sale",
            description: "Premium rolling luggage for business travel",
            inStock: true
        },
        {
            id: 3,
            name: "Classic Tote",
            category: "handbags",
            price: 1890000,
            oldPrice: null,
            image: "images/bag3.jpg",
            badge: null,
            description: "Elegant leather tote for everyday use",
            inStock: true
        },
        {
            id: 4,
            name: "Executive Briefcase",
            category: "briefcases",
            price: 2790000,
            oldPrice: null,
            image: "images/bag4.jpg",
            badge: null,
            description: "Professional briefcase for executives",
            inStock: true
        },
        {
            id: 5,
            name: "Laptop Commuter",
            category: "backpacks",
            price: 1290000,
            oldPrice: null,
            image: "images/bag5.jpg",
            badge: "Bestseller",
            description: "Sleek laptop backpack for daily commute",
            inStock: true
        },
        {
            id: 6,
            name: "Weekender Duffel",
            category: "luggage",
            price: 1790000,
            oldPrice: null,
            image: "images/bag6.jpg",
            badge: null,
            description: "Perfect weekend getaway bag",
            inStock: true
        }
    ];

    // Add your existing products
    const existingImages = [
        { name: "Premium Ladies Hand Bag", category: "handbags", price: 119900, image: "Hand Bag.jpeg", badge: "New" },
        { name: "Elegant Ladies Hand Bag", category: "handbags", price: 89900, image: "Hand Bag2.jpeg", badge: "New" },
        { name: "Stylish Ladies Hand Bag", category: "handbags", price: 69900, image: "Hand Bag3.jpeg", badge: "New" },
        { name: "Trendy college bag", category: "backpacks", price: 1200000, image: "college bag.jpeg", badge: "New" }
    ];

    let id = 7;
    existingImages.forEach(item => {
        defaultProducts.push({
            id: id++,
            name: item.name,
            category: item.category,
            price: item.price,
            oldPrice: null,
            image: `images/${item.image}`,
            badge: item.badge,
            description: "Crafted with a smooth, premium finish, this bag brings a soft yet sophisticated touch to any outfit.",
            inStock: true
        });
    });

    // Add all products to Firebase
    for (const product of defaultProducts) {
        await ProductsDB.add(product);
    }

    console.log('Default products added to Firebase');
    window.firebaseProducts = await ProductsDB.getAll();
}

// Render products from Firebase
function renderProductsFromFirebase(products) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    // Store globally for access
    window.firebaseProducts = products;

    productsGrid.innerHTML = products.map(product => {
        const hasOldPrice = product.oldPrice !== null && product.oldPrice !== undefined;
        const badgeHTML = product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : '';
        const oldPriceHTML = hasOldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : '';

        // Handle multiple images - use first image as main, pass all for viewer
        const mainImage = product.image || (product.images ? product.images[0] : '');
        const allImages = product.images || [mainImage];
        const imagesJson = JSON.stringify(allImages).replace(/"/g, '&quot;');

        return `
            <div class="product-card" data-category="${product.category}" data-id="${product.id}" data-price="${product.price}">
                <div class="product-image">
                    <img src="${mainImage}" alt="${product.name}" loading="lazy"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/d4a574/ffffff?text=${encodeURIComponent(product.name)}'">
                    <div class="product-overlay">
                        <button class="quick-view" onclick="showProductDetails(${product.id})" data-images="${imagesJson}">Quick View</button>
                    </div>
                    ${badgeHTML}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <div class="product-price">
                        ${oldPriceHTML}
                        <span class="current-price" data-amount="${product.price}">${formatPrice(product.price)}</span>
                    </div>
                    <button class="add-to-cart"
                            data-name="${product.name}"
                            data-price="${product.price}"
                            ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Re-attach cart event listeners
    if (typeof attachCartListeners === 'function') {
        attachCartListeners();
    }

    // Add click handlers to product images for fullscreen
    document.querySelectorAll('.product-image img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            // Don't trigger if clicking the overlay button
            if (e.target.closest('.product-overlay')) return;
            const productCard = this.closest('.product-card');
            const productId = productCard.dataset.id;
            showProductDetails(productId);
        });
    });
}

// Format price helper
function formatPrice(amount) {
    if (!amount) return '₹0';
    return '₹' + (amount / 100).toLocaleString('en-IN');
}

// Initialize when Firebase is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof firebase !== 'undefined') {
        initializeProducts();
    }
});

// Export for use in other scripts
window.ProductsDB = ProductsDB;
window.OrdersDB = OrdersDB;
window.Auth = Auth;
window.firebaseDb = db;
window.firebaseAuth = auth;
window.populateDefaultProducts = populateDefaultProducts;
