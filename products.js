/**
 * SAMAD BAGS - Product Database
 *
 * This is your product catalog. Edit this file to:
 * - Add new bags
 * - Change prices
 * - Update images
 * - Mark items as sale/new/bestseller
 *
 * IMPORTANT: Prices are in PAISE (multiply Rupees by 100)
 * Example: ₹14,900 = 14900
 *          ₹1,499 = 149900
 */

const products = [
    // Product 1: Backpack
    {
        id: 1,
        name: "College Bag",
        category: "Backpacks",
        price: 14900,           // ₹14,900
        oldPrice: null,         // Set to number for sale (e.g., 16900)
        images: ["images/college3.jpeg"],
        badge: "New",           // Options: "New", "Sale", "Bestseller", or null
        description: "Smart, stylish, and spacious college bag designed for students on the go. Crafted with durable materials, it features multiple compartments to keep your books, laptop, and essentials organized.",
        inStock: true
    },

    // Product 2: Luggage
    {
        id: 2,
        name: "College Bag",
        category: "college",
        price: 24900,           // ₹24,900 (Sale price)
        oldPrice: 29900,        // ₹29,900 (Original price) - remove or set null if not on sale
        images:[ "images/collegebag4.jpeg" ],
        badge: "Sale",
        description: "Experience true quality with our premium college bag, designed to meet the needs of students and professionals alike. Crafted with durable materials and featuring a sleek design, this bag offers ample space for your books, laptop, and essentials while keeping you stylish on campus or at work with1 year warranty.",
        inStock: true
    },

    // Product 3: Handbag
    {
        id: 3,
        name: "Stylish College Bag",
        category: "college",
        price: 18900,           // ₹18,900
        oldPrice: null,
        images:[
            "images/collegebag5.jpeg",
            "images/collegebag5s.jpeg"],
        badge: null,            // No badge
        description: "Trendy college bag with a modern design, perfect for students who want to make a statement on campus. Made from durable materials, it features multiple compartments to keep your belongings organized and easily accessible.",
        inStock: true
    },

    // Product 4: college bag
    {
        id: 4,
        name: "College Bag",
        category: "college",
        price: 27900,           // ₹27,900
        oldPrice: null,
        images: [
            "images/collegebag6.jpeg",
            "images/collegebag6s.jpeg"
        ],
        badge: null,
        description: "college and laptop for multiple compartments to keep your belongings organized and easily accessible.",
        inStock: true
    },

    // Product 5: Laptop Backpack
    {
        id: 5,
        name: "College Bag",
        category: "college",
        price: 12900,           // ₹12,900
        oldPrice: null,
        images:["images/collegebag7.jpeg"],
        badge: "premium",
        description: "Designed for those who never compromise on quality,the Samad Bags Elite College Bag combines luxury ,duarablity and modern design in one powerful carry.",
        inStock: true
    },

    // Product 6: Duffel
    {
        id: 6,
        name: "College Bag",
        category: "college",
        price: 17900,           // ₹17,900
        oldPrice: null,
        images: ["images/collegebag8.jpeg"],
        badge: null,
        description: "Smart design the perfect blend of style and functionality, the Samad Bags College Bag is your ideal companion for weekend getaways or as a spacious carry-on for your travels.",
        inStock: true
    },
    {
    id: 7,
        name: "College Bag",
        category: "college",
        price: 119900,
        images:[ "images/collegebag9.jpeg" ],
        badge: "New",
        description: "its spacious interior and durable construction make it the perfect choice for students and professionals alike, offering both style and practicality for your daily commute or weekend adventures premium look and feel, the Samad Bags College Bag is designed to elevate your everyday carry, making it a must-have for those who value both fashion and function with 1 year warranty.",
        inStock: true
    },

    {
        id: 8,
        name: "Premium tiffin Bag",
        category: "tiffin",
        price: 89900,
        images: ["images/Dmodel1.jpeg"],
        badge: "New",
        description: "small and compact tiffin bag designed for individuals who want to carry their meals in style. Crafted with durable materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 9,
        name: "Duffle Bag",
        category: "duffles",
        price: 69900,
        images: ["images/duffle1.jpeg"],
        badge: "New",
        description: "A versatile duffle bag perfect for travel or everyday use. With multiple compartments and a durable design, it's ideal for carrying all your essentials in style easy to carry .",
        inStock: true
    },
    {
        id: 10,
        name: "Duffle Bag",
        category: "duffles",
        price: 120000,
        images: ["images/duffle4.jpeg"],
        badge: "New",
        description: "A versatile duffle bag perfect for travel or everyday use. With multiple compartments and a durable design, it's ideal for carrying all your essentials in style easy to carry .",
        inStock: true   
    },
    {
        id: 10,
        name: "Duffle Bag",
        category: "duffles",
        price: 120000,
        images: ["images/duffle5.jpeg", "images/duffle5s.jpeg"],
        badge: "New",
        description: "A versatile duffle bag perfect for travel or everyday use. With multiple compartments and a durable design, it's ideal for carrying all your essentials in style easy to carry .",
        inStock: true   
    },
    {
        id: 11,
        name: "Handbag",
        category: "handbags",
        price: 99900,
        images: ["images/handbag4.jpeg"],
        badge: "New",
        description: "A stylish handbag perfect for everyday use. With a sleek design and multiple compartments, it's ideal for carrying all your essentials in style.",
        inStock: true
    },
    {
        id: 12,
        name: "Handbag",
        category: "handbags",
        price: 89900,
        images: ["images/handbag5.jpeg", "images/handbag5s.jpeg"],
        badge: "New",
        description: "A stylish handbag perfect for everyday use. With a sleek design and multiple compartments, it's ideal for carrying all your essentials in style.",
        inStock: true
    },
    {
        id: 13,
        name: "School Bag",
        category: "schoolbags",
        price: 79900,
        images: ["images/jumbo.jpeg",
            "images/jumbob.jpeg",
            "images/jumbos.jpeg",
            "images/jumboback.jpeg"
        ],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 14,
        name: "School Bag",
        category: "kidsbags",
        price: 69900,
        images: ["images/kidbag1.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 15,
        name: "School Bag",
        category: "kidsbags",
        price: 59900,
        images: ["images/kidbag2.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 16,
        name: "School Bag",
        category: "kidsbags",
        price: 49900,
        images: ["images/kidbag3s.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style",
        inStock: true
    },
    {
        id: 17,
        name: "multifunctional  bag",
        category: "backpacks",
        price: 89900,
        images: ["images/multitypebag.jpeg"],
        badge: "New",
        description: "A versatile multifunctional bag perfect for travel or everyday use. With multiple compartments and a durable design, it's ideal for carrying all your essentials in style.",
        inStock: true
    },
    {
        id: 18,
        name: "School Bag",
        category: "schoolbags",
        price: 79900,
        images: ["images/roundbag1.jpeg", "images/roundbag1s.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true

    },
    {
        id: 19,
        name: "School Bag",
        category: "schoolbags",
        price: 69900,
        images: ["images/roundbag2.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 20,
        name: "School Bag",
        category: "schoolbags",
        price: 59900,
        images: ["images/roundbag3.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 21,
        name: "School Bag",
        category: "schoolbags",
        price: 49900,
        images: ["images/roundbag4.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 22,
        name: "School Bag",
        category: "schoolbags",
        price: 39900,
        images: ["images/roundbag5.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 23,
        name: "School Bag",
        category: "schoolbags",
        price: 29900,
        images: ["images/schoolbag4.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 24,
        name: "School Bag",
        category: "schoolbags",
        price: 19900,
        images: ["images/schoolbag1.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 25,
        name: "School Bag",
        category: "schoolbags",
        price: 99900,
        images: ["images/schoolbag2.jpeg", "images/schoolbag2both.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true   
    },
    {
        id: 26,
        name: "School Bag",
        category: "schoolbags",
        price: 89900,
        images: ["images/schoolbag3.jpeg", "images/schoolbag2s.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 27,
        name: "School Bag",
        category: "schoolbags",
        price: 79900,
        images: ["images/schoolbag5.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 28,
        name: "School Bag",
        category: "schoolbags",
        price: 69900,
        images: ["images/schoolbag6.jpeg"],
        badge: "New",
        description: "A spacious school bag designed for students. With multiple compartments and a durable design, it's ideal for carrying all your books and supplies in style.",
        inStock: true
    },
    {
        id: 29,
        name: "Briefcase",
        category: "briefcases",
        price: 149900,
        images: ["images/suitcase4.jpeg", "images/suitcase2.jpeg", "images/suitcase3.jpeg"],
        badge: "New",
        description: "A sleek and professional briefcase designed for business professionals. With multiple compartments and a durable design, it's ideal for carrying your laptop, documents, and essentials in style.",
        inStock: true
    },
    {
        id: 30,
        name: "Briefcase",
        category: "briefcases",
        price: 129900,
        images: ["images/suitcase5.jpeg"],
        badge: "New",
        description: "A sleek and professional briefcase designed for business professionals. With multiple compartments and a durable design, it's ideal for carrying your laptop, documents, and essentials in style.",
        inStock: true   
    },
    {
        id: 31,
        name: "Tiffin Bag",
        category: "tiffin",
        price: 49900,
        images: ["images/tiffin bag.jpeg"],
        badge: "New",
        description: "A compact and stylish tiffin bag designed for individuals who want to carry their meals in style. Crafted with durable materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 32,
        name: "Tiffin Bag",
        category: "premium tiffin",
        price: 59900,
        images: ["images/tiffinpremium1.jpeg"],
        badge: "New",
        description: "A premium tiffin bag designed for individuals who want to carry their meals in style. Crafted with high-quality materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 33,
        name: "Tiffin Bag",
        category: "premium tiffin",
        price: 69900,
        images: ["images/tiffinpremium2.jpeg"],
        badge: "New",
        description: "A premium tiffin bag designed for individuals who want to carry their meals in style. Crafted with high-quality materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 34,
        name: "Tiffin Bag",
        category: "premium tiffin",
        price: 79900,
        images: ["images/tiffinpremium3.jpeg"],
        badge: "New",
        description: "A premium tiffin bag designed for individuals who want to carry their meals in style. Crafted with high-quality materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 35,
        name: "Tiffin Bag",
        category: "premium tiffin",
        price: 89900,
        images: ["images/tiffinpremium4.jpeg"],
        badge: "New",
        description: "A premium tiffin bag designed for individuals who want to carry their meals in style. Crafted with high-quality materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 36,
        name: "Tiffin Bag",
        category: "premium tiffin",
        price: 99900,
        images: ["images/tiffinpremium5.jpeg"],
        badge: "New",
        description: "A premium tiffin bag designed for individuals who want to carry their meals in style. Crafted with high-quality materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true
    },
    {
        id: 37,
        name: "Tiffin Bag",
        category: "premium tiffin",
        price: 109900,
        images: ["images/tiffinpremium7.jpeg", "images/tiffinpremium7s.jpeg"],
        badge: "New",
        description: "A premium tiffin bag designed for individuals who want to carry their meals in style. Crafted with high-quality materials, it features insulated compartments to keep your food fresh and a sleek design that complements your daily routine.",
        inStock: true

    },
    {
        id: 38,
        name: "Tool Bag",
        category: "toolbags",
        price: 149900,
        images: ["images/toolbag.jpeg", "images/toolbags.jpeg", "images/toolbagu.jpeg"],
        badge: "New",
        description: "A durable and spacious tool bag designed for professionals and DIY enthusiasts. With multiple compartments and a rugged design, it's ideal for carrying all your tools in style.",
        inStock: true

    },
    {
        id: 39,
        name: "Tracking Bag",
        category: "trackingbags",
        price: 149900,
        images: ["images/trackingbag1.jpeg"],
        badge: "New",
        description: "A durable and spacious tracking bag designed for professionals and DIY enthusiasts. With multiple compartments and a rugged design, it's ideal for carrying all your tools in style.",
        inStock: true
    }
];

/**
 * HOW TO ADD A NEW PRODUCT:
 *
 * 1. Copy this template below the last product:
 *
 * {
 *     id: 7,                    // Use next number
 *     name: "Your Bag Name",
 *     category: "backpacks",    // Options: backpacks, luggage, handbags, briefcases
 *     price: 15900,             // Price in paise (₹15,900 = 15900)
 *     oldPrice: null,           // Sale price (or null)
 *     image: "images/bag7.jpg", // Path to your image
 *     badge: "New",             // Options: "New", "Sale", "Bestseller", null
 *     description: "Short description",
 *     inStock: true
 * },
 *
 * 2. Add your image to the 'images' folder
 * 3. Save this file
 * 4. Refresh your website
 */

// Currency formatter - converts paise to rupees with ₹ symbol
function formatPrice(amount) {
    return '₹' + (amount / 100).toLocaleString('en-IN');
}

// Render products to the page
function renderProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => {
        const hasOldPrice = product.oldPrice !== null && product.oldPrice !== undefined;
        const badgeHTML = product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : '';
        const oldPriceHTML = hasOldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : '';

        return `
            <div class="product-card" data-category="${product.category}" data-id="${product.id}" data-price="${product.price}">
                <div class="product-image">
                    <img src="${product.images[0]}"
                    alt="${product.name}" 
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/400x300/d4a574/ffffff?text=${encodeURIComponent(product.name)}'">
                    <div class="product-overlay">
                        <button class="quick-view" onclick="showProductDetails(${product.id})">Quick View</button>
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
    attachCartListeners();
}

// Show product details (simple alert for now - can be expanded to modal)
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name}\n${formatPrice(product.price)}\n\n${product.description}`);
    }
}

// Attach cart listeners to rendered products
function attachCartListeners() {
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

                // Check if Cart object exists (from cart.js)
                if (window.Cart) {
                    window.Cart.add(product);
                } else {
                    // Fallback if cart.js isn't loaded
                    let cart = JSON.parse(localStorage.getItem('samadBagsCart')) || [];
                    const existingItem = cart.find(item => item.id === product.id);
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({ ...product, quantity: 1 });
                    }
                    localStorage.setItem('samadBagsCart', JSON.stringify(cart));
                    alert(`${product.name} added to cart!`);
                    location.reload();
                }
            }
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Export for use in other scripts
window.SamadProducts = {
    getAll: () => products,
    getById: (id) => products.find(p => p.id === id),
    getByCategory: (category) => products.filter(p => p.category === category),
    formatPrice: formatPrice
};
