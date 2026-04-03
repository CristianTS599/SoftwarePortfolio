// Internal type
import type { ProjectPhase } from "../../../types/ProjectTypes"
import { FinancialPhases } from "../../../content/FinancialPhases"

// Internal components
import Pulse from "../../Pulse"

import { Badge } from "../../../ui/badge"

const ExpHover = (e: React.MouseEvent<HTMLDivElement>, entry: ProjectPhase) => {
  const dot = e.currentTarget.querySelector<HTMLDivElement>("[data-dot]")

  if (dot && !entry.current) {
    dot.style.borderColor = "var(--accent-software)"
  }
}

const ExpLeave = (e: React.MouseEvent<HTMLDivElement>, entry: ProjectPhase) => {
  const dot = e.currentTarget.querySelector<HTMLDivElement>("[data-dot]")
  if (dot && !entry.current) {
    dot.style.borderColor = "rgba(232,230,223,0.2)"
  }
}

function FinancialBody() {
  return (
    <>
      <section id="FinancialBody" className="flex flex-col pt-10 pb-24">
        <div className="mb-10 place-items-center">
          <img src="src/assets/FinancialDb.png" width="60%" />
          <div className="mt-1 text-muted">
            First Draft - Early Database Design.
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-12">
          <div className="relative flex flex-col">
            <div
              className="pointer-events-none absolute top-2 bottom-2 w-px"
              style={{
                left: "calc(var(--left-exp-col) + var(--exp-gutter))",
                background: "rgba(232,230,223,0.07)",
              }}
            />

            {FinancialPhases.map((entry, index) => (
              <div
                key={entry.id}
                className="group relative grid"
                style={{
                  gridTemplateColumns: "var(--left-exp-col) 1fr",
                  columnGap: "calc(var(--exp-gutter) * 2)",
                  paddingBottom:
                    index < FinancialPhases.length - 1 ? "2.75rem" : 0,
                }}
                onMouseEnter={(e) => {
                  ExpHover(e, entry)
                }}
                onMouseLeave={(e) => {
                  ExpLeave(e, entry)
                }}
              >
                <div className="flex flex-col gap-1 pt-0.5 pr-6 text-right">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {entry.title}
                  </span>
                  <span
                    className="text-xs leading-snug"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {entry.status}
                  </span>
                  <span
                    className="font-mono-dm mt-0.5 text-xs"
                    style={{
                      color: "var(--foreground-subtle)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {entry.completedate}
                  </span>
                  {entry.current && (
                    <Pulse label="current" classNames="self-end" />
                  )}
                </div>
                <div
                  data-dot
                  className="absolute top-1.5 z-10 h-2.5 w-2.5 rounded-full transition-colors duration-200"
                  style={{
                    left: "calc(var(--left-exp-col) + var(--exp-gutter))",
                    transform: "translateX(-50%)",
                    background: entry.current
                      ? "rgba(29,158,117,0.15)"
                      : "#111210",
                    border: `1.5px solid ${entry.current ? "var(--accent-software)" : "rgba(232,230,223,0.2)"}`,
                  }}
                />
                <div className="pl-6">
                  <ul className="flex flex-col gap-2">
                    <p className="text-sm">
                      <span className="text-emerald-700">Goal: </span>
                      {entry.goal}
                    </p>
                    {entry.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-sm leading-relaxed"
                        style={{
                          color: bullet.highlight
                            ? "rgba(232,230,223,0.72)"
                            : "rgba(232,230,223,0.5)",
                        }}
                      >
                        <span
                          className="absolute top-0.5 left-0 text-xs select-none"
                          style={{
                            color: bullet.highlight
                              ? "var(--accent-software)"
                              : "rgba(232,230,223,0.18)",
                          }}
                        >
                          —
                        </span>
                        {bullet.text}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="font-mono-dm rounded px-2 py-0.5 text-xs"
                        style={
                          tag.accent
                            ? {
                                border: "0.5px solid rgba(93,202,165,0.25)",
                                color: "rgba(93,202,165,0.7)",
                                background: "rgba(29,158,117,0.05)",
                              }
                            : {
                                border: "0.5px solid var(--border)",
                                color: "var(--foreground-subtle)",
                              }
                        }
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FinancialFooter() {
  return (
    <>
      <div className="text-muted">
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Database: SQL Server Db
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          API: .Net Core API
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Web Client: React, Shadcn-ui, TypeScript, Tanstack Query
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Mobile Client: TBD
        </Badge>
        <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
          Status: <span className="text-blue-600">Work In Progress</span>
        </Badge>
      </div>
    </>
  )
}

export { FinancialBody, FinancialFooter }
