import { type TimelineEntry } from "../types/TimelineEntry"

export const PortfolioPhases: TimelineEntry[] = [
  {
    id: "1",
    title: "Early Release",
    subtitle: "Released",
    dates: "4/13/2026",
    goal: "Implement and release the portfolio with the minimum desired features.",
    current: true,
    bullets: [
      {
        text: "Landing page major sections: Navbar, Hero, Projects, Experience, Contact.",
      },
      {
        text: "Integrate react router dom for user specific content.",
      },
      {
        text: "Re-usable supporting components: Project Drawers, Carousel, Pulse.",
      },
      {
        text: "Individual project content.",
      },
      {
        text: "Mobile support testing, and spell check.",
      },
      {
        text: "Timeline component abstracted and integrated into projects and experience sections.",
      },
      {
        text: "Vercel deployment, testing, DNS binding.",
      },
      {
        text: "WAVE accessibility evaluation and adjustments.",
      },
      {
        text: "Override Email Form Redirect.",
      },
      {
        text: "Update favicon.",
      },
    ],
    tags: [
      { label: "Initial Release", accent: true },
      { label: "MVP", accent: true },
    ],
  },
  {
    id: "2",
    title: "Polish & Refactor",
    subtitle: "Post-Release",
    dates: "Dates TBD",
    goal: "Code cleanup, abstracting, and refactoring",
    current: false,
    bullets: [
      {
        text: "Project content updates and additions.",
      },
      {
        text: "Component caching & performance",
      },
      {
        text: "Css theming and variables.",
      },
      {
        text: "Redundant code abstraction or refactoring.",
      },
      {
        text: "Accessibiity & responsiveness evaluation.",
      },
    ],
    tags: [
      { label: "Performance", accent: true },
      { label: "Non-functional", accent: true },
    ],
  },
  {
    id: "3",
    title: "Content & Completeness",
    subtitle: "Post-Release",
    dates: "Dates TBD",
    goal: "Enhance current content and introduce new sections.",
    current: false,
    bullets: [
      {
        text: "Skills, Tech Stack, About sections.",
      },
      {
        text: "Project Updates. Add, Update, Delete project content.",
      },
    ],
    tags: [],
  },
  {
    id: "4",
    title: "Upkeep",
    subtitle: "Post-Release",
    dates: "Dates TBD",
    goal: "Project Updates.",
    current: false,
    bullets: [
      {
        text: "Update current projects with new content.",
      },
      {
        text: "Add new projects",
      },
    ],
    tags: [],
  },
]
