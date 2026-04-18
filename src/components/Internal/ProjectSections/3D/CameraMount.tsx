import { Badge } from "../../../ui/badge"

export function CameraMountBody() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div className="md:w-[700px]">
            <img
              className="w-full"
              src="/ProjectImgs/3D/CameraMount/CM1.png"
              alt="CAD Drawing of the Camera Mount Model showing dimensions and scale of the model"
            />
          </div>
          <div className="md:w-[600px]">
            <img
              className="w-full"
              src="/ProjectImgs/3D/CameraMount/CM2.png"
              alt="Image of the Model Drawing showing what it looks like in the Fusion 360 CAD Software."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export function CameraMountFooter() {
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
          Status: Complete
        </Badge>
      </div>
    </>
  )
}
