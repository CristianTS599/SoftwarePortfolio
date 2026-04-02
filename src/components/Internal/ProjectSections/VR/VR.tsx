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
      <div className="flex flex-col items-center">
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
