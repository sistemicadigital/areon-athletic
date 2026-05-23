'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* Floating particle field */
function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00e5ff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

/* Wireframe rotating torus — sport ring motif */
function TorusRing({
  position,
  color,
  speed,
  radius,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  radius: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed;
      ref.current.rotation.y += delta * speed * 0.6;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.018, 12, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.18} wireframe />
    </mesh>
  );
}

/* Floating icosahedron — DNA/molecule feel */
function FloatingSphere({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.004;
      ref.current.rotation.y += 0.006;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} wireframe />
    </mesh>
  );
}

/* Grid plane */
function GridFloor() {
  return (
    <gridHelper
      args={[30, 30, '#00e5ff', '#00e5ff']}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
      // @ts-ignore
      material-transparent
      // @ts-ignore
      material-opacity={0.06}
    />
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} color="#00e5ff" intensity={0.8} />
        <pointLight position={[-5, -3, -5]} color="#ff003c" intensity={0.6} />

        <ParticleField />

        <TorusRing position={[-3.5, 1, -2]} color="#00e5ff" speed={0.3}  radius={1.4} />
        <TorusRing position={[3.5,  -1, -3]} color="#ff003c" speed={0.2}  radius={1.1} />
        <TorusRing position={[0,   2.5, -4]} color="#00e5ff" speed={0.15} radius={2.0} />

        <FloatingSphere position={[-2.5, -1, -1]} color="#00e5ff" speed={0.7} />
        <FloatingSphere position={[2.8,   1.5, -2]} color="#ff003c" speed={0.5} />

        <GridFloor />
      </Canvas>
    </div>
  );
}
