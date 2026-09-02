"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Product3D from "@/components/Product3D";

const categories = [
  { icon: "📚", name: "Books" },
  { icon: "💻", name: "Tech" },
  { icon: "👕", name: "Fashion" },
  { icon: "🍔", name: "Food" },
  { icon: "🎮", name: "Games" },
  { icon: "📦", name: "Others" },
];

// ใช้รูปภาพ Microsoft Fluent 3D Emoji ตามประเภทสินค้า
const products = [
  {
    name: "Programming Book",
    price: 180,
    seller: "Nate",
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Books.png",
  },
  {
    name: "Wireless Mouse",
    price: 299,
    seller: "Mark",
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Computer%20Mouse.png",
  },
  {
    name: "College Hoodie",
    price: 450,
    seller: "Jane",
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Running%20Shirt.png",
  },
  {
    name: "Gaming Keyboard",
    price: 790,
    seller: "Beam",
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Keyboard.png",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">

      {/* Navbar */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">🛍️</div>
          <span>MarketPlace</span>
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="icon-button">🛒</button>
          <button className="profile-button">👤</button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <span className="badge">COLLEGE MARKETPLACE</span>
          <h1>
            Buy & Sell
            <br />
            <span>Within Your Campus.</span>
          </h1>
          <p>
            Find great products from students around your college.
            Sell your unused stuff easily.
          </p>
        </div>

        {/* Search */}
        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search products..." />
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="section-header">
          <h2>Categories</h2>
          <button className="view-all">View all →</button>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button className="category-card" key={category.name}>
              <div className="category-icon">{category.icon}</div>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="section-header">
          <div>
            <h2>Recommended</h2>
            <p className="section-subtitle">Popular products around campus</p>
          </div>
          <button className="view-all">View all →</button>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card overflow-hidden" key={product.name}>
              
              {/* ส่วนรูป 3D Emoji */}
              <div className="product-image relative w-full h-48">
                <Product3D imageUrl={product.image3D} alt={product.name} />
                <button className="favorite absolute top-3 right-3 z-10">
                  ♡
                </button>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="seller">Sold by {product.seller}</p>

                <div className="product-bottom">
                  <strong>฿{product.price}</strong>
                  <button className="add-button">+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sell Banner */}
      <section className="sell-banner">
        <div>
          <span>💰</span>
          <div>
            <h2>Have something to sell?</h2>
            <p>Turn your unused items into extra cash.</p>
          </div>
        </div>
        <button>+ Sell Product</button>
      </section>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="active">
          <span>⌂</span> Home
        </button>
        <button>
          <span>⌕</span> Search
        </button>
        <button className="sell-button">
          <span>＋</span>
        </button>
        <button>
          <span>🛒</span> Cart
        </button>
        <button>
          <span>👤</span> Profile
        </button>
      </nav>

    </main>
  );
}