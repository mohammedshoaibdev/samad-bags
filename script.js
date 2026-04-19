
// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const cartCount = document.querySelector('.cart-count');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// ===== Cart State =====
let cart = [];

// ===== Navigation Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// ===== Mobile Menu Toggle =====
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// ===== Product Filtering =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== Add to Cart =====
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;

        // Add to cart array
        cart.push({
            name: productName,
            price: productPrice,
            id: Date.now()
        });

        // Update cart count
        cartCount.textContent = cart.length;

        // Show toast notification
        showToast(`${productName} added to cart!`);

        // Animate cart icon
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    });
});

// ===== Toast Notification =====
function showToast(message) {
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Contact Form =====
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');

    // Show success message
    showToast(`Thanks ${name}! Your message has been sent.`);

    // Reset form
    contactForm.reset();
});

// ===== Newsletter Form =====
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Quick View Modal (Simple Implementation) =====
document.querySelectorAll('.quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        showToast(`Quick view: ${productName}`);
    });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements for scroll reveal
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// ===== Stats Counter Animation =====
const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !statsAnimated) {
        statsAnimated = true;

        stats.forEach(stat => {
            const target = stat.textContent;
            const numericValue = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/[0-9]/g, '');
            let current = 0;
            const increment = Math.ceil(numericValue / 50);
            const duration = 2000;
            const stepTime = duration / (numericValue / increment);

            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = current + suffix;
                }
            }, stepTime);
        });
    }
};

window.addEventListener('scroll', animateStats);

// ===== Image Lazy Loading =====
if ('IntersectionObserver' in window) {
    const imgPlaceholders = document.querySelectorAll('.img-placeholder, .hero-img-placeholder');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                imageObserver.unobserve(entry.target);
            }
        });
    });

    imgPlaceholders.forEach(img => imageObserver.observe(img));
}

// ===== Keyboard Accessibility =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ===== Performance: Preload Hero Image =====
window.addEventListener('load', () => {
    // Add loaded class for any CSS transitions
    document.body.classList.add('loaded');
});

// ===== Console Welcome Message =====
console.log('%cSamad Bags', 'font-size: 24px; font-weight: bold; color: #1a365d;');
console.log('%cPremium Quality Bags & Luggage', 'font-size: 14px; color: #d4a574;');
console.log('%cWelcome to our website!', 'font-size: 12px; color: #666;');
