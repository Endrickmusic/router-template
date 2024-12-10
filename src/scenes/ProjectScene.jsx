// scenes/ProjectScene.jsx
import { useParams } from "react-router-dom"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export function ProjectScene() {
  const { id } = useParams()
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshStandardMaterial color="#4ecdc4" />
    </mesh>
  )
}
