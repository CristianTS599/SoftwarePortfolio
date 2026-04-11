import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({
  className,
  strokeWidth,
  ...props
}: Omit<React.ComponentProps<"svg">, "strokeWidth"> & {
  strokeWidth?: number
}) {
  return (
    <HugeiconsIcon
      strokeWidth={strokeWidth ?? (2 as number)}
      icon={Loading03Icon}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
