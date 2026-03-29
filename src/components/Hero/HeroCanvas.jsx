import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'

function AmbientShape({ mouse }) {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x += 0.003
    mesh.current.rotation.y += 0.005
    mesh.current.position.x += (mouse.current.x * 0.8 - mesh.current.position.x) * 0.05
    mesh.current.position.y += (mouse.current.y * 0.4 - mesh.current.position.y) * 0.05
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.2, 0.35, 200, 20]} />
        <MeshDistortMaterial
          color="#A78BFA"
          wireframe
          distort={0.2}
          speed={2}
          opacity={0.35}
          transparent
        />
      </mesh>
    </Float>
  )
}

export default function HeroCanvas({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#64FFDA" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#A78BFA" />
      <AmbientShape mouse={mouse} />
    </Canvas>
  )
}