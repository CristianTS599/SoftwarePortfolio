import { Badge } from "@/components/ui/badge"
import ProjectCarousel from "../../ProjectCarousel"

function VWBuildBody() {
  return (
    <div id="VWBuildBody" className="text-3xl">
      <ProjectCarousel
        imgPath="/ProjectImgs/VWBuild"
        imgCount={13}
        imgPrefix="VWB"
        imgAlt="Images showing the different components I have changed on my 2004 Volkswagen Jetta."
      />
    </div>
  )
}

function VWBuildFooter() {
  return (
    <div className="flex flex-row flex-wrap">
      <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
        Status: <span className="text-blue-600">Work In Progress</span>
      </Badge>
    </div>
  )
}

export { VWBuildBody, VWBuildFooter }
