import { Badge } from "@/components/ui/badge"
import ProjectCarousel from "../../ProjectCarousel"

function VWBuildBody() {
  return (
    <div id="VWBuildBody" className="text-3xl">
      <ProjectCarousel
        imgPath="src/assets/ProjectImgs/VWBuild"
        imgCount={13}
        imgPrefix="VWB"
      />
    </div>
  )
}

function VWBuildFooter() {
  return (
    <>
      <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
        Status: <span className="text-blue-600">Work In Progress</span>
      </Badge>
    </>
  )
}

export { VWBuildBody, VWBuildFooter }
