// Internal type
import { BenchPhases } from "../../../content/BenchPhases"
import { Timeline } from "../../Timeline"

// Internal components
import { Badge } from "../../../ui/badge"

function BenchBody() {
  return (
    <div className="">
      <div className="text-center text-lg">Bench CAD drawings coming soon!</div>
      <section id="PortfolioProgress" className="pt-15 pb-24">
        <Timeline timelineEntries={BenchPhases} timelineId="Bench" />
      </section>
    </div>
  )
}

function BenchFooter() {
  return (
    <div className="flex flex-row flex-wrap">
      <Badge className="mx-2 text-emerald-700" variant="outline">
        CAD
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        3D Printing
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Carpentry
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span className="text-amber-700">Design Phase</span>
      </Badge>
    </div>
  )
}

export { BenchBody, BenchFooter }
