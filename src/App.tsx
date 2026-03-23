import Navbar from "./components/Internal/Navbar.tsx"
import Hero from "./components/Internal/Hero.tsx"
import Projects from "./components/Internal/Projects.tsx"
import { Experience } from "./components/Internal/Experience.tsx"
import EmailForm from "./components/Internal/EmailForm.tsx"
import { Email } from "@hugeicons/core-free-icons"

export function App() {
  return (
    <div className="mb-30">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <EmailForm />
    </div>
  )
}

export default App
