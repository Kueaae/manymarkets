"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Product3D from "@/components/Product3D";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="splash flex flex-col items-center justify-center min-h-screen bg-[#1E293B] text-white">
      <div className="splash-content text-center flex flex-col items-center">
        
        {/* เรียกใช้ Product3D แบบส่ง imageUrl เหมือนหน้า Home */}
        <div className="w-36 h-36 mb-4">
          <Product3D 
            imageUrl="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Bags.png" 
            alt="MarketPlace Logo" 
          />
        </div>

        <h1 className="text-3xl font-bold mb-1">MarketPlace</h1>
        <p className="text-slate-400 text-sm mb-6">College Marketplace</p>

        <div className="loading w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="loading-bar w-full h-full bg-[#82C47C] animate-pulse" />
        </div>
      </div>
    </main>
  );
}