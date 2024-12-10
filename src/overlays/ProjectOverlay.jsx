// overlays/ProjectOverlay.jsx
import { Link, useParams } from "react-router-dom"

export function ProjectOverlay() {
  const { id } = useParams()

  return (
    <div className="p-8 pointer-events-auto">
      <Link to="/" className="text-white hover:text-blue-400 mb-4 block">
        ← Back to Home
      </Link>
      <h1 className="text-white text-4xl">Project {id}</h1>
      <p className="text-white mt-4">
        This is the detailed view of project {id}.
      </p>
    </div>
  )
}
