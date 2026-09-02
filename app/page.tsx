"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Product3D from "./components/Product3D";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/home");
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 1900);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="[animation-name:splash-pop] [animation-duration:0.7s] [animation-timing-function:cubic-bezier(0.34,1.56,0.64,1)] [animation-fill-mode:both]">
        <Product3D emoji="🛍️" size={72} />
      </div>

      <div
        className="[animation-name:splash-pop] [animation-delay:0.15s] [animation-duration:0.7s] [animation-timing-function:cubic-bezier(0.34,1.56,0.64,1)] [animation-fill-mode:both]"
      >
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
          ตลาดนัดแคมปัส
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          ซื้อขายในรั้วมหาวิทยาลัย นัดรับง่าย ไม่ต้องส่งไกล
        </p>
      </div>

      <div className="mt-2 flex gap-1.5" aria-hidden>
        {[0, 0.15, 0.3].map((delay) => (
          <span
            key={delay}
            className="h-2 w-2 rounded-full [animation-name:dot-bounce] [animation-iteration-count:infinite]"
            style={{
              background: "var(--color-poster-yellow)",
              animationDuration: "1.1s",
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>
    </main>
  );
}