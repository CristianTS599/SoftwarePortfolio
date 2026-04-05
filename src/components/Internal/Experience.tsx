// Internal type
import type { ExperienceEntry } from "../types/ExperienceEntry"
import { Experiences } from "../content/Experience"

// Internal components
import Pulse from "./Pulse"

const ExpHover = (
  e: React.MouseEvent<HTMLDivElement>,
  entry: ExperienceEntry
) => {
  const dot = e.currentTarget.querySelector<HTMLDivElement>("[data-dot]")

  if (dot && !entry.current) {
    dot.style.borderColor = "var(--accent-software)"
  }
}

const ExpLeave = (
  e: React.MouseEvent<HTMLDivElement>,
  entry: ExperienceEntry
) => {
  const dot = e.currentTarget.querySelector<HTMLDivElement>("[data-dot]")
  if (dot && !entry.current) {
    dot.style.borderColor = "var(--main-text)"
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-12">
        <div className="mb-3">
          <p
            style={{ color: "var(--muted-foreground)" }}
            className="text-sm text-muted"
          >
            // Where I've Worked
          </p>
          <p className="font-serif text-4xl text-muted-foreground">
            Experience
          </p>
        </div>

        <div className="relative flex flex-col">
          <div
            className="pointer-events-none absolute top-2 bottom-2 w-px"
            style={{
              left: "calc(var(--left-exp-col) + var(--exp-gutter))",
              background: "var(--main-text)",
            }}
          />

          {Experiences.map((entry, index) => (
            <div
              key={entry.id}
              className="group relative grid"
              style={{
                gridTemplateColumns: "var(--left-exp-col) 1fr",
                columnGap: "calc(var(--exp-gutter) * 2)",
                paddingBottom: index < Experiences.length - 1 ? "2.75rem" : 0,
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
                  {entry.company}
                </span>
                <span
                  className="text-xs leading-snug"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {entry.role}
                </span>
                <span
                  className="font-mono-dm mt-0.5 text-xs"
                  style={{
                    color: "var(--foreground-subtle)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {entry.dates}
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
                    ? "var(--accent-software-lop)"
                    : "var(--background)",
                  border: `1.5px solid ${entry.current ? "var(--accent-software)" : "var(--main-text)"}`,
                }}
              />
              <div className="pl-6">
                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-sm leading-relaxed"
                      style={{
                        color: bullet.highlight
                          ? "var(--accent-software)"
                          : "var(--main-text)",
                      }}
                    >
                      <span
                        className="absolute top-0.5 left-0 text-xs select-none"
                        style={{
                          color: bullet.highlight
                            ? "var(--accent-software)"
                            : "var(--main-text)",
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
                              border: "0.5px solid var(--accent-software)",
                              color: "var(--accent-software)",
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
  )
}
