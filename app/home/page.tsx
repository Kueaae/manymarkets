"use client";

import { useMemo, useState } from "react";
import Product3D from "../components/Product3D";
import ThemeToggle from "../components/ThemeToggle";

type Product = {
  id: string;
  emoji: string;
  name: string;
  price: number;
  condition: "ของใหม่" | "สภาพดี" | "มือสอง";
  category: string;
  meta: string;
};

const CATEGORIES = [
  "ทั้งหมด",
  "หนังสือ",
  "อิเล็กทรอนิกส์",
  "เสื้อผ้า",
  "ของใช้หอพัก",
  "อื่นๆ",
];

const PRODUCTS: Product[] = [
  { id: "p1", emoji: "📚", name: "ตำราแคลคูลัส 1", price: 180, condition: "มือสอง", category: "หนังสือ", meta: "คณะวิศวะ · ตึก A" },
  { id: "p2", emoji: "💻", name: "โน้ตบุ๊กทำงาน", price: 8500, condition: "มือสอง", category: "อิเล็กทรอนิกส์", meta: "หอใน · นัดรับได้" },
  { id: "p3", emoji: "👕", name: "เสื้อคณะรุ่นพี่", price: 150, condition: "สภาพดี", category: "เสื้อผ้า", meta: "ไซส์ M · ส่งฟรีในรั้ว" },
  { id: "p4", emoji: "🚲", name: "จักรยานพับ", price: 1200, condition: "มือสอง", category: "อื่นๆ", meta: "หอ 5 · ล้อ 20 นิ้ว" },
  { id: "p5", emoji: "🎧", name: "หูฟังไร้สาย", price: 690, condition: "ของใหม่", category: "อิเล็กทรอนิกส์", meta: "แกะกล่อง · ประกัน 6 ด." },
  { id: "p6", emoji: "🛋️", name: "โซฟาหอพัก", price: 950, condition: "มือสอง", category: "ของใช้หอพัก", meta: "นัดรับเอง · หอ 3" },
  { id: "p7", emoji: "☕", name: "เครื่องชงกาแฟมือ", price: 450, condition: "สภาพดี", category: "ของใช้หอพัก", meta: "ใช้น้อย · แถมแก้ว" },
  { id: "p8", emoji: "🎮", name: "จอยเกมไร้สาย", price: 590, condition: "มือสอง", category: "อิเล็กทรอนิกส์", meta: "เทสแล้ว · เล่นได้ปกติ" },
];

const CONDITION_STYLE: Record<Product["condition"], string> = {
  ของใหม่: "text-[var(--color-mint-price)]",
  สภาพดี: "text-[var(--color-poster-yellow)]",
  มือสอง: "opacity-70",
};

function formatBaht(n: number) {
  return new Intl.NumberFormat("th-TH").format(n);
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === "ทั้งหมด" || p.category === activeCategory;
      const matchesQuery = p.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-dvh pb-24" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-10 border-b px-4 pb-3 pt-4 backdrop-blur-md"
        style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
      >
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-[family-name:var(--font-display)] text-lg font-semibold">
            ตลาดนัดแคมปัส
          </h1>
          <ThemeToggle />
        </div>

        <label className="mt-3 flex items-center gap-2 rounded-full border px-4 py-2.5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" opacity="0.6" />
            <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="หาของที่อยากได้..."
            className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
          />
        </label>

        <div className="mt-3 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
          {CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
                style={
                  active
                    ? { background: "var(--color-poster-yellow)", borderColor: "var(--color-poster-yellow)", color: "#1A1A1E" }
                    : { borderColor: "var(--border)", background: "var(--surface)" }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </header>

      {/* Product grid */}
      <main className="px-4 pt-5">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-base font-semibold">ของใหม่วันนี้</h2>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {filtered.length} รายการ
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed px-6 py-16 text-center" style={{ borderColor: "var(--border)" }}>
            <Product3D emoji="🔍" size={40} />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              ไม่พบของที่ค้นหา ลองเปลี่ยนคำหรือหมวดหมู่ดูนะ
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <article
                key={product.id}
                className="rounded-2xl border p-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})`,
                }}
              >
                <Product3D emoji={product.emoji} size={44} delay={i * 0.2} />
                <h3 className="mt-1 line-clamp-1 text-sm font-medium">{product.name}</h3>
                <p className="mt-0.5 line-clamp-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  {product.meta}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: "var(--color-mint-price)" }}>
                    ฿{formatBaht(product.price)}
                  </span>
                  <span className={`text-[11px] ${CONDITION_STYLE[product.condition]}`}>
                    {product.condition}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Bottom nav (mobile) */}
      <nav
        className="fixed inset-x-0 bottom-0 z-10 border-t px-2 py-2"
        style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 92%, transparent)", backdropFilter: "blur(10px)" }}
      >
        <div className="mx-auto flex max-w-md items-center justify-between">
          <NavItem label="หน้าแรก" active>
            <path d="M4 11.5 12 4l8 7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 10v9h12v-9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </NavItem>
          <NavItem label="ค้นหา">
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <path d="M20 20l-3.5-3.5" strokeWidth="2" strokeLinecap="round" />
          </NavItem>
          <button
            type="button"
            aria-label="ลงขายของ"
            className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
            style={{ background: "var(--color-signal-coral)" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 5v14M5 12h14" stroke="#FFF" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </button>
          <NavItem label="แชท">
            <path d="M4 5h16v11H8l-4 4V5Z" strokeWidth="2" strokeLinejoin="round" />
          </NavItem>
          <NavItem label="โปรไฟล์">
            <circle cx="12" cy="8" r="3.2" strokeWidth="2" />
            <path d="M5 20c1.6-3.6 4.3-5.4 7-5.4S17.4 16.4 19 20" strokeWidth="2" strokeLinecap="round" />
          </NavItem>
        </div>
      </nav>
    </div>
  );
}

function NavItem({
  children,
  label,
  active = false,
}: {
  children: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className="flex w-14 flex-col items-center gap-0.5 py-1"
      style={{ color: active ? "var(--text)" : "var(--text-muted)" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        {children}
      </svg>
      <span className="text-[10px]">{label}</span>
    </button>
  );
}