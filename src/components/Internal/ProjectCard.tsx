import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card"

export default function ProjectCard({
  className,
  title,
  description,
  children,
}: {
  className?: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <Card className={`relative mt-3 w-[200px] md:h-50 md:w-80 ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>{children}</CardFooter>
    </Card>
  )
}
