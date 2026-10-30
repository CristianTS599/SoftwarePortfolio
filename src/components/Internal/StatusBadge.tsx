import { Badge } from "../ui/badge"

const statusColors: Record<string, string> = {
  Complete: "text-grey-400",
  WIP: "text-cyan-700",
  Paused: "text-amber-700",
  Queued: "text-amber-600",
}

export default function StatusBadge({
  status,
  statusText,
}: {
  status: string
  statusText: string
}) {
  if (statusText === "" || statusText === " ") return

  return (
    <Badge className="mx-3 mt-1 text-emerald-700" variant="outline">
      Status:{" "}
      <span className={statusColors[status] || "text-emerald-700"}>
        {statusText}
      </span>
    </Badge>
  )
}
