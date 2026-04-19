// Internal type
import { ControlPhases } from "../../../content/ControlPhases"
import { Timeline } from "../../Timeline"

// Internal components
import { Badge } from "../../../ui/badge"

function ControlsBody() {
  return (
    <div className="">
      <section id="PortfolioProgress" className="pt-15 pb-24">
        <Timeline timelineEntries={ControlPhases} timelineId="Controls" />
      </section>
    </div>
  )
}

function ControlsFooter() {
  return (
    <div className="flex flex-row flex-wrap">
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span className="text-amber-700">Design Phase</span>
      </Badge>
    </div>
  )
}

export { ControlsBody, ControlsFooter }
