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
      className="flex h-screen flex-col justify-center pt-10 md:flex-row md:pt-40"
    >
      <div className="mx-5 flex flex-1 flex-col md:ms-35">
        <div className="">
          <Pulse label="Open To Opportunities" />
        </div>

        <div className="mt-5">
          <h4 className="font-serif text-4xl text-muted-foreground">
            Cristian T. Salazar
          </h4>
        </div>

        <div className="mt-3 md:mt-7">
          <p className="text-lg">
            A hands-on builder disguised as a software engineer, equally at home
            in a codebase or a garage.
          </p>
        </div>

        <div className="mt-3 md:mt-7">
          <p className="text-lg">
            {user.greeting}
            {user.name === "default" ? "" : ","}
          </p>
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
                href="/src/assets/Docs/CristianSalazar_SoftwareEngineer_Resume.pdf"
                download
              >
                Download Resume
              </a>
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <div className="relative mx-auto w-full max-w-lg">
          <Card className="overflow-hidden pb-0">
            <img
              src="src/assets/ChicagoSkyline.png"
              alt="SelfPortrait"
              className="aspect-video w-full"
            />
          </Card>

          <Badge
            variant="secondary"
            className="absolute -right-4 -bottom-4 flex h-13 flex-col items-start gap-0.5 rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-left hover:scale-105"
          >
            <p className="text-left text-muted">Based In</p>
            <p className="font-mono text-emerald-700">Portland, OR</p>
          </Badge>
        </div>
      </div>
    </div>
  )
}
