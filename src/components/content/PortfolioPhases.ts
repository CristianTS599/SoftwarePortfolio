import { type TimelineEntry } from "../types/TimelineEntry"

export const PortfolioPhases: TimelineEntry[] = [
  {
    id: "1",
    title: "Early Release",
    subtitle: "In Progress",
    dates: "TBD",
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
        text: "Accessibility, responsiveness testing, and spell check.",
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
    subtitle: "Next Release",
    dates: "TBD",
    goal: "Code cleanup, abstracting, and refactoring",
    current: false,
    bullets: [
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
    subtitle: "Future",
    dates: "TBD",
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
    subtitle: "Periodic",
    dates: "TBD",
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
