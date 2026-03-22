// react
import { useState } from "react"

// shadcn components
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

// internal content
import { USERS } from "../content/users"
import Pulse from "./Pulse"

export default function Hero() {
  const [userMessage] = useState(USERS["google"].message)

  return (
    <div id="hero" className="flex h-screen flex-row pt-40">
      <div className="ms-35 flex flex-1 flex-col">
        <div className="">
          <Pulse label="Open To Opportunities" />
        </div>

        <div className="mt-5">
          <h4 className="font-serif text-4xl text-muted-foreground">
            Cristian T. Salazar
          </h4>
        </div>

        <div className="mt-7">
          <p className="text-lg">
            Software engineer with a passion for building things — in code, in
            the garage, and on the workbench. I bring the same systematic
            thinking to software development that I apply to robotics and home
            projects.
          </p>
        </div>

        <div className="mt-5">
          <p className="text-lg">{userMessage}</p>
        </div>

        <div className="mt-7">
          <Button variant="secondary">View Projects</Button>
        </div>

        <div className="mt-2">
          <Button variant="outline">Download Resume</Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
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
