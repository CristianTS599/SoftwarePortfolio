// react
import { useState } from "react"

// shadcn components
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

// internal content
import { USERS } from "../content/users"
import Pulse from "./Pulse"
import { useParams } from "react-router-dom"

export default function Hero() {
  const params = useParams()
  const [userId] = useState(params.userId ?? "none")
  const [user] = useState(USERS[userId] ?? USERS["default"])

  return (
    <div
      id="hero"
      className="mb-20 flex h-screen flex-col justify-center md:flex-row md:pt-15"
    >
      <div className="mx-5 flex flex-1 flex-col md:ms-35">
        <div className="">
          <Pulse label="Open To Opportunities" />
        </div>

        <div className="mt-5">
          <h1 className="font-serif text-4xl text-muted-foreground">
            Cristian T. Salazar
          </h1>
        </div>

        <div className="mt-3 md:mt-7">
          <p className="text-lg">
            A hands-on builder disguised as a software engineer, equally at home
            in a codebase or a garage.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-lg">{user.greeting}</p>
          <p className="text-lg">{user.message}</p>
        </div>

        <div className="mt-3 md:mt-7">
          <Button asChild variant="secondary">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        {user.name !== "default" ? (
          <div className="mt-2">
            <Button asChild variant="outline">
              <a
                href="/Docs/CristianSalazar_SoftwareEngineer_Resume.pdf"
                download
                aria-label="Download My Resume as a PDF"
              >
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-1 flex-col pt-0">
        <div className="relative mx-auto w-[50%] max-w-lg">
          <Card className="overflow-hidden pb-0">
            <img
              src="ProjectImgs/Hero/H1.jpeg"
              alt="SelfPortrait"
              className="h-full w-full"
            />
            <Badge
              variant="secondary"
              className="absolute -right-4 -bottom-2 flex h-13 flex-col items-start gap-0.5 rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-left hover:scale-105"
            >
              <p className="text-left text-muted">Based In</p>
              <p className="font-mono text-emerald-700">Portland, OR</p>
            </Badge>
          </Card>
        </div>
      </div>
    </div>
  )
}
