import Navbar from "./components/Internal/Navbar.tsx"
import Hero from "./components/Internal/Hero.tsx"
import Projects from "./components/Internal/Projects.tsx"

export function App() {
  return (
    <div className="mb-30">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
