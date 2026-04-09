// Internal type
import { PortfolioPhases } from "../../../content/PortfolioPhases"
import { Timeline } from "../../Timeline"

// Internal components
import GithubInvertocatWhite from "@/components/svg/GithubInvertocatWhite"

import { Badge } from "../../../ui/badge"

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
    <div>
      <GithubInvertocatWhite
        tooltip="Take a glance at the code!"
        href="https://github.com/CristianTS599/SoftwarePortfolio"
        newTab={true}
      />

      <Badge className="mx-2 text-emerald-700" variant="outline">
        Created: <span style={{ color: "var(--main-text)" }}>Mar, 2026</span>
      </Badge>

      <Badge className="mx-2 text-emerald-700" variant="outline">
        Early Release Status:{" "}
        <span className="text-blue-600">Work In Progress</span>
      </Badge>
    </div>
  )
}

export { PortfolioBody, PortfolioFooter }
