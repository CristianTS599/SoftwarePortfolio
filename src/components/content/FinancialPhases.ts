import { type ProjectPhase } from "../types/ProjectTypes"

export const FinancialPhases: ProjectPhase[] = [
  {
    id: "1",
    title: "Database & Features",
    status: "In Progress",
    completedate: "Pre-Release",
    goal: "List main features and design the database around the data.",
    current: true,
    bullets: [
      {
        text: "Feature listing. income, expense tracking, account analytics.",
      },
      {
        text: "Initial database design",
      },
      {
        text: "Continous feature & database refinement.",
      },
      {
        text: "Finalize initial database design.",
      },
    ],
    tags: [],
  },
  {
    id: "2",
    title: "API Design",
    status: "Next Up",
    completedate: "Pre-Release",
    goal: "API Architecture & Initial Implementation.",
    current: false,
    bullets: [
      {
        text: "Initalize .NET Core API",
      },
      {
        text: "ORM database integration",
      },
      {
        text: "Scaffold feature oriented Vertical Slice architecture",
      },
      {
        text: "Initialize dependency injection container.",
      },
      {
        text: "Security considerations.",
      },
      {
        text: "Initial feature development.",
      },
      {
        text: "Feature & database refinements",
      },
      {
        text: "Testing.",
      },
    ],
    tags: [],
  },
  {
    id: "3",
    title: "Web Client Implementation",
    status: "Future",
    completedate: "Pre-Release",
    goal: "Web client feature development.",
    current: false,
    bullets: [
      {
        text: "Initialize client tech stack. React, TypeScript, Shadcn-ui, Tanstack Query.",
      },
      {
        text: "API integration.",
      },
      {
        text: "Feature development.",
      },
      {
        text: "Feature refinement.",
      },
      {
        text: "Accessibility & responsiveness.",
      },
    ],
    tags: [],
  },
  {
    id: "4",
    title: "Initial Release",
    status: "Future",
    completedate: "Date: TBD",
    goal: "Deploy API and web client to cloud resource.",
    current: false,
    bullets: [
      {
        text: "API and client hosting.",
      },
      {
        text: "Bug monitoring.",
      },
    ],
    tags: [],
  },
  {
    id: "5",
    title: "Mobile Client Development",
    status: "Future",
    completedate: "Post-Release",
    goal: "Build Mobile Client.",
    current: false,
    bullets: [
      {
        text: "Research & determine tech stack.",
      },
      {
        text: "Reaserch client platform & hosting.",
      },
      {
        text: "Initial client design.",
      },
      {
        text: "Feature implementation.",
      },
      {
        text: "Accessibility & responsiveness",
      },
    ],
    tags: [],
  },
  {
    id: "6",
    title: "Up-Keep",
    status: "Future",
    completedate: "Post-Release",
    goal: "Manage API and Client Upates.",
    current: false,
    bullets: [
      {
        text: "Bug patching.",
      },
      {
        text: "Feature enhancements.",
      },
      {
        text: "General maintenance & updates.",
      },
      {
        text: "New feature designs.",
      },
      {
        text: "Accessibility & responsiveness checks",
      },
    ],
    tags: [],
  },
]
