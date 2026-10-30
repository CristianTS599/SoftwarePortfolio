import ProjectCarousel from "../../ProjectCarousel"
import { Badge } from "../../../ui/badge"
import StatusBadge from "../../StatusBadge"

function BathroomRemodelBody() {
  return (
    <div id="BathroomRemodelBody" className="">
      <ProjectCarousel
        imgPath="/ProjectImgs/BathRemodel"
        imgCount={15}
        imgPrefix="BR"
        imgAlt="Image of Bathroom Remodel showing progress as the bathroom is updated."
      />
    </div>
  )
}

function BathroomRemodelFooter() {
  return (
    <div className="hidden md:block">
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
      <StatusBadge status="WIP" statusText="Work In Progress" />
    </div>
  )
}

export { BathroomRemodelBody, BathroomRemodelFooter }
