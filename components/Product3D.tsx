'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

interface Product3DProps {
  color?: string;
  imageUrl?: string;
  alt?: string;
}

export default function Product3D({ color, imageUrl, alt = '3D Product' }: Product3DProps) {
  // 1. ถ้าส่ง imageUrl มา จะแสดงผลเป็นรูปภาพ 3D Emoji PNG
  if (imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-b from-slate-800/40 to-slate-900/60 relative group rounded-t-xl overflow-hidden">
        <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300" />
        <img
          src={imageUrl}
          alt={alt}
          className="w-28 h-28 object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out group-hover:scale-110 animate-float"
        />
      </div>
    );
  }

  // 2. ถ้าส่ง color มา (หรือใน SplashScreen) จะรัน Three.js Canvas 3D Sphere หมุนได้จริง
  return (
    <div className="w-full h-full min-h-[120px] relative">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        
        <Float speed={3} rotationIntensity={0.6} floatIntensity={0.6}>
          <mesh>
            <sphereGeometry args={[1.2, 64, 64]} />
            <meshStandardMaterial color={color || '#FFCC00'} roughness={0.2} metalness={0.1} />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}