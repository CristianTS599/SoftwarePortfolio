import ProjectCarousel from "../../ProjectCarousel"
import { Badge } from "../../../ui/badge"

function BathroomRemodelBody() {
  return (
    <div className="">
      <ProjectCarousel />
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
        {" "}
        Tiling{" "}
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        {" "}
        Electrical{" "}
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        {" "}
        Refinishing{" "}
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        {" "}
        Carpentry{" "}
      </Badge>
    </div>
  )
}

export { BathroomRemodelBody, BathroomRemodelFooter }
