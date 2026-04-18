import { Badge } from "../../../ui/badge"

export function TabletRackBody() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="md:w-[40%]">
            <img src="/ProjectImgs/3D/TabletRack/TR1.png" />
          </div>
          <div className="md:w-[35%]">
            <img src="/ProjectImgs/3D/TabletRack/TR2.png" />
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
