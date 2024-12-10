// src/App.jsx
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense } from "react"

import { HomeScene } from "./scenes/HomeScene"
import { ProjectScene } from "./scenes/ProjectScene"
import { HomeOverlay } from "./overlays/HomeOverlay"
import { ProjectOverlay } from "./overlays/ProjectOverlay"

function Root() {
  return (
    <div className="h-screen w-screen">
      <HomeOverlay />
      <Canvas>
        <color attach="background" args={[0xffabdd]} />
        <Suspense fallback={null}>
          <HomeScene />
        </Suspense>
      </Canvas>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
