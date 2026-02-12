import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef();

  // Create random points in a sphere
  const positions = useMemo(() => {
    const data = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const r = 10 + THREE.MathUtils.randFloatSpread(5);

      data[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      data[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      data[i * 3 + 2] = r * Math.cos(theta);
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[5, 2, -5]} rotation={[1, 2, 1]}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhongMaterial color="#7b61ff" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-5, -3, -8]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshPhongMaterial color="#00ffaa" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, 5, -12]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshPhongMaterial color="#00d4ff" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#7b61ff" intensity={1} />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
