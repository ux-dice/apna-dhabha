// =============================================
// APNA DHABHA - Main JavaScript
// Author: Apna Dhabha Team
// =============================================

// ---- Food Data (15 Indian Dishes) ----
const foodData = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    desc: "Creamy tomato-based curry with soft paneer cubes, aromatic spices and fresh cream.",
    price: 220,
    originalPrice: 280,
    rating: 4.7,
    category: "curry",
    type: "veg",
    emoji: "🧆",
    popular: true,
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice layered with spiced chicken, fried onions and saffron.",
    price: 299,
    originalPrice: 350,
    rating: 4.8,
    category: "rice",
    type: "nonveg",
    emoji: "🍛",
    popular: true,
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Chole Bhature",
    desc: "Fluffy deep-fried bread served with spicy chickpea curry, pickled onions & chutney.",
    price: 160,
    originalPrice: 200,
    rating: 4.5,
    category: "snacks",
    type: "veg",
    emoji: "🫓",
    popular: true,
    img: "https://images.unsplash.com/photo-1626132647523-66c9e63f1fba?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "Butter Chicken",
    desc: "Tender chicken in rich, buttery tomato-cream sauce with kasuri methi.",
    price: 280,
    originalPrice: 330,
    rating: 4.9,
    category: "curry",
    type: "nonveg",
    emoji: "🍗",
    popular: true,
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils in butter and cream — a Punjabi classic.",
    price: 180,
    originalPrice: 220,
    rating: 4.6,
    category: "curry",
    type: "veg",
    emoji: "🍲",
    popular: false,
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "Aloo Paratha",
    desc: "Crispy wheat flatbread stuffed with spiced potato filling. Served with butter & curd.",
    price: 120,
    originalPrice: 150,
    rating: 4.4,
    category: "bread",
    type: "veg",
    emoji: "🫔",
    popular: false,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    name: "Seekh Kabab",
    desc: "Spiced minced lamb skewers grilled in tandoor, served with mint chutney.",
    price: 260,
    originalPrice: 300,
    rating: 4.7,
    category: "starters",
    type: "nonveg",
    emoji: "🍢",
    popular: false,
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    name: "Palak Paneer",
    desc: "Cottage cheese cubes in smooth, spiced spinach gravy — nutritious & delicious.",
    price: 200,
    originalPrice: 240,
    rating: 4.5,
    category: "curry",
    type: "veg",
    emoji: "🥘",
    popular: false,
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=400&h=250&fit=crop"
  },
  {
    id: 9,
    name: "Masala Chai",
    desc: "Hot ginger cardamom tea brewed with full-cream milk and aromatic spices.",
    price: 40,
    originalPrice: 55,
    rating: 4.8,
    category: "drinks",
    type: "veg",
    emoji: "🍵",
    popular: true,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
  },
  {
    id: 10,
    name: "Mutton Rogan Josh",
    desc: "Slow-cooked Kashmiri mutton in bold, aromatic red gravy with whole spices.",
    price: 360,
    originalPrice: 420,
    rating: 4.6,
    category: "curry",
    type: "nonveg",
    emoji: "🍖",
    popular: false,
    img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=250&fit=crop"
  },
  {
    id: 11,
    name: "Gulab Jamun",
    desc: "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup. Served warm.",
    price: 80,
    originalPrice: 100,
    rating: 4.9,
    category: "sweets",
    type: "veg",
    emoji: "🍮",
    popular: true,
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
  },
  {
    id: 12,
    name: "Tandoori Roti",
    desc: "Freshly baked whole wheat bread from the clay oven, brushed with butter.",
    price: 30,
    originalPrice: 40,
    rating: 4.3,
    category: "bread",
    type: "veg",
    emoji: "🫓",
    popular: false,
    img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=250&fit=crop"
  },
  {
    id: 13,
    name: "Samosa (2 pcs)",
    desc: "Crispy golden pastry stuffed with spiced potatoes and peas. Served with chutney.",
    price: 60,
    originalPrice: 80,
    rating: 4.6,
    category: "snacks",
    type: "veg",
    emoji: "🔺",
    popular: true,
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
  },
  {
    id: 14,
    name: "Lassi (Sweet)",
    desc: "Chilled thick yoghurt drink blended with sugar, rose water and cardamom.",
    price: 70,
    originalPrice: 90,
    rating: 4.7,
    category: "drinks",
    type: "veg",
    emoji: "🥛",
    popular: false,
    img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=250&fit=crop"
  },
  {
    id: 15,
    name: "Egg Bhurji Pav",
    desc: "Scrambled spiced eggs cooked with onions, tomatoes and green chillies with toasted pav.",
    price: 110,
    originalPrice: 140,
    rating: 4.4,
    category: "snacks",
    type: "nonveg",
    emoji: "🍳",
    popular: false,
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=250&fit=crop"
  }
];

// ---- Cart State ----
let cart = JSON.parse(localStorage.getItem('apna_dhabha_cart')) || [];

// ---- Save Cart ----
function saveCart() {
  localStorage.setItem('apna_dhabha_cart', JSON.stringify(cart));
  updateCartBadge();
}

// ---- Update Cart Badge ----
function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

// ---- Toast Notification ----
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✅' : '❌';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ---- Get Cart Item ----
function getCartItem(id) {
  return cart.find(i => i.id === id);
}

// ---- Add / Update Cart ----
function addToCart(id) {
  const food = foodData.find(f => f.id === id);
  if (!food) return;
  const existing = getCartItem(id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...food, qty: 1 });
    showToast(`${food.name} added to cart! 🛒`);
  }
  saveCart();
  refreshCardControls(id);
}

function removeFromCartOne(id) {
  const existing = getCartItem(id);
  if (!existing) return;
  if (existing.qty > 1) {
    existing.qty--;
  } else {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  refreshCardControls(id);
}

// ---- Refresh card button state ----
function refreshCardControls(id) {
  const card = document.querySelector(`.food-card[data-id="${id}"]`);
  if (!card) return;
  const cartItem = getCartItem(id);
  const actionArea = card.querySelector('.card-action');
  if (!actionArea) return;

  if (cartItem) {
    actionArea.innerHTML = `
      <div class="qty-control">
        <button class="qty-btn" onclick="removeFromCartOne(${id})">−</button>
        <span class="qty-num">${cartItem.qty}</span>
        <button class="qty-btn" onclick="addToCart(${id})">+</button>
      </div>`;
  } else {
    actionArea.innerHTML = `
      <button class="add-to-cart-btn" onclick="addToCart(${id})">
        <span>🛒</span> Add to Cart
      </button>`;
  }
}

// ---- Render Food Cards ----
function renderFoodCards(data) {
  const grid = document.getElementById('food-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <span class="emoji">🔍</span>
        <h3>No items found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>`;
    return;
  }

  grid.innerHTML = data.map(food => {
    const cartItem = getCartItem(food.id);
    const actionHTML = cartItem
      ? `<div class="qty-control">
           <button class="qty-btn" onclick="removeFromCartOne(${food.id})">−</button>
           <span class="qty-num">${cartItem.qty}</span>
           <button class="qty-btn" onclick="addToCart(${food.id})">+</button>
         </div>`
      : `<button class="add-to-cart-btn" onclick="addToCart(${food.id})">
           <span>🛒</span> Add to Cart
         </button>`;

    return `
    <div class="food-card" data-id="${food.id}" data-type="${food.type}" data-category="${food.category}" data-price="${food.price}">
      <div class="food-card-img-wrap">
        <img class="food-card-img" src="${food.img}" alt="${food.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/f4a261/ffffff?text=${encodeURIComponent(food.emoji)}'">
        <span class="food-tag ${food.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
          ${food.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
        </span>
        ${food.popular ? '<span class="food-badge-popular">⭐ Popular</span>' : ''}
      </div>
      <div class="food-card-body">
        <div class="food-card-name">${food.name}</div>
        <div class="food-card-desc">${food.desc}</div>
        <div class="food-card-footer">
          <div class="food-card-price">
            ₹${food.price}
            ${food.originalPrice ? `<span>₹${food.originalPrice}</span>` : ''}
          </div>
          <div class="food-card-rating">⭐ ${food.rating}</div>
        </div>
        <div class="card-action">${actionHTML}</div>
      </div>
    </div>`;
  }).join('');
}

// ---- Filter & Search Logic ----
let activeFilter = 'all';
let activeCategory = 'all';
let searchQuery = '';
let sortOrder = 'default';

function applyFilters() {
  let filtered = [...foodData];

  // Search
  if (searchQuery) {
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(searchQuery) ||
      f.desc.toLowerCase().includes(searchQuery) ||
      f.category.toLowerCase().includes(searchQuery)
    );
  }
  // Type filter
  if (activeFilter === 'veg') filtered = filtered.filter(f => f.type === 'veg');
  if (activeFilter === 'nonveg') filtered = filtered.filter(f => f.type === 'nonveg');

  // Category filter
  if (activeCategory !== 'all') filtered = filtered.filter(f => f.category === activeCategory);

  // Sort
  if (sortOrder === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortOrder === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  renderFoodCards(filtered);
}

// ---- Init Home Page ----
function initHomePage() {
  renderFoodCards(foodData);

  // Search
  const searchInput = document.getElementById('search-input');
  const searchBtn   = document.getElementById('search-btn');
  const heroSearch  = document.getElementById('hero-search');

  function doSearch(val) {
    searchQuery = val.toLowerCase().trim();
    // Scroll to menu section
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
    applyFilters();
    // update hero search box too
    if (heroSearch) heroSearch.value = val;
    if (searchInput) searchInput.value = val;
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); applyFilters(); });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => doSearch(heroSearch?.value || ''));
  }
  if (heroSearch) {
    heroSearch.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(heroSearch.value); });
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Category pills
  document.querySelectorAll('.category-pill[data-cat]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill[data-cat]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.cat;
      applyFilters();
    });
  });

  // Sort select
  const sortSel = document.getElementById('sort-select');
  if (sortSel) {
    sortSel.addEventListener('change', e => { sortOrder = e.target.value; applyFilters(); });
  }
}

// ---- CART PAGE ----
function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const emptyCart = document.getElementById('empty-cart');
  const cartLayout = document.getElementById('cart-layout');
  if (!container) return;

  if (cart.length === 0) {
    if (emptyCart) emptyCart.classList.remove('hidden');
    if (cartLayout) cartLayout.classList.add('hidden');
    return;
  }

  if (emptyCart) emptyCart.classList.add('hidden');
  if (cartLayout) cartLayout.classList.remove('hidden');

  container.innerHTML = cart.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80/f4a261/ffffff?text=${encodeURIComponent(item.emoji)}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-tag">${item.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}</div>
        <div class="cart-item-price">₹${item.price} each</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="cartQtyChange(${item.id}, -1)">−</button>
          <span class="qty-num" id="qty-${item.id}">${item.qty}</span>
          <button class="qty-btn" onclick="cartQtyChange(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-total" id="total-${item.id}">₹${item.price * item.qty}</div>
      <button class="remove-btn" onclick="removeCartItem(${item.id})" title="Remove">🗑️</button>
    </div>`).join('');

  updateSummary();
}

function cartQtyChange(id, delta) {
  const item = getCartItem(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCartPage();
    showToast('Item removed from cart', 'error');
    return;
  }
  saveCart();
  const qtyEl    = document.getElementById(`qty-${id}`);
  const totalEl  = document.getElementById(`total-${id}`);
  if (qtyEl)   qtyEl.textContent   = item.qty;
  if (totalEl) totalEl.textContent = `₹${item.price * item.qty}`;
  updateSummary();
}

function removeCartItem(id) {
  const item = getCartItem(id);
  const name = item?.name || 'Item';
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartPage();
  showToast(`${name} removed from cart`, 'error');
}

function updateSummary() {
  const subtotal  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery  = subtotal > 0 ? (subtotal >= 300 ? 0 : 40) : 0;
  const tax       = Math.round(subtotal * 0.05);
  const total     = subtotal + delivery + tax;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summary-subtotal', `₹${subtotal}`);
  set('summary-delivery', delivery === 0 ? 'FREE' : `₹${delivery}`);
  set('summary-tax', `₹${tax}`);
  set('summary-total', `₹${total}`);

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  // Save totals for checkout page
  localStorage.setItem('apna_dhabha_order_total', JSON.stringify({ subtotal, delivery, tax, total }));
}

// ---- CHECKOUT PAGE ----
function initCheckoutPage() {
  const totals = JSON.parse(localStorage.getItem('apna_dhabha_order_total')) || {};
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || '—'; };
  set('chk-subtotal', totals.subtotal ? `₹${totals.subtotal}` : '');
  set('chk-delivery', totals.delivery === 0 ? 'FREE' : `₹${totals.delivery || 40}`);
  set('chk-tax', totals.tax ? `₹${totals.tax}` : '');
  set('chk-total', totals.total ? `₹${totals.total}` : '');

  // Render mini cart summary
  const miniCart = document.getElementById('checkout-items-list');
  if (miniCart) {
    miniCart.innerHTML = cart.map(item => `
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dashed var(--border)">
        <span style="font-size:1.4rem">${item.emoji}</span>
        <span style="flex:1;font-size:0.9rem;font-weight:500">${item.name} x${item.qty}</span>
        <span style="font-weight:700;color:var(--primary)">₹${item.price * item.qty}</span>
      </div>`).join('');
  }

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Place order form
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      placeOrder();
    });
  }
}

function placeOrder() {
  const orderId = 'AD' + Date.now().toString().slice(-8).toUpperCase();
  document.getElementById('order-id-display').textContent = `Order ID: ${orderId}`;
  document.getElementById('success-modal').classList.remove('hidden');
  // Clear cart
  cart = [];
  saveCart();
}

// ---- Dark Mode ----
function initDarkMode() {
  const toggle = document.getElementById('dark-toggle');
  const isDark = localStorage.getItem('apna_dhabha_dark') === 'true';
  if (isDark) document.body.classList.add('dark-mode');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('apna_dhabha_dark', document.body.classList.contains('dark-mode'));
    });
  }
}

// ---- Hamburger Menu ----
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navbar-links');
  if (!ham || !nav) return;
  ham.addEventListener('click', () => {
    nav.classList.toggle('open');
    ham.classList.toggle('open');
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      ham.classList.remove('open');
    }
  });
}

// ---- Loading Screen ----
function initLoader() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  setTimeout(() => loader.classList.add('hidden'), 1400);
}

// ---- Active Nav Link ----
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ---- Page Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initDarkMode();
  initHamburger();
  initActiveNav();
  updateCartBadge();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '' || page === 'menu.html') {
    initHomePage();
  }
  if (page === 'cart.html') {
    renderCartPage();
  }
  if (page === 'checkout.html') {
    initCheckoutPage();
  }
});
