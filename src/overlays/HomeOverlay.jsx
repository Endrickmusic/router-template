// overlays/HomeOverlay.jsx
import { Link } from "react-router-dom"

export function HomeOverlay() {
  return (
    <div className="absolute top-0 left-0 p-8 pointer-events-auto">
      <h1 className="text-white text-4xl mb-4">Welcome to My Portfolio</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/project/1" className="text-white hover:text-blue-400">
              Project 1
            </Link>
          </li>
          <li>
            <Link to="/project/2" className="text-white hover:text-blue-400">
              Project 2
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
