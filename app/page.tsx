"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Product3D from "@/components/Product3D"; // Import จาก components

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

// ...ในส่วนของ product-grid:
<div className="product-grid">
  {products.map((product) => (
    <article className="product-card overflow-hidden" key={product.name}>
      
      {/* เรียกใช้ Component Product3D ตรงนี้ */}
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