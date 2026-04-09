// Internal type
import { FinancialPhases } from "../../../content/FinancialPhases"
import { Timeline } from "../../Timeline"

// Internal components
import { Badge } from "../../../ui/badge"

function FinancialBody() {
  return (
    <>
      <section id="FinancialBody" className="flex flex-col pt-10 pb-24">
        <Timeline timelineEntries={FinancialPhases} timelineId="Financial" />
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
