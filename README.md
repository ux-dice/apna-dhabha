# 🍛 Apna Dhabha — Food Ordering Website

> A modern, Zomato-inspired Indian food ordering web app built with pure HTML, CSS, and JavaScript.

---

## 📌 Project Description (For College Submission)

**Apna Dhabha** is a fully functional, responsive food ordering website inspired by platforms like Zomato. It simulates an authentic Indian dhaba experience online — with a warm orange-red color palette, mouth-watering food listings, real-time cart management, and a smooth checkout flow.

This project demonstrates front-end web development skills including dynamic DOM manipulation, localStorage for state persistence, responsive design with CSS Grid & Flexbox, smooth animations, dark mode, and modern UX patterns.

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Markup      | HTML5 (Semantic)                    |
| Styling     | CSS3 (Variables, Grid, Flexbox, Animations) |
| Logic       | Vanilla JavaScript (ES6+)           |
| Storage     | Browser localStorage API            |
| Fonts       | Google Fonts (Playfair Display + Poppins) |
| Backend     | None — fully static                 |

---

## ✨ Features

- 🏠 **Homepage** — Hero banner, search, categories, filter, food grid
- 📋 **Menu Page** — Full food listing with filtering & sorting
- 🛒 **Cart Page** — Add/remove items, quantity control, bill summary
- 💳 **Checkout Page** — Delivery form, payment options, order confirmation
- 🌙 **Dark Mode** — Persistent toggle via localStorage
- 🔍 **Live Search** — Filter food items dynamically as you type
- 🏷️ **Filters** — Veg / Non-Veg / Price sorting / Category pills
- 🔔 **Toast Notifications** — "Added to cart" feedback
- ⏳ **Loading Animation** — Branded splash screen
- 📱 **Fully Responsive** — Mobile + Tablet + Desktop

---

## 📁 Project Structure

```
apna-dhabha/
├── index.html          # Homepage
├── menu.html           # Full menu page
├── cart.html           # Cart page
├── checkout.html       # Checkout & order placement
├── css/
│   └── style.css       # All styles (theme, components, responsive)
├── js/
│   └── script.js       # All logic (data, cart, filters, rendering)
└── README.md           # This file
```

---

## 🚀 How to Run Locally

### Method 1: Just open in browser (Simplest)
1. Download / clone the project folder
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge)
3. That's it! No server needed.

### Method 2: Using VS Code Live Server (Recommended)
1. Open the project folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **"Open with Live Server"**
4. Browser auto-opens at `http://127.0.0.1:5500`

### Method 3: Using Python (if installed)
```bash
cd apna-dhabha
python -m http.server 3000
# Open http://localhost:3000 in browser
```

### Method 4: Using Node.js serve
```bash
npx serve .
# Follow the URL shown in terminal
```

---

## 🍽️ Menu Items Included (15 Dishes)

| # | Dish | Type | Price |
|---|------|------|-------|
| 1 | Paneer Butter Masala | 🟢 Veg | ₹220 |
| 2 | Chicken Biryani | 🔴 Non-Veg | ₹299 |
| 3 | Chole Bhature | 🟢 Veg | ₹160 |
| 4 | Butter Chicken | 🔴 Non-Veg | ₹280 |
| 5 | Dal Makhani | 🟢 Veg | ₹180 |
| 6 | Aloo Paratha | 🟢 Veg | ₹120 |
| 7 | Seekh Kabab | 🔴 Non-Veg | ₹260 |
| 8 | Palak Paneer | 🟢 Veg | ₹200 |
| 9 | Masala Chai | 🟢 Veg | ₹40 |
| 10 | Mutton Rogan Josh | 🔴 Non-Veg | ₹360 |
| 11 | Gulab Jamun | 🟢 Veg | ₹80 |
| 12 | Tandoori Roti | 🟢 Veg | ₹30 |
| 13 | Samosa (2 pcs) | 🟢 Veg | ₹60 |
| 14 | Lassi (Sweet) | 🟢 Veg | ₹70 |
| 15 | Egg Bhurji Pav | 🔴 Non-Veg | ₹110 |

---

## 🎨 Design Highlights

- **Colors**: Warm Indian palette — `#e63946` (red), `#f4a261` (orange), `#f7c948` (gold)
- **Fonts**: Playfair Display (headings) + Poppins (body)
- **Animations**: Float emojis, card hover lift, toast slide-in, modal pop-in
- **Layout**: CSS Grid responsive food card system

---

## 👨‍💻 Built By

Made with ❤️ and lots of 🧈 ghee for college project submission.

**Subject**: Web Technology / Full Stack Development  
**Project Type**: Frontend Mini Project  

---

*© 2024 Apna Dhabha — Ghar Jaisa Khana*
