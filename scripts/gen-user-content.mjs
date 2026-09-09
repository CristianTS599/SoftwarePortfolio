/**
 * Writes one JSON file per personalized contact into public/u/ at build time.
 *
 * Content comes from a single USER_CONTENT env var. It is deliberately NOT
 * prefixed with VITE_, so Vite never inlines it into the client bundle -- the
 * greetings only ever reach a browser that requests a specific id.
 *
 * Shape:
 *   USER_CONTENT={"<id>":{"greeting":"...","message":"..."}}
 *
 * Locally, USER_CONTENT is usually unset; the script then falls back to the
 * gitignored user-content.local.json produced by scripts/migrate-user-content.mjs,
 * which avoids quoting a JSON blob full of apostrophes inside a .env file.
 *
 * Runs automatically via the `predev` and `prebuild` npm scripts.
 */
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { resolve } from "node:path"
import { loadEnv } from "vite"

const OUT_DIR = resolve(process.cwd(), "public/u")
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development"

// empty prefix so loadEnv returns non-VITE_ vars too (.env locally, the
// project's environment variables on Vercel)
const env = loadEnv(mode, process.cwd(), "")
const LOCAL_FILE = resolve(process.cwd(), "user-content.local.json")

let raw = (env.USER_CONTENT ?? "").trim()
let source = "USER_CONTENT"

if (!raw && existsSync(LOCAL_FILE)) {
  raw = readFileSync(LOCAL_FILE, "utf-8").trim()
  source = "user-content.local.json"
}

// always start clean so a contact removed from USER_CONTENT does not linger
// in the deployed output from an earlier build
rmSync(OUT_DIR, { recursive: true, force: true })

if (!raw) {
  console.log(
    "[user-content] no USER_CONTENT env var or local file - skipping personalized files"
  )
  process.exit(0)
}

let parsed
try {
  parsed = JSON.parse(raw)
} catch (error) {
  console.error(
    `[user-content] USER_CONTENT is not valid JSON: ${error.message}`
  )
  process.exit(1)
}

mkdirSync(OUT_DIR, { recursive: true })

let written = 0
for (const [id, value] of Object.entries(parsed)) {
  // ids become filenames, so refuse anything that could escape the directory
  if (!/^[A-Za-z0-9_-]+$/.test(id)) {
    console.error(`[user-content] skipping id with unsafe characters: ${id}`)
    continue
  }

  writeFileSync(
    resolve(OUT_DIR, `${id}.json`),
    JSON.stringify({
      greeting: value?.greeting ?? "",
      message: value?.message ?? "",
    })
  )
  written++
}

// counts only -- never log the content itself
console.log(
  `[user-content] wrote ${written} file(s) to public/u (from ${source})`
)
