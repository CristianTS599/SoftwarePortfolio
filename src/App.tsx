import Hero from "./components/Internal/Hero.tsx"
import Projects from "./components/Internal/Projects.tsx"
import { Experience } from "./components/Internal/Experience.tsx"
import EmailForm from "./components/Internal/EmailForm.tsx"
import { useParams } from "react-router-dom"
import Navbar from "./components/Internal/Navbar.tsx"
import { Toaster } from "./components/ui/sonner.tsx"

export function App() {
  let params = useParams()
  let test = params.userId

  console.log(`Params Test. Found value: ${test} for user ID`)

  return (
    <div className="mb-30">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <EmailForm />
      <Toaster />
    </div>
  )
}

export default App
