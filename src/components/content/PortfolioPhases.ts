import { type TimelineEntry } from "../types/TimelineEntry"

export const PortfolioPhases: TimelineEntry[] = [
  {
    id: "1",
    title: "Early Release",
    subtitle: "Released",
    dates: "4/13/2026",
    goal: "Implement and release the portfolio with the minimum desired features.",
    current: false,
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
    subtitle: "In Progress",
    dates: "Started: 7/22/2026",
    goal: "Code cleanup, abstracting, and refactoring",
    current: true,
    bullets: [
      {
        text: "Projects section rebuilt: category tabs, thumbnail cards, and completeness-first ordering replacing the stacked accordions.",
        highlight: true,
      },
      {
        text: "Interactive architecture diagrams added for the MCP server and garage automation projects.",
        highlight: true,
      },
      {
        text: "Accessibility pass: WCAG AA contrast, landmark and heading structure, keyboard and screen reader support, reduced-motion handling.",
        highlight: true,
      },
      {
        text: "Mobile layout work across the projects section, including diagrams that restack on narrow screens.",
      },
      {
        text: "SEO and social metadata: page title, description, Open Graph and Twitter cards.",
      },
      {
        text: "Dark theme set as the default for every visitor.",
      },
      {
        text: "Shared abstractions extracted: project card thumbnails and reusable diagram primitives.",
      },
      {
        text: "Dead code, unused components, and unreferenced image assets removed.",
      },
    ],
    tags: [
      { label: "Performance", accent: true },
      { label: "Non-functional", accent: true },
    ],
  },
  {
    id: "3",
    title: "Content & Enhancements",
    subtitle: "Planned",
    dates: "Dates TBD",
    goal: "Enhance current content and introduce new sections.",
    current: false,
    bullets: [
      {
        text: "Resume PDF, Skills, Tech Stack, and About sections.",
      },
      {
        text: "User controlled light / dark mode toggle.",
      },
      {
        text: "Repository and live demo links on project cards.",
      },
      {
        text: "Component caching & performance, including code splitting for heavier drawer content.",
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
