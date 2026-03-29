import { Badge } from "../../../ui/badge"
import GithubInvertocatWhite from "@/components/svg/GithubInvertocatWhite"

function VRBody() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          id="VRScene"
          className="h-98 w-[70%] rounded-lg bg-olive-800 text-center text-3xl"
        >
          Hello VR Body!
        </div>
      </div>
    </>
  )
}

function VRFooter() {
  return (
    <>
      <div className="text-md space-around flex flex-row text-muted">
        <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
          Three.js
        </Badge>
        <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
          JavaScript
        </Badge>
        <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
          HTML
        </Badge>

        <GithubInvertocatWhite
          tooltip="Take a glance at the code!"
          href="https://github.com/CristianTS599/PortfolioThreeJS"
          newTab={true}
        />
      </div>
    </>
  )
}

export { VRBody, VRFooter }
