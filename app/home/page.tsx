"use client";

import Product3D from "@/components/Product3D";

const products = [
  {
    name: "เสื้อช็อปนักศึกษา",
    price: 250,
    seller: "เจมส์",
    category: "เสื้อผ้า",
    condition: "มือสองสภาพดี",
    rating: 4.8,
    // รูป 3D เสื้อผ้า
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Running%20Shirt.png",
  },
  {
    name: "หูฟัง Bluetooth",
    price: 590,
    seller: "นนท์",
    category: "อุปกรณ์ไอที",
    condition: "มือสองสภาพดี",
    rating: 4.8,
    // รูป 3D หูฟัง
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Headphone.png",
  },
  {
    name: "กระเป๋าเป้",
    price: 350,
    seller: "มิน",
    category: "แฟชั่น",
    condition: "มือสองสภาพดี",
    rating: 4.8,
    // รูป 3D กระเป๋า
    image3D: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Backpack.png",
  },
];

export default function HomePage() {
  return (
    <main className="p-6 bg-[#f4f7f4] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product) => (
          <article key={product.name} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              {/* ส่วนแสดงผลรูป 3D พร้อมพื้นหลังเขียวพาสเทลแบบในรูป */}
              <div className="relative w-full h-52 mb-4">
                <Product3D imageUrl={product.image3D} alt={product.name} />

                {/* Badge แท็กหมวดหมู่มุมซ้ายบน */}
                <span className="absolute top-3 left-3 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                  {product.category}
                </span>

                {/* ปุ่ม Favorite มุมขวาบน */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:bg-white transition-all">
                  ♡
                </button>

                {/* Badge สภาพสินค้ามุมซ้ายล่าง */}
                <span className="absolute bottom-3 left-3 bg-[#2D5A3C] text-white text-[10px] px-2.5 py-1 rounded-md font-medium">
                  {product.condition}
                </span>
              </div>

              {/* รายละเอียดสินค้า */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
                <span className="text-xs text-amber-500 font-semibold flex items-center gap-0.5">
                  ★ {product.rating}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                ขายโดย {product.seller}
              </p>
            </div>

            {/* ส่วนราคาและปุ่มกดดูสินค้า */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-50">
              <div>
                <span className="text-xs text-slate-400 block">ราคา</span>
                <strong className="text-xl font-bold text-slate-900">฿{product.price}</strong>
              </div>

              <button className="bg-[#E2EFE0] text-[#3B6645] hover:bg-[#d2e5cf] text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1">
                ดูสินค้า →
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}