// components/Root.jsx
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useOutlet, useMatches } from "react-router-dom"

export function Root() {
  const outlet = useOutlet()
  const matches = useMatches()

  // Filter and render content based on context
  const sceneContent = matches.map((match) => {
    if (match.handle?.context === "scene") {
      return match.children
    }
    return null
  })

  const overlayContent = matches.map((match) => {
    if (match.handle?.context === "overlay") {
      return match.children
    }
    return null
  })

  return (
    <div className="w-screen h-screen relative">
      <Canvas
        className="absolute top-0 left-0 z-0"
        camera={{ position: [0, 0, 5] }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {sceneContent}
        </Suspense>
      </Canvas>

      <div className="absolute top-0 left-0 z-10 w-full h-full pointer-events-none">
        {overlayContent}
      </div>
    </div>
  )
}
