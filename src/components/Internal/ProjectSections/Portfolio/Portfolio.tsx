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
    <div className="flex flex-row flex-wrap">
      <GithubInvertocatWhite
        tooltip="Take a glance at the code!"
        href="https://github.com/CristianTS599/SoftwarePortfolio"
        newTab={true}
      />

      <Badge className="mx-2 text-emerald-700" variant="outline">
        Created: <span style={{ color: "var(--main-text)" }}>Mar, 2026</span>
      </Badge>

      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span style={{ color: "var(--main-text)" }}>WIP</span>
      </Badge>
    </div>
  )
}

export { PortfolioBody, PortfolioFooter }
