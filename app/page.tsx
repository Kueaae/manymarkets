"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="splash">
      <div className="splash-content">
        <div className="logo">
          <span>🛍️</span>
        </div>

        <h1>MarketPlace</h1>

        <p>College Marketplace</p>

        <div className="loading">
          <div className="loading-bar" />
        </div>
      </div>
    </main>
  );
}