import Hero from "./components/Internal/Hero.tsx"
import Projects from "./components/Internal/Projects.tsx"
import { Experience } from "./components/Internal/Experience.tsx"
import EmailForm from "./components/Internal/EmailForm.tsx"
import Navbar from "./components/Internal/Navbar.tsx"
import { Toaster } from "./components/ui/sonner.tsx"
//import ProjectsTwo from "./components/Internal/ProjectsTwo.tsx"

export function App() {
  return (
    <div className="mb-30">
      <Navbar />
      <Hero />
      <Projects />
      {/*<ProjectsTwo /> */}
      <Experience />
      <EmailForm />
      <Toaster />
    </div>
  )
}

export default App
