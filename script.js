// --- 1. Image Slider Logic ---
let currentSlide = 0;
const slides = [
    'banner1.jpg', // Starting ₹199 banner
    'banner2.jpg', // Bank discount banner
    'banner3.jpg'  // Holi sale banner
];

function moveSlide(direction) {
    const heroSection = document.querySelector('.hero');
    currentSlide += direction;

    // Loop back logic
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    // Update background image
    heroSection.style.backgroundImage = `url('${slides[currentSlide]}')`;
}

// --- 2. Search Bar Interaction ---
const searchInput = document.querySelector('.nav-search input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        console.log(`Searching Amazon.in for: ${query}`);
        // In a real app: window.location.href = `/search?q=${query}`;
    }
});

// --- 3. Sticky Navigation Scroll Effect ---
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// --- 4. Initialize Elements ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Amazon Clone Loaded - March 2026 Edition");
    
    // Add event listeners to the arrows in your HTML
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if(leftArrow) leftArrow.onclick = () => moveSlide(-1);
    if(rightArrow) rightArrow.onclick = () => moveSlide(1);
});
