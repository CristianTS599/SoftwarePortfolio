# cristiantsalazar.com

Personal portfolio for Cristian T. Salazar — a software engineer in Portland, OR.

**Live:** [www.cristiantsalazar.com](https://www.cristiantsalazar.com)

A single-page React site covering software, embedded, automotive, and home
improvement projects. Each project opens into a drawer with its own long-form
content: photo carousels, phase timelines, a live Three.js scene, or an
interactive architecture diagram.

## Stack

| Area      | Choice                                         |
| --------- | ---------------------------------------------- |
| Framework | React 19 + TypeScript, built with Vite 7       |
| Styling   | Tailwind CSS v4, shadcn/ui on Radix primitives |
| Routing   | React Router                                   |
| Diagrams  | React Flow (`@xyflow/react`)                   |
| 3D        | Three.js                                       |
| Carousels | Embla                                          |
| Contact   | Formspree                                      |
| Hosting   | Vercel, with Vercel Web Analytics              |

## Getting started

Requires **Node 20.19+ or 22.12+** (Vite 7).

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

### Scripts

| Script                  | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| `npm run dev`           | Dev server with HMR                             |
| `npm run build`         | Type-check, then production build to `dist/`    |
| `npm run preview`       | Serve the production build locally              |
| `npm run typecheck`     | TypeScript only, no emit                        |
| `npm run lint`          | ESLint                                          |
| `npm run format`        | Prettier across all `.ts`/`.tsx`                |
| `npm run migrate:users` | One-off helper for personalized content (below) |

`predev` and `prebuild` hooks run `scripts/gen-user-content.mjs` automatically,
so the personalized content files are always regenerated before the app starts
or builds.

## Structure

```
public/ProjectImgs/     project photography, one folder per project
scripts/                build-time content generation
src/
  components/
    Internal/           app sections: Hero, Projects, Experience, EmailForm…
      ProjectSections/  long-form drawer content, one folder per project
        Diagram/        shared React Flow primitives
    content/            timeline and experience data
    svg/                hand-rolled icon components
    ui/                 shadcn/ui components
  pages/                route-level components
```

Two conventions worth knowing before editing:

- **Project drawers** pair a `Body` and `Footer` export per project under
  `ProjectSections/`, wired into a tab in `Internal/Projects.tsx`.
- **Photo carousels** build their image paths by counting, not by reading the
  directory — files must be named sequentially (`BR1.jpeg`, `BR2.jpeg`, …) with
  no gaps, and `imgCount` in the project's component must match the file count.

## Architecture diagrams

The MCP server and garage automation projects render interactive React Flow
diagrams instead of static images. Nodes are clickable and swap a description
panel beneath the canvas, and each diagram restacks from horizontal to vertical
below 768px.

Shared mechanics — handle sets, edge captions, the responsive layout hook —
live in `ProjectSections/Diagram/DiagramKit.tsx`. Node and edge styling stays
local to each diagram so they can differ visually while behaving identically.

## Personalized landing content

Visiting `/<id>` renders an additional greeting in the hero. The content is
**not** bundled with the client:

1. A single `USER_CONTENT` environment variable holds the JSON. It is
   deliberately not `VITE_` prefixed, so Vite never inlines it.
2. `scripts/gen-user-content.mjs` expands it at build time into one
   `public/u/<id>.json` per entry.
3. The hero fetches only its own file at runtime. An unknown id falls back to
   the default content.

The generated files and the local JSON are gitignored, so no content or ids are
committed. Locally the script falls back to `user-content.local.json` when
`USER_CONTENT` is unset, which avoids quoting a JSON blob inside `.env`.

Invalid JSON fails the build rather than silently skipping — loud beats a
mysteriously missing greeting.

## Deployment

Vercel builds from `master` on push. `vercel.json` rewrites all paths to
`index.html` for client-side routing.

`USER_CONTENT` must be set in the project's environment variables and scoped to
**Production and Preview** — preview deploys silently fall back to default
content otherwise. Environment variable changes require a redeploy to take
effect.
