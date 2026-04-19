import { Badge } from "../../../ui/badge"
import GithubInvertocatWhite from "@/components/svg/GithubInvertocatWhite"
import { useEffect, useRef } from "react"
import { InitVRScene } from "./VRScene.ts"

function VRBody() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const cleanup = InitVRScene(canvasRef.current)
    return cleanup
  }, [])

  return (
    <>
      <div id="VRBody" className="flex flex-col items-center">
        <canvas
          id="VRScene"
          ref={canvasRef}
          className="h-98 w-[70%] rounded-lg bg-olive-800 text-center text-3xl"
        />
      </div>
    </>
  )
}

function VRFooter() {
  return (
    <>
      <div className="text-md space-around flex flex-row flex-wrap text-muted">
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Three.js
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          JavaScript
        </Badge>

        <Badge className="mx-2 text-emerald-700" variant="outline">
          Completed:
          <span style={{ color: "var(--main-text)" }} className="text-muted">
            Mar, 2023
          </span>
        </Badge>

        <GithubInvertocatWhite
          tooltip="See the code modified for React, for this portfolio."
          href="https://github.com/CristianTS599/SoftwarePortfolio/blob/master/src/components/Internal/ProjectSections/VR/VRScene.ts"
          newTab={true}
          text="Three.js Code"
        />
      </div>
    </>
  )
}

export { VRBody, VRFooter }
