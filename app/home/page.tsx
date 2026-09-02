"use client";

import dynamic from "next/dynamic";
import ThemeToggle from "@/components/ThemeToggle";

// โหลด 3D Component แบบ Dynamic (Client-side Rendering Only)
const Product3D = dynamic(() => import("@/components/Product3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-800/20 animate-pulse rounded-lg" />
  ),
});

const categories = [
  { icon: "📚", name: "Books" },
  { icon: "💻", name: "Tech" },
  { icon: "👕", name: "Fashion" },
  { icon: "🍔", name: "Food" },
  { icon: "🎮", name: "Games" },
  { icon: "📦", name: "Others" },
];

// เพิ่ม property color ให้แต่ละสินค้า เพื่อใช้แสดงผล 3D
const products = [
  {
    name: "Programming Book",
    price: 180,
    seller: "Nate",
    color: "#ff5964", // สีแดงส้ม
  },
  {
    name: "Wireless Mouse",
    price: 299,
    seller: "Mark",
    color: "#35a7ff", // สีฟ้า
  },
  {
    name: "College Hoodie",
    price: 450,
    seller: "Jane",
    color: "#38b000", // สีเขียว
  },
  {
    name: "Gaming Keyboard",
    price: 790,
    seller: "Beam",
    color: "#ffca3a", // สีเหลือง
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
            Find great products from students around your college. Sell your
            unused stuff easily.
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
            <article className="product-card" key={product.name}>
              {/* เปลี่ยนตรงนี้: นำ Product3D มาวางแทน Text Emoji เดิม */}
              <div className="product-image relative w-full h-48 overflow-hidden rounded-t-xl">
                <Product3D color={product.color} />
                <button className="favorite absolute top-2 right-2 z-10">
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
          <span>⌂</span>
          Home
        </button>
        <button>
          <span>⌕</span>
          Search
        </button>
        <button className="sell-button">
          <span>＋</span>
        </button>
        <button>
          <span>🛒</span>
          Cart
        </button>
        <button>
          <span>👤</span>
          Profile
        </button>
      </nav>
    </main>
  );
}