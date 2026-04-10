// Internal type
import { Experiences } from "../content/Experience"
import { Timeline } from "./Timeline"

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="ms-5 mb-3">
        <p
          style={{ color: "var(--muted-foreground)" }}
          className="text-sm text-muted"
        >
          // Where I've Worked
        </p>
        <p className="font-serif text-4xl text-muted-foreground">Experience</p>
      </div>
      <Timeline
        timelineEntries={Experiences}
        timelineId="Experience"
        isProjectVariant={false}
      />
    </section>
  )
}
