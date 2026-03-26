import { StrictMode } from "react"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { TooltipProvider } from "./components/ui/tooltip.tsx"

const root = document.getElementById("root") as HTMLElement

ReactDom.createRoot(root).render(
  <BrowserRouter>
    <TooltipProvider>
      <StrictMode>
        <ThemeProvider>
          <Routes>
            <Route path="/:userId" element={<App />} />
            <Route path="*" element={<App />} />
          </Routes>
        </ThemeProvider>
      </StrictMode>
    </TooltipProvider>
  </BrowserRouter>
)
