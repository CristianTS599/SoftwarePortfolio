import { Badge } from "../../../ui/badge"

export function MissingPieceBody() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div className="md:w-[700px]">
            <img className="w-full" src="/ProjectImgs/3D/APiece/MAP1.png" />
          </div>
          <div className="md:w-[390px]">
            <img className="w-full" src="/ProjectImgs/3D/APiece/MAP2.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export function MissingPieceFooter() {
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
