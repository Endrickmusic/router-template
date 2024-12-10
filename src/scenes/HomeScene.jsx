// scenes/HomeScene.jsx
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function HomeScene() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
      <pointLight position={[1, 3, 2]} intensity={30} />
    </>
  )
}
