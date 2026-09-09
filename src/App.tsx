import Hero from "./components/Internal/Hero.tsx"
import Projects from "./components/Internal/Projects.tsx"
import { Experience } from "./components/Internal/Experience.tsx"
import EmailForm from "./components/Internal/EmailForm.tsx"
import Navbar from "./components/Internal/Navbar.tsx"
import { Toaster } from "./components/ui/sonner.tsx"
import { Analytics } from "@vercel/analytics/react"

export function App() {
  return (
    <div className="mb-30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <EmailForm />
      </main>
      <Toaster />
      {/* cookieless pageview tracking; only reports from the Vercel deploy */}
      <Analytics />
    </div>
  )
}

export default App
