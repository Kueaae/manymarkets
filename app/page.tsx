"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Product3D = dynamic(() => import("@/components/Product3D"), {
  ssr: false,
  loading: () => (
    <div className="w-28 h-28 mx-auto rounded-full bg-yellow-400/20 animate-pulse" />
  ),
});

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
        <div className="logo w-32 h-32 mx-auto flex items-center justify-center">
          <Product3D color="#FFCC00" />
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