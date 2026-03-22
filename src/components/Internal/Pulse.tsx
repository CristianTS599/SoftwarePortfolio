import { Badge } from "../ui/badge"

export default function Pulse({
  colorClass1 = "bg-emerald-700",
  colorClass2 = "bg-emerald-700",
  classNames = "",
  label = "",
}: {
  colorClass1?: string
  colorClass2?: string
  classNames?: string
  label?: string
}) {
  return (
    <Badge className={classNames} variant="outline">
      <span className="relative flex size-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${colorClass1}`}
        ></span>
        <span
          className={`relative inline-flex size-2 rounded-full ${colorClass2}`}
        ></span>
      </span>
      {label}
    </Badge>
  )
}
