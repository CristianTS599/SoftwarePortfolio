// react
import { useEffect, useState } from "react"

// shadcn components
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

// internal content
import type { UserConfig } from "../types/UserConfig"
import { Spinner } from "../ui/spinner"
import Pulse from "./Pulse"
import { useParams } from "react-router-dom"
import GithubInvertocatWhite from "../svg/GithubInvertocatWhite"

export default function Hero() {
  const { userId } = useParams()
  const [user, setUser] = useState<UserConfig | null>(null)
  // only personalized visits have anything to wait for
  const [loading, setLoading] = useState(Boolean(userId))

  useEffect(() => {
    if (!userId) return

    let cancelled = false
    fetch(`/u/${encodeURIComponent(userId)}.json`)
      .then((res) => {
        // an unknown id falls through the SPA rewrite and comes back as
        // index.html with a 200, so check the type rather than just res.ok
        const type = res.headers.get("content-type") ?? ""
        return res.ok && type.includes("application/json") ? res.json() : null
      })
      .then((data) => {
        if (!cancelled) setUser(data)
      })
      .catch(() => {
        // an unknown id just falls back to the default hero
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [userId])

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
          {loading ? (
            <Spinner className="text-muted-foreground" />
          ) : (
            <>
              <p className="text-lg">{user?.greeting ?? ""}</p>
              <p className="text-lg">{user?.message ?? ""}</p>
            </>
          )}
        </div>

        <div className="mt-3 flex flex-row items-start gap-3 md:mt-7">
          <Button asChild variant="secondary">
            <a href="#projects">View Projects</a>
          </Button>

          <GithubInvertocatWhite
            tooltip="My GitHub"
            href="https://github.com/CristianTS599"
            text="GitHub"
            newTab={true}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-0">
        <div className="relative mx-auto w-[50%] max-w-lg">
          <Card className="overflow-hidden pb-0">
            <img
              src="ProjectImgs/Hero/H1.jpeg"
              alt="Self Portrait"
              className="h-full w-full"
            />
            <Badge
              variant="secondary"
              className="absolute -right-4 -bottom-2 flex h-13 flex-col items-start gap-0.5 rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-left hover:scale-105"
            >
              <p className="text-left text-zinc-400">Based In</p>
              <p className="font-mono text-emerald-500">Portland, OR</p>
            </Badge>
          </Card>
        </div>
      </div>
    </div>
  )
}
