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

## Architecture diagrams

The MCP server and garage automation projects render interactive React Flow
diagrams instead of static images. Nodes are clickable and swap a description
panel beneath the canvas, and each diagram restacks from horizontal to vertical
below 768px.

Shared mechanics — handle sets, edge captions, the responsive layout hook —
live in `ProjectSections/Diagram/DiagramKit.tsx`. Node and edge styling stays
local to each diagram so they can differ visually while behaving identically.
