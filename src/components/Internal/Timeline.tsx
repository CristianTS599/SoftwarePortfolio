// Internal type
import type { TimelineEntry } from "../types/TimelineEntry"

// Internal components
import Pulse from "./Pulse"

const ExpHover = (
  e: React.MouseEvent<HTMLDivElement>,
  entry: TimelineEntry
) => {
  const dot = e.currentTarget.querySelector<HTMLDivElement>("[data-dot]")

  if (dot && !entry.current) {
    dot.style.borderColor = "var(--accent-software)"
  }
}

const ExpLeave = (
  e: React.MouseEvent<HTMLDivElement>,
  entry: TimelineEntry
) => {
  const dot = e.currentTarget.querySelector<HTMLDivElement>("[data-dot]")
  if (dot && !entry.current) {
    dot.style.borderColor = "var(--main-text)"
  }
}

export function Timeline({
  timelineEntries,
  timelineId,
  isProjectVariant,
}: {
  timelineEntries: TimelineEntry[]
  timelineId: string
  isProjectVariant: boolean
}) {
  return (
    <section id={`${timelineId}Timeline`} className="">
      <div className="hidden md:mx-auto md:block md:max-w-5xl md:px-12">
        <div className="relative flex flex-col">
          <div
            className="pointer-events-none absolute top-2 bottom-2 w-px"
            style={{
              left: "calc(var(--left-exp-col) + var(--exp-gutter))",
              background: "var(--main-text)",
            }}
          />

          {timelineEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="group relative grid"
              style={{
                gridTemplateColumns: "var(--left-exp-col) 1fr",
                columnGap: "calc(var(--exp-gutter) * 2)",
                paddingBottom:
                  index < timelineEntries.length - 1 ? "2.75rem" : 0,
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
                  {entry.subtitle}
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
                  {entry.goal ? (
                    <p className="text-sm">
                      <span style={{ color: "var(--accent-software)" }}>
                        Goal:{" "}
                      </span>
                      {entry.goal}
                    </p>
                  ) : (
                    ""
                  )}

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
      <div className="mx-5 flex flex-col md:hidden">
        {timelineEntries.map((entry) => {
          return (
            <>
              <div className="flex flex-row items-center">
                <div
                  className="col-auto me-10 text-lg"
                  style={{ color: "var(--foreground-subtle)" }}
                >
                  {isProjectVariant ? (
                    <span>{entry.title}</span>
                  ) : (
                    <span>{entry.subtitle}</span>
                  )}
                </div>
                <div className="col-auto">
                  {isProjectVariant ? (
                    <span>{entry.subtitle}</span>
                  ) : (
                    <span>{entry.title}</span>
                  )}
                </div>
              </div>

              <div className="ms-5 mb-2 flex flex-row text-muted">
                <div className="col-auto me-5">
                  <span>{entry.dates}</span>
                </div>
                <div className="col-1">
                  {entry.current ? <Pulse label="Current" /> : ""}
                </div>
              </div>

              <div className="mb-10 pl-6">
                <ul className="flex flex-col gap-2">
                  {entry.goal ? (
                    <p className="text-sm">
                      <span style={{ color: "var(--accent-software)" }}>
                        Goal:{" "}
                      </span>
                      {entry.goal}
                    </p>
                  ) : (
                    ""
                  )}

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
            </>
          )
        })}
      </div>
    </section>
  )
}
