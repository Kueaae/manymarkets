'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

export default function Product3D({ color = '#FFCC00' }: { color?: string }) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '180px' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}