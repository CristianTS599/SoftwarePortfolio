import { Badge } from "../ui/badge"

// Two shades per status: no single Tailwind shade clears AA (4.5:1) against
// both the near-white and near-black backgrounds, so each pairs a -700 for
// light with a -400 for dark. The `dark:` variant keys off the .dark class
// the ThemeProvider puts on <html>, so no component logic is needed.
//                                      light / dark contrast
const statusColors: Record<string, string> = {
  Complete: "text-emerald-700 dark:text-emerald-400", // 5.36 / 10.21
  WIP: "text-sky-700 dark:text-sky-400", //             5.86 /  9.09
  Paused: "text-amber-700 dark:text-amber-400", //      5.03 / 11.49
  Queued: "text-gray-600 dark:text-gray-400", //        7.56 /  7.61
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
    <Badge className="mx-3 mt-1 text-muted-foreground" variant="outline">
      Status:{" "}
      <span
        className={
          statusColors[status] || "text-emerald-700 dark:text-emerald-400"
        }
      >
        {statusText}
      </span>
    </Badge>
  )
}
