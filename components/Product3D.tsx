'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF, ContactShadows } from '@react-three/drei';

interface Product3DProps {
  modelUrl?: string; // ลิงก์ไฟล์ .glb หรือ .gltf
  color?: string;
  imageUrl?: string;
  alt?: string;
}

// Component สำหรับโหลดไฟล์โมเดล 3D (.glb)
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.8} position={[0, -0.2, 0]} />;
}

export default function Product3D({ modelUrl, color, imageUrl, alt = '3D Product' }: Product3DProps) {
  // 1. ถ้าส่ง modelUrl (.glb) มา จะเรนเดอร์เป็น 3D โมเดลสมจริงแบบในรูป
  if (modelUrl) {
    return (
      <div className="w-full h-full min-h-[180px] relative flex items-center justify-center bg-[#E5EFE4]/60 rounded-t-xl overflow-hidden">
        <Canvas camera={{ position: [0, 1, 4.5], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} />
          <pointLight position={[-5, -2, -2]} intensity={0.5} />

          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <Model url={modelUrl} />
            </Float>
            {/* เงาทอดลงพื้นนุ่มๆ แบบในรูป */}
            <ContactShadows position={[0, -1.2, 0]} opacity={0.35} scale={5} blur={2} far={4} />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    );
  }

  // 2. ถ้าส่ง imageUrl มา (กรณีใช้รูปภาพ PNG สำรอง)
  if (imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 bg-[#E5EFE4]/60 relative group rounded-t-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={alt}
          className="w-28 h-28 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out group-hover:scale-105 animate-float"
        />
      </div>
    );
  }

  // 3. กรณีเป็น Three.js Sphere (ใช้ใน SplashScreen)
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