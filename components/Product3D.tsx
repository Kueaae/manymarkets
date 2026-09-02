'use client';

interface Product3DProps {
  imageUrl: string;
  alt: string;
}

export default function Product3D({ imageUrl, alt }: Product3DProps) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-b from-slate-800/40 to-slate-900/60 relative group rounded-t-xl overflow-hidden">
      {/* แสงวงกลมเรืองแสงด้านหลัง */}
      <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300" />

      {/* รูปภาพ 3D Emoji มีเงา ขยายเมื่อ Hover และลอยขึ้นลง */}
      <img
        src={imageUrl}
        alt={alt}
        className="w-28 h-28 object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out group-hover:scale-110 animate-float"
      />
    </div>
  );
}