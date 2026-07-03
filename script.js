/* ==========================================================================
   Screenshot-Accurate Amazon.in Clone Application Logic
   ========================================================================== */

// --- Indian Rupee Mock Database ---
const MOCK_PRODUCTS = [
    {
        id: "p1",
        name: "AeroSound Pro Active Noise Cancelling Headphones",
        category: "electronics",
        price: 16500.00,
        originalPrice: 20000.00,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
        rating: 4.8,
        reviewsCount: 1248,
        badge: "Best Seller",
        description: "Experience absolute audio isolation with wireless hybrid ANC. Features 40mm custom drivers, memory foam earcups, and up to 45 hours of high-fidelity playback.",
        specs: [
            { label: "Connectivity", value: "Bluetooth 5.2 / Wired" },
            { label: "Battery Life", value: "Up to 45 Hours" },
            { label: "Noise Cancelling", value: "Active ANC (40dB)" }
        ],
        options: {
            sizes: ["Standard"],
            colors: ["Midnight Black", "Carbon Gray"]
        },
        thumbnails: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop"
        ]
    },
    {
        id: "p2",
        name: "VoltCharge Wireless Charger Premium",
        category: "electronics",
        price: 4100.00,
        originalPrice: 4900.00,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop",
        rating: 4.5,
        reviewsCount: 840,
        badge: "Deal of Day",
        description: "Fast charge your mobile devices, smart watch, and earbuds simultaneously on this sleek charging base.",
        specs: [
            { label: "Total Output", value: "22.5W Max Fast Charging" },
            { label: "Port", value: "USB-C Input" }
        ],
        options: {
            sizes: ["Standard Station"],
            colors: ["Classic Black", "Alpine White"]
        },
        thumbnails: [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop"
        ]
    },
    {
        id: "p4",
        name: "Aquaminder Smart Water Bottle Glows & Beeps",
        category: "home",
        price: 1299.00,
        originalPrice: 1999.00,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=300&auto=format&fit=crop",
        rating: 4.4,
        reviewsCount: 204,
        badge: "Prime Day Deal",
        description: "Smart hydration bottle that glows and beeps at regular intervals to remind you to drink water. Features Bluetooth tracking and double insulated stainless wall.",
        specs: [
            { label: "Capacity", value: "770 ml" },
            { label: "Material", value: "Insulated Stainless Steel" },
            { label: "Battery Life", value: "Up to 14 days" }
        ],
        options: {
            sizes: ["770 ml"],
            colors: ["Electric Blue", "Jet Black"]
        },
        thumbnails: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=300&auto=format&fit=crop"
        ]
    },
    {
        id: "p5",
        name: "MENHOOD Pro Shaver for Men 3D HexBlade Rotary",
        category: "appliances",
        price: 8999.00,
        originalPrice: 14999.00,
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300&auto=format&fit=crop",
        rating: 4.6,
        reviewsCount: 312,
        badge: "Exclusive",
        description: "Premium rotary electric shaver with 3D HexBlade floating heads, nano-cut blades for absolute precision, skin-protection guard, and waterproof wet/dry design.",
        specs: [
            { label: "Blade Tech", value: "3D HexBlade Nano-Cut" },
            { label: "Shave Modes", value: "Wet & Dry Waterproof" },
            { label: "Battery Life", value: "Up to 90 min runtime" }
        ],
        options: {
            sizes: ["Pro Shaver Edition"],
            colors: ["Midnight Blue", "Obsidian Black"]
        },
        thumbnails: [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300&auto=format&fit=crop"
        ]
    },
    {
        id: "p6",
        name: "VAYA HauteChef Cast Iron Kadai, 24 cm Pre-Seasoned",
        category: "home",
        price: 945.00,
        originalPrice: 1890.00,
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=300&auto=format&fit=crop",
        rating: 4.7,
        reviewsCount: 1540,
        badge: "60% Off",
        description: "Pre-seasoned heavy-duty 24cm cast iron kadai, 100% pure cast iron. Ideal for deep frying, sautéing, curries, and authentic slow-cooking styles.",
        specs: [
            { label: "Diameter", value: "24 cm" },
            { label: "Material", value: "100% Pure Cast Iron" },
            { label: "Coating", value: "Double Pre-Seasoned Veg Oil" }
        ],
        options: {
            sizes: ["24 cm", "28 cm (+₹300)"],
            colors: ["Matte Iron Black"]
        },
        thumbnails: [
            "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=300&auto=format&fit=crop"
        ]
    },
    {
        id: "p7",
        name: "Ampere Magnus G Max Electric Scooter by Greaves",
        category: "automotive",
        price: 99499.00,
        originalPrice: 102999.00,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=300&auto=format&fit=crop",
        rating: 4.5,
        reviewsCount: 68,
        badge: "Smart Ride",
        description: "Eco-friendly electric scooter featuring a 142 km IDC range, safe LFP lithium-ion battery, large underseat storage space, keyless start, and high-visibility LED lights.",
        specs: [
            { label: "Range", value: "142 km (IDC Range)" },
            { label: "Battery", value: "Safe LFP Lithium-ion" },
            { label: "Top Speed", value: "55 km/h" }
        ],
        options: {
            sizes: ["Magnus G Max"],
            colors: ["Metallic Blue", "Frost White", "Slate Gray"]
        },
        thumbnails: [
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=300&auto=format&fit=crop"
        ]
    },
    {
        id: "p8",
        name: "Handcrafted Wooden Desk Organizer & Rack",
        category: "home",
        price: 549.00,
        originalPrice: 999.00,
        image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=150&auto=format&fit=crop",
        rating: 4.3,
        reviewsCount: 180,
        badge: "Handcrafted",
        description: "Premium wooden desk organizer with multiple drawers and slots. Perfect for pens, notes, stationary, and keeping workspace clutter-free.",
        specs: [
            { label: "Material", value: "Genuine Sheesham Wood" },
            { label: "Dimensions", value: "12\" x 6\" x 8\"" }
        ],
        options: {
            sizes: ["Standard Organizer"],
            colors: ["Walnut Finish"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p9",
        name: "Hand-painted Ceramic Chai Cups (Set of 6)",
        category: "home",
        price: 399.00,
        originalPrice: 799.00,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=150&auto=format&fit=crop",
        rating: 4.6,
        reviewsCount: 452,
        badge: "Local Artisan",
        description: "Beautiful set of 6 stoneware clay tea cups. Hand-painted by local Indian artisans using safe food-grade glaze, microwave & dishwasher safe.",
        specs: [
            { label: "Included", value: "6 Ceramic Cups" },
            { label: "Capacity", value: "150 ml per cup" }
        ],
        options: {
            sizes: ["6-Cup Set"],
            colors: ["Artisan Ochre", "Traditional Blue"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p10",
        name: "Vintage Antique Desk Globe with Wooden Stand",
        category: "home",
        price: 1249.00,
        originalPrice: 1999.00,
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=150&auto=format&fit=crop",
        rating: 4.5,
        reviewsCount: 118,
        badge: "Decor",
        description: "Classic geographical antique desk globe. Made of sturdy materials with high-resolution map markings on a polished wooden stand.",
        specs: [
            { label: "Strap/Stand", value: "Polished Oak Wood" },
            { label: "Diameter", value: "8 inches" }
        ],
        options: {
            sizes: ["8\" Diameter"],
            colors: ["Vintage Amber"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p11",
        name: "Iron Decorative Pillar Candelabra & Candle Stand",
        category: "home",
        price: 499.00,
        originalPrice: 999.00,
        image: "https://images.unsplash.com/photo-1603006905393-0d50711cc28f?q=80&w=150&auto=format&fit=crop",
        rating: 4.4,
        reviewsCount: 92,
        badge: "Sale",
        description: "Decorative wrought iron candelabra candle holder stand. Perfect for dinner tables, festival celebrations, and home decor overlays.",
        specs: [
            { label: "Material", value: "Wrought Iron" },
            { label: "Capacity", value: "3 Pillars" }
        ],
        options: {
            sizes: ["3-Tier Stand"],
            colors: ["Midnight Black", "Rustic Gold"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1603006905393-0d50711cc28f?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p12",
        name: "BANGE Anti-theft Sling Bag for Men",
        category: "fashion",
        price: 1799.00,
        originalPrice: 3499.00,
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=150&auto=format&fit=crop",
        rating: 4.7,
        reviewsCount: 56,
        badge: "Featured",
        description: "Premium anti-theft shoulder cross-body chest pack. Features water-resistant nylon shell, TSA lock code protection, and built-in USB charger port.",
        specs: [
            { label: "Shell Material", value: "Water-resistant Nylon" },
            { label: "Anti-Theft Lock", value: "Integrated TSA Combination" }
        ],
        options: {
            sizes: ["Standard Sling Pack"],
            colors: ["Midnight Black", "Carbon Grey", "Navy Blue"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p13",
        name: "DIGITEK LED-D6W RGB Portable Video Light",
        category: "electronics",
        price: 1167.00,
        originalPrice: 1995.00,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop",
        rating: 4.4,
        reviewsCount: 88,
        badge: "Live Item",
        description: "Ultra compact rechargeable RGB video camera panel light. Perfect for mobile streams, vlogging, studio fillings, and content creation.",
        specs: [
            { label: "Power Output", value: "6W LED Full Color" },
            { label: "Battery Capacity", value: "2000mAh Rechargeable" }
        ],
        options: {
            sizes: ["DIGITEK Light Unit"],
            colors: ["Standard RGB Body"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p14",
        name: "Retro Game Box 400 in 1 Classic Console",
        category: "electronics",
        price: 620.00,
        originalPrice: 1999.00,
        image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=150&auto=format&fit=crop",
        rating: 4.2,
        reviewsCount: 1904,
        badge: "Classic Deal",
        description: "Handheld portable 8-bit game console containing 400 nostalgic NES games. Complete with color LCD display, rechargeable battery, and TV connection support.",
        specs: [
            { label: "Games Loaded", value: "400 Retro Titles" },
            { label: "Screen size", value: "3.0 inch Color LCD" }
        ],
        options: {
            sizes: ["Solo Console", "Console + Extra Controller (+₹150)"],
            colors: ["Retro Red", "Classic Blue", "Midnight Black"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p15",
        name: "SpinBot BattleMods F1 Triggers",
        category: "electronics",
        price: 469.00,
        originalPrice: 599.00,
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=150&auto=format&fit=crop",
        rating: 4.5,
        reviewsCount: 420,
        badge: "Prime Day Exclusive",
        description: "Responsive mechanical phone triggers for PUBG Mobile, COD Mobile, and FreeFire. Mechanical switches ensure instant response and key-click tactile feel.",
        specs: [
            { label: "Switch Type", value: "Mechanical Mouse Clicks" },
            { label: "Attachment", value: "Non-slip Grip Clamps" }
        ],
        options: {
            sizes: ["L/R Set"],
            colors: ["Stealth Black"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=150&auto=format&fit=crop"]
    },
    {
        id: "p16",
        name: "Ambrane 45W Fast Charging Powerbank",
        category: "electronics",
        price: 3699.00,
        originalPrice: 4999.00,
        image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=150&auto=format&fit=crop",
        rating: 4.6,
        reviewsCount: 650,
        badge: "Featured",
        description: "High-capacity power bank capable of charging laptops, smartphones, and accessories. Support PD fast charging and dual USB-A / Type-C output configurations.",
        specs: [
            { label: "Capacity", value: "20,000mAh Power Storage" },
            { label: "Power Output", value: "45W Power Delivery (PD)" }
        ],
        options: {
            sizes: ["20000mAh Powerbank"],
            colors: ["Carbon Slate", "Frost White"]
        },
        thumbnails: ["https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=150&auto=format&fit=crop"]
    }
];

// --- App State variables ---
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let currentCarouselIndex = 0;
let carouselIntervalId = null;

// Temporary states for quick-view modal options selection
let selectedModalOptions = { size: "", color: "" };

// --- DOM References ---
const dom = {
    // Top nav bar
    searchCategorySelect: document.querySelector('.search-category-select'),
    categoryDropdown: document.getElementById('category-dropdown'),
    activeCategoryName: document.getElementById('active-category-name'),
    searchInput: document.getElementById('search-input-field'),
    searchBtn: document.getElementById('search-btn'),
    cartCountBadge: document.getElementById('cart-count'),
    cartTriggerBtn: document.getElementById('cart-button'),
    logoBtn: document.getElementById('logo-btn'),

    // Sub nav
    subNavLinks: document.querySelectorAll('.sub-nav-link'),

    // Main section content components (to toggle on active searches)
    carouselSection: document.getElementById('carousel-section'),
    homeCardsGrid: document.querySelectorAll('.home-cards-grid'),
    horizontalScrollSections: document.querySelectorAll('.horizontal-scroll-section'),
    amazonLiveSection: document.querySelector('.amazon-live-section'),
    searchCatalogSection: document.getElementById('search-catalog-section'),
    
    // Catalog Grid fields (for searches)
    productGrid: document.getElementById('product-grid-container'),
    productCount: document.getElementById('product-count-display'),
    clearFiltersBtn: document.getElementById('clear-filters'),
    catalogTitle: document.getElementById('catalog-title'),

    // Carousel
    carouselSlides: document.querySelectorAll('.carousel-slide'),
    prevSlideBtn: document.getElementById('prev-slide-btn'),
    nextSlideBtn: document.getElementById('next-slide-btn'),
    carouselIndicators: document.getElementById('carousel-indicators'),

    // Cart Panel
    cartOverlay: document.getElementById('cart-overlay'),
    cartDrawerPanel: document.getElementById('cart-drawer-panel'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartTotalQtyBadge: document.getElementById('cart-total-qty'),
    cartSubtotalAmount: document.getElementById('cart-subtotal-amount'),
    checkoutBtn: document.getElementById('checkout-btn'),
    cartSummaryFooter: document.getElementById('cart-summary-footer'),
    drawerShopNowBtn: document.getElementById('drawer-shop-now'),

    // Details Modal
    quickViewModal: document.getElementById('quickview-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    modalDetailsGrid: document.getElementById('modal-details-grid'),

    // Alerts
    toastContainer: document.getElementById('toast-notifications'),

    // Footer Scroll
    backToTopBtn: document.getElementById('back-to-top'),

    // Live Video Player
    liveVideoPlayer: document.getElementById('live-video-player')
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    renderCart();

    setupHeaderEvents();
    setupCarouselEvents();
    setupCartDrawerEvents();
    setupModalEvents();
    setupScrollEvents();
    setupLiveWidgetEvents();

    startAutoCarousel();
});

// --- Local Storage Management ---
function saveCartToStorage() {
    localStorage.setItem("amazon_in_clone_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem("amazon_in_clone_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

// --- Header Navigation Handlers ---
function setupHeaderEvents() {
    // Custom drop-down selector click
    dom.searchCategorySelect.addEventListener('click', (e) => {
        e.stopPropagation();
        dom.categoryDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        dom.categoryDropdown.classList.remove('show');
    });

    dom.categoryDropdown.addEventListener('click', (e) => {
        const option = e.target.closest('.category-option');
        if (option) {
            const cat = option.dataset.category;
            dom.activeCategoryName.textContent = option.textContent.replace(' Departments', '');
            currentCategory = cat;
            dom.categoryDropdown.classList.remove('show');
            updateSubnavHighlight(cat);
        }
    });

    // Execute Search Click & Enter Key
    dom.searchBtn.addEventListener('click', executeSearch);
    dom.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executeSearch();
        }
    });

    // Return Home
    dom.logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetFilters();
    });

    // Sub nav links click
    dom.subNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.dataset.navCategory;
            currentCategory = cat;
            
            const selectOption = dom.categoryDropdown.querySelector(`[data-category="${cat}"]`);
            if (selectOption) {
                dom.activeCategoryName.textContent = selectOption.textContent.replace(' Departments', '');
            } else {
                dom.activeCategoryName.textContent = "All";
            }

            updateSubnavHighlight(cat);
            executeSearch(false);
        });
    });
}

function updateSubnavHighlight(category) {
    dom.subNavLinks.forEach(link => {
        if (link.dataset.navCategory === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function executeSearch(clearQuery = false) {
    if (clearQuery) {
        dom.searchInput.value = "";
        searchQuery = "";
    } else {
        searchQuery = dom.searchInput.value.trim().toLowerCase();
    }

    const isActiveSearch = (searchQuery !== "" || currentCategory !== "all");

    // Toggle HomePage elements vs Catalog List elements
    if (isActiveSearch) {
        // Hide HomePage contents
        dom.carouselSection.style.display = "none";
        dom.homeCardsGrid.forEach(g => g.style.display = "none");
        dom.horizontalScrollSections.forEach(s => s.style.display = "none");
        if (dom.amazonLiveSection) dom.amazonLiveSection.style.display = "none";
        
        // Show Catalog Grid
        dom.searchCatalogSection.style.display = "block";
        renderSearchGrid();
        
        // Smooth scroll to results
        dom.searchCatalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dom.clearFiltersBtn.classList.remove('hide');
    } else {
        // Restore HomePage view
        dom.carouselSection.style.display = "block";
        dom.homeCardsGrid.forEach(g => g.style.display = "grid");
        dom.horizontalScrollSections.forEach(s => s.style.display = "block");
        if (dom.amazonLiveSection) dom.amazonLiveSection.style.display = "block";
        
        // Hide Catalog
        dom.searchCatalogSection.style.display = "none";
        dom.clearFiltersBtn.classList.add('hide');
    }
}

function resetFilters() {
    currentCategory = "all";
    dom.activeCategoryName.textContent = "All";
    updateSubnavHighlight("all");
    executeSearch(true);
}

// Global page helper function to link tiles to catalog search
window.scrollToCatalog = function(e, category) {
    if (e) e.preventDefault();
    currentCategory = category;
    
    const selectOption = dom.categoryDropdown.querySelector(`[data-category="${category}"]`);
    if (selectOption) {
        dom.activeCategoryName.textContent = selectOption.textContent.replace(' Departments', '');
    }
    
    updateSubnavHighlight(category);
    executeSearch(true); // reset search text but filter category
};

// --- Product Carousel Lane Shifting ---
window.slideLane = function(laneId, direction) {
    const laneNode = document.getElementById(laneId);
    if (laneNode) {
        const offsetWidth = laneNode.clientWidth * 0.75;
        laneNode.scrollBy({
            left: direction * offsetWidth,
            behavior: 'smooth'
        });
    }
};

// --- Hero Banner Slideshow ---
function setupCarouselEvents() {
    dom.prevSlideBtn.addEventListener('click', () => {
        shiftCarousel(-1);
        resetAutoCarousel();
    });

    dom.nextSlideBtn.addEventListener('click', () => {
        shiftCarousel(1);
        resetAutoCarousel();
    });

    // Indicators click events
    dom.carouselIndicators.addEventListener('click', (e) => {
        const ind = e.target.closest('.indicator');
        if (ind) {
            const index = parseInt(ind.dataset.slide);
            showCarouselIndex(index);
            resetAutoCarousel();
        }
    });

    // Carousel action buttons
    document.querySelectorAll('.slide-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCat = btn.dataset.promoTarget;
            scrollToCatalog(null, targetCat);
        });
    });
}

function startAutoCarousel() {
    carouselIntervalId = setInterval(() => {
        shiftCarousel(1);
    }, 6000);
}

function resetAutoCarousel() {
    clearInterval(carouselIntervalId);
    startAutoCarousel();
}

function shiftCarousel(direction) {
    let nextIdx = currentCarouselIndex + direction;
    const slidesCount = dom.carouselSlides.length;

    if (nextIdx >= slidesCount) nextIdx = 0;
    if (nextIdx < 0) nextIdx = slidesCount - 1;

    showCarouselIndex(nextIdx);
}

function showCarouselIndex(index) {
    dom.carouselSlides[currentCarouselIndex].classList.remove('active');
    dom.carouselIndicators.children[currentCarouselIndex].classList.remove('active');

    currentCarouselIndex = index;

    dom.carouselSlides[currentCarouselIndex].classList.add('active');
    dom.carouselIndicators.children[currentCarouselIndex].classList.add('active');
}

// --- Live Broadcast simulated play ---
function setupLiveWidgetEvents() {
    if (dom.liveVideoPlayer) {
        dom.liveVideoPlayer.addEventListener('click', () => {
            const iconNode = dom.liveVideoPlayer.querySelector('.video-play-icon i');
            const ctaNode = dom.liveVideoPlayer.querySelector('.video-cta');
            
            if (iconNode.classList.contains('ri-play-large-fill')) {
                iconNode.className = 'ri-pause-large-fill';
                ctaNode.textContent = "Playing Broadcast...";
                showToast("LIVE Feed Stream Started", "Now watching Prime Pod stream preview.", "info");
            } else {
                iconNode.className = 'ri-play-large-fill';
                ctaNode.textContent = "Watch now";
                showToast("Stream Paused", "Simulated live feed paused.", "info");
            }
        });
    }
}

// --- Catalog Rendering ---
function renderSearchGrid() {
    const filtered = MOCK_PRODUCTS.filter(prod => {
        const matchesCategory = (currentCategory === "all" || prod.category === currentCategory);
        const matchesSearch = (!searchQuery || 
                               prod.name.toLowerCase().includes(searchQuery) || 
                               prod.description.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
    });

    dom.productCount.textContent = `Showing ${filtered.length} products`;
    if (searchQuery || currentCategory !== "all") {
        dom.clearFiltersBtn.classList.remove('hide');
        dom.catalogTitle.innerHTML = `Search results for: <span style="color:var(--color-amazon-orange)">${searchQuery ? searchQuery : currentCategory}</span>`;
    }

    dom.clearFiltersBtn.onclick = resetFilters;

    if (filtered.length === 0) {
        dom.productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--color-amazon-text-muted)">
                <i class="ri-search-eye-line" style="font-size: 3rem; display: block; margin-bottom: 12px; opacity: 0.3"></i>
                <h3 style="color:#111; margin-bottom: 6px;">No Results Found</h3>
                <p>Try searching for headphones, bottle, shaver, kadai or bag.</p>
                <button class="shop-now-btn" id="reset-catalog-btn" style="margin-top: 12px;">Clear Filters</button>
            </div>
        `;
        document.getElementById('reset-catalog-btn').onclick = resetFilters;
        return;
    }

    dom.productGrid.innerHTML = filtered.map(prod => {
        // Calculate stars
        let starsHtml = "";
        const floorStars = Math.floor(prod.rating);
        const hasHalf = prod.rating % 1 !== 0;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= floorStars) {
                starsHtml += `<i class="ri-star-fill"></i>`;
            } else if (i === floorStars + 1 && hasHalf) {
                starsHtml += `<i class="ri-star-half-fill"></i>`;
            } else {
                starsHtml += `<i class="ri-star-line"></i>`;
            }
        }

        const priceStr = prod.price.toFixed(2);
        const [dollars, cents] = priceStr.split('.');
        const originalPriceHtml = prod.originalPrice ? `<span class="original-price">₹${prod.originalPrice.toLocaleString()}</span>` : '';

        return `
            <div class="product-card" data-product-id="${prod.id}">
                <div class="card-image-wrap pointer-btn" onclick="openQuickView('${prod.id}')">
                    <img src="${prod.image}" alt="${prod.name}">
                    <button class="quick-view-overlay-btn">
                        <i class="ri-eye-line"></i> Quick View
                    </button>
                </div>
                <span class="product-cat-tag">${prod.category}</span>
                <h4 class="product-title-text pointer-btn" onclick="openQuickView('${prod.id}')">${prod.name}</h4>
                
                <div class="rating-block">
                    <div class="stars-container">${starsHtml}</div>
                    <span class="reviews-cnt">(${prod.reviewsCount.toLocaleString()})</span>
                </div>

                <div class="price-block">
                    <span class="price-symbol">₹</span>
                    <span class="price-val">${parseInt(dollars).toLocaleString()}</span>
                    <span class="price-cents">.${cents}</span>
                    ${originalPriceHtml}
                </div>

                <button class="card-add-btn pointer-btn" onclick="handleCardAddToCart('${prod.id}', this)">
                    Add to Cart
                </button>
            </div>
        `;
    }).join('');
}

// --- Cart Panel Actions ---
function setupCartDrawerEvents() {
    dom.cartTriggerBtn.addEventListener('click', toggleCartDrawer);
    dom.closeCartBtn.addEventListener('click', toggleCartDrawer);
    dom.cartOverlay.addEventListener('click', toggleCartDrawer);

    if (dom.drawerShopNowBtn) {
        dom.drawerShopNowBtn.addEventListener('click', () => {
            toggleCartDrawer();
            resetFilters();
        });
    }

    dom.checkoutBtn.addEventListener('click', handleCheckout);
}

function toggleCartDrawer() {
    dom.cartOverlay.classList.toggle('open');
    dom.cartDrawerPanel.classList.toggle('open');
}

function handleCardAddToCart(productId, buttonNode) {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const size = product.options.sizes[0];
    const color = product.options.colors[0];

    addToCart(productId, 1, { size, color });

    buttonNode.classList.add('success');
    buttonNode.innerHTML = `<i class="ri-checkbox-circle-fill"></i> Added`;

    setTimeout(() => {
        buttonNode.classList.remove('success');
        buttonNode.innerHTML = `Add to Cart`;
    }, 1800);
}

function addToCart(productId, qty = 1, options = {}) {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIdx = cart.findIndex(item => 
        item.productId === productId && 
        item.options.size === options.size && 
        item.options.color === options.color
    );

    if (existingIdx !== -1) {
        cart[existingIdx].quantity += qty;
    } else {
        cart.push({
            productId,
            quantity: qty,
            options: {
                size: options.size || "Standard",
                color: options.color || "Standard"
            }
        });
    }

    saveCartToStorage();
    renderCart();

    showToast("Added to Cart", `${product.name} has been added to your shopping cart.`, "success");
}

function renderCart() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => {
        const prod = MOCK_PRODUCTS.find(p => p.id === item.productId);
        return acc + (prod ? prod.price * item.quantity : 0);
    }, 0);

    dom.cartCountBadge.textContent = totalItems;
    dom.cartTotalQtyBadge.textContent = totalItems;
    dom.cartSubtotalAmount.textContent = `₹${totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    if (cart.length === 0) {
        dom.cartItemsContainer.innerHTML = `
            <div class="empty-cart-view">
                <i class="ri-shopping-basket-2-line empty-cart-icon"></i>
                <p>Your shopping cart is empty.</p>
                <button class="shop-now-btn" id="drawer-shop-now-btn">Shop Deals Now</button>
            </div>
        `;
        document.getElementById('drawer-shop-now-btn').onclick = () => {
            toggleCartDrawer();
            resetFilters();
        };
        dom.cartSummaryFooter.style.display = "none";
        return;
    }

    dom.cartSummaryFooter.style.display = "block";
    dom.cartItemsContainer.innerHTML = cart.map((item, index) => {
        const prod = MOCK_PRODUCTS.find(p => p.id === item.productId);
        if (!prod) return '';

        return `
            <div class="cart-item-row" data-cart-index="${index}">
                <div class="cart-item-img">
                    <img src="${prod.image}" alt="${prod.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${prod.name}</h4>
                    <span class="cart-item-option">Size: ${item.options.size} | Color: ${item.options.color}</span>
                    
                    <div class="cart-item-controls">
                        <div class="qty-stepper">
                            <button class="qty-btn" onclick="adjustItemQty(${index}, -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="adjustItemQty(${index}, 1)">+</button>
                        </div>
                        <button class="item-delete-btn" onclick="removeItemFromCart(${index})">Delete</button>
                    </div>
                </div>
                <div class="cart-item-price">₹${(prod.price * item.quantity).toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

window.adjustItemQty = function(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            removeItemFromCart(index);
            return;
        }
        saveCartToStorage();
        renderCart();
    }
};

window.removeItemFromCart = function(index) {
    if (cart[index]) {
        const prod = MOCK_PRODUCTS.find(p => p.id === cart[index].productId);
        cart.splice(index, 1);
        saveCartToStorage();
        renderCart();
        if (prod) {
            showToast("Item Removed", `${prod.name} was removed from your cart.`, "info");
        }
    }
};

function handleCheckout() {
    if (cart.length === 0) return;

    dom.cartItemsContainer.innerHTML = `
        <div class="checkout-success-view">
            <div class="success-icon-wrap">
                <i class="ri-check-line"></i>
            </div>
            <h3 style="font-weight:700; font-size:16px;">Order Placed Successfully!</h3>
            <p style="font-size:12px; color:#555;">Thank you for shopping. A confirmation email and tracking link will be sent to your account.</p>
            <button class="shop-now-btn" id="checkout-done-btn" style="margin-top: 12px; font-weight:700;">Continue Shopping</button>
        </div>
    `;
    
    dom.cartSummaryFooter.style.display = "none";
    
    cart = [];
    saveCartToStorage();
    dom.cartCountBadge.textContent = "0";

    document.getElementById('checkout-done-btn').onclick = () => {
        toggleCartDrawer();
        resetFilters();
    };
}

// --- Quick View Modal Rendering ---
function setupModalEvents() {
    dom.closeModalBtn.addEventListener('click', closeModal);
    dom.quickViewModal.addEventListener('click', (e) => {
        if (e.target === dom.quickViewModal) {
            closeModal();
        }
    });
}

function closeModal() {
    dom.quickViewModal.classList.remove('open');
}

window.openQuickView = function(productId) {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    selectedModalOptions.size = product.options.sizes[0];
    selectedModalOptions.color = product.options.colors[0];

    const specsHtml = product.specs.map(spec => 
        `<li><span>${spec.label}:</span> ${spec.value}</li>`
    ).join('');

    const sizesHtml = product.options.sizes.map((size, idx) => 
        `<span class="option-bubble size-bubble ${idx === 0 ? 'selected' : ''}" onclick="selectModalSize(this, '${size}')">${size}</span>`
    ).join('');

    const colorsHtml = product.options.colors.map((color, idx) => 
        `<span class="option-bubble color-bubble ${idx === 0 ? 'selected' : ''}" onclick="selectModalColor(this, '${color}')">${color}</span>`
    ).join('');

    const thumbsHtml = product.thumbnails.map((thumb, idx) => 
        `<div class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="changeModalMainImage(this, '${thumb}')">
            <img src="${thumb}" alt="thumbnail">
         </div>`
    ).join('');

    dom.modalDetailsGrid.innerHTML = `
        <!-- Left Column -->
        <div class="modal-image-col">
            <div class="modal-main-img">
                <img src="${product.image}" alt="${product.name}" id="modal-main-image-node">
            </div>
            <div class="modal-thumbnails">
                ${thumbsHtml}
            </div>
        </div>

        <!-- Right Column -->
        <div class="modal-details-col">
            <span class="modal-cat">${product.category}</span>
            <h3 class="modal-title">${product.name}</h3>
            
            <p class="modal-desc">${product.description}</p>
            
            <div class="specs-list">
                <h4>Product Details & Specs</h4>
                <ul>
                    ${specsHtml}
                </ul>
            </div>

            <div class="options-selectors">
                <div class="option-select-group">
                    <label>Choose Variant/Size</label>
                    <div class="options-wrap">
                        ${sizesHtml}
                    </div>
                </div>
                <div class="option-select-group">
                    <label>Choose Color</label>
                    <div class="options-wrap">
                        ${colorsHtml}
                    </div>
                </div>
            </div>

            <div class="modal-purchase-row">
                <div class="modal-price-display">
                    <span class="modal-price-label">Price:</span>
                    <span class="modal-price-num">₹${product.price.toLocaleString()}</span>
                </div>
                <button class="modal-add-btn pointer-btn" onclick="handleModalAddToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    dom.quickViewModal.classList.add('open');
};

window.selectModalSize = function(node, value) {
    document.querySelectorAll('.size-bubble').forEach(b => b.classList.remove('selected'));
    node.classList.add('selected');
    selectedModalOptions.size = value;
};

window.selectModalColor = function(node, value) {
    document.querySelectorAll('.color-bubble').forEach(b => b.classList.remove('selected'));
    node.classList.add('selected');
    selectedModalOptions.color = value;
};

window.changeModalMainImage = function(node, src) {
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    node.classList.add('active');
    document.getElementById('modal-main-image-node').src = src;
};

window.handleModalAddToCart = function(productId) {
    addToCart(productId, 1, {
        size: selectedModalOptions.size,
        color: selectedModalOptions.color
    });
    closeModal();
};

// --- Toast System ---
function showToast(title, desc, type = "success") {
    const toastNode = document.createElement('div');
    toastNode.className = `toast toast-${type}`;
    
    const icon = type === 'success' ? 'ri-checkbox-circle-line' : 'ri-information-line';
    
    toastNode.innerHTML = `
        <i class="${icon} toast-icon"></i>
        <div class="toast-text">
            <span class="toast-title">${title}</span>
            <p class="toast-desc">${desc}</p>
        </div>
        <button class="toast-close-btn" aria-label="Close Alert"><i class="ri-close-line"></i></button>
    `;

    dom.toastContainer.appendChild(toastNode);

    setTimeout(() => {
        toastNode.classList.add('show');
    }, 50);

    const dismissTimer = setTimeout(() => {
        dismissToast(toastNode);
    }, 4500);

    toastNode.querySelector('.toast-close-btn').addEventListener('click', () => {
        clearTimeout(dismissTimer);
        dismissToast(toastNode);
    });
}

function dismissToast(node) {
    node.classList.remove('show');
    setTimeout(() => {
        node.remove();
    }, 300);
}

// --- Footer & Scroll Helpers ---
function setupScrollEvents() {
    dom.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            dom.backToTopBtn.style.opacity = "1";
        } else {
            dom.backToTopBtn.style.opacity = "0.9";
        }
    });
}
