/**
 * One-off migration: converts the old per-contact VITE_<id>_GREETING /
 * VITE_<id>_MESSAGE variables into a single USER_CONTENT blob, rotating every
 * id along the way.
 *
 * The original ids are permanently readable in this repo's git history, so old
 * links are treated as burned and every contact gets a fresh id.
 *
 * Run once, locally:  node scripts/migrate-user-content.mjs
 *
 * Writes two gitignored files:
 *   user-content.local.json  -> paste this into Vercel as USER_CONTENT
 *   user-id-map.local.txt    -> old id -> new id, so you can re-send links
 *
 * Neither file is committed, and nothing is printed to the console.
 */
import { writeFileSync } from "node:fs"
import { randomUUID } from "node:crypto"
import { resolve } from "node:path"
import { loadEnv } from "vite"

const env = loadEnv("development", process.cwd(), "")

// same id shape already in use: the last chunk of a GUID
const newId = () => randomUUID().split("-").pop()

const contacts = new Map()
for (const [key, value] of Object.entries(env)) {
  const match = key.match(/^VITE_([0-9a-fA-F]{6,})_(GREETING|MESSAGE)$/)
  if (!match) continue

  const [, id, field] = match
  if (!contacts.has(id)) contacts.set(id, {})
  contacts.get(id)[field.toLowerCase()] = value ?? ""
}

if (contacts.size === 0) {
  console.error(
    "[migrate] found no VITE_<id>_GREETING/MESSAGE variables in .env - nothing to do"
  )
  process.exit(1)
}

const userContent = {}
const mapLines = [
  "old id       ->  new id        | greeting (for identifying the contact)",
  "-".repeat(78),
]

for (const [oldId, fields] of contacts) {
  const greeting = fields.greeting ?? ""
  const message = fields.message ?? ""

  // skip placeholder rows that never had content
  if (!greeting.trim() && !message.trim()) {
    mapLines.push(`${oldId}  ->  (skipped, empty)`)
    continue
  }

  const id = newId()
  userContent[id] = { greeting, message }
  mapLines.push(`${oldId}  ->  ${id}  | ${greeting.slice(0, 44)}`)
}

writeFileSync(
  resolve(process.cwd(), "user-content.local.json"),
  JSON.stringify(userContent)
)
writeFileSync(
  resolve(process.cwd(), "user-id-map.local.txt"),
  mapLines.join("\n") + "\n"
)

console.log(
  `[migrate] migrated ${Object.keys(userContent).length} contact(s).\n` +
    "  - user-content.local.json  -> paste into Vercel as USER_CONTENT\n" +
    "  - user-id-map.local.txt    -> old/new id mapping\n" +
    "Both files are gitignored."
)
