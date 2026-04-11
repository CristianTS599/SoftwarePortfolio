import ProjectCarousel from "../../ProjectCarousel"
import { Badge } from "../../../ui/badge"

function BathroomRemodelBody() {
  return (
    <div id="BathroomRemodelBody" className="">
      <ProjectCarousel
        imgPath="/ProjectImgs/BathRemodel"
        imgCount={29}
        imgPrefix="BR"
      />
    </div>
  )
}

function BathroomRemodelFooter() {
  return (
    <div className="">
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Painting
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Tiling
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Electrical
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Refinishing
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Carpentry
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span className="text-blue-600"> Work In Progress</span>
      </Badge>
    </div>
  )
}

export { BathroomRemodelBody, BathroomRemodelFooter }
