// Internal type
import { PortfolioPhases } from "../../../content/PortfolioPhases"
import { Timeline } from "../../Timeline"

// shadcn
import { Badge } from "../../../ui/badge"
import StatusBadge from "../../StatusBadge"

function PortfolioBody() {
  return (
    <>
      <section id="PortfolioBody" className="py-24">
        <Timeline timelineEntries={PortfolioPhases} timelineId="Portfolio" />
      </section>
    </>
  )
}

function PortfolioFooter() {
  return (
    <div className="flex flex-row flex-wrap">
      <Badge className="mx-2 text-emerald-700" variant="outline">
        React
      </Badge>

      <Badge className="mx-2 text-emerald-700" variant="outline">
        Shadcn-ui
      </Badge>

      <StatusBadge status="Complete" statusText="Completed / Active Upkeep" />
    </div>
  )
}

export { PortfolioBody, PortfolioFooter }
