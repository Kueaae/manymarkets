'use client';

import { useState } from 'react';

interface Product3DProps {
  imageUrl?: string;
  alt?: string;
}

export default function Product3D({ imageUrl, alt = 'Product Image' }: Product3DProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-full bg-[#C8E4C4] rounded-2xl flex items-center justify-center relative overflow-hidden group">
      {/* วงกลมแสงละมุนด้านหลัง */}
      <div className="absolute w-32 h-32 bg-white/30 rounded-full blur-xl group-hover:scale-110 transition-all duration-500" />

      {!imgError && imageUrl ? (
        <div className="relative flex flex-col items-center justify-center">
          {/* ตัว 3D Emoji พร้อม Animation ลอย */}
          <img
            src={imageUrl}
            alt={alt}
            onError={() => setImgError(true)}
            className="w-28 h-28 object-contain z-10 animate-float transition-transform duration-300 group-hover:scale-105"
          />
          {/* เงาทอดลงพื้นแบบซอฟต์ๆ เหมือนสไตล์ Claymorphism */}
          <div className="w-20 h-3 bg-black/15 rounded-full blur-sm mt-1 animate-pulse" />
        </div>
      ) : (
        <div className="text-5xl animate-float">📦</div>
      )}
    </div>
  );
}