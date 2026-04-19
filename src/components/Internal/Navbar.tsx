import { useState } from "react"
import PIR from "../svg/PIR"

const navLinks = [
  { label: "Projects>", href: "#projects" },
  { label: "Experience>", href: "#experience" },
  { label: "Contact>", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative w-full">
      <div className="item-center mx-5 my-5 flex content-center items-center justify-between md:my-5 md:justify-start md:px-5">
        <div>
          <PIR />
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((lnk, idx) => {
            return (
              <a key={idx} className="nav-lnk-crsr" href={lnk.href}>
                {lnk.label}
              </a>
            )
          })}
        </div>

        <div className="my-5">
          <button
            className="flex h-8 w-8 flex-col items-center justify-end gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Navigation Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="mt-2 flex flex-col items-center gap-5 border-t py-5">
              {navLinks.map((nLnk) => {
                return (
                  <a
                    key={nLnk.href}
                    className="nav-lnk-crsr"
                    onClick={() => setOpen(false)}
                    href={nLnk.href}
                  >
                    {nLnk.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
