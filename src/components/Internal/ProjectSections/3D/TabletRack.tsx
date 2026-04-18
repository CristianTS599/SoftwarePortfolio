import { Badge } from "../../../ui/badge"

export function TabletRackBody() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="md:w-[40%]">
            <img
              src="/ProjectImgs/3D/TabletRack/TR1.png"
              alt="Image of the Model Drawing depicting different angles of the model from side profiles to orthographic view with dimensions shown."
            />
          </div>
          <div className="md:w-[35%]">
            <img
              src="/ProjectImgs/3D/TabletRack/TR2.png"
              alt="Image of the model as show from the Fusion 360 Editor. Model is in a orthographic postion."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export function TabletRackFooter() {
  return (
    <>
      <div className="flex flex-row">
        <Badge className="mx-2 text-emerald-700" variant="outline">
          3D Printing
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Fusion 360 CAD
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Flash Forge Dual Extruding Printer
        </Badge>
        <Badge className="mx-2 text-emerald-700" variant="outline">
          Status:
          <span className="text-blue-600"> Test Printing V3. </span>
        </Badge>
      </div>
    </>
  )
}
