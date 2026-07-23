import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card"

export default function ProjectCard({
  className,
  title,
  description,
  thumbnail,
  thumbnailAlt,
  icon,
  children,
}: {
  className?: string
  title: string
  description: string
  thumbnail?: string
  thumbnailAlt?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <Card className={`relative mt-3 w-full gap-3 pt-0 ${className}`}>
      <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={thumbnailAlt ?? title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center opacity-40">
            {icon}
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>{children}</CardFooter>
    </Card>
  )
}
