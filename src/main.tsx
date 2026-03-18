import { StrictMode } from "react"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = document.getElementById("root") as HTMLElement

ReactDom.createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<App />} />
        </Routes>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
)
