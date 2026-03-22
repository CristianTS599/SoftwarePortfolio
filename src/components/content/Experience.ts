import type { ExperienceEntry } from "../types/ExperienceEntry"

export const Experiences: ExperienceEntry[] = [
  {
    id: "current",
    company: "Microchip Technology Inc.",
    role: "Software Engineer II",
    dates: "Mar 2026 — Present",
    current: true,
    bullets: [
      {
        text: "Designed and built an AI-powered MES chatbot using a Model Context Protocol server, enabling natural language querying of manufacturing execution data — the first LLM integration at the company.",
        highlight: true,
      },
      {
        text: "Led adoption of React.js in a legacy ASP.NET environment, establishing component patterns and tooling that the team continues to build on.",
      },
      {
        text: "Owned full-stack features across .NET Core APIs and React frontends, collaborating directly with operations stakeholders to scope and ship production tooling.",
      },
      {
        text: "Mentored junior engineers and drove code review culture across a team of 4.",
      },
    ],
    tags: [
      { label: "MCP", accent: true },
      { label: "LLM integration", accent: true },
      { label: ".NET Core" },
      { label: "React" },
      { label: "SQL Server" },
      { label: "Azure" },
    ],
  },
  {
    id: "previous",
    company: "Microchip Technology Inc.",
    role: "Software Engineer I",
    dates: "Sep 2023 — Mar 2026",
    bullets: [
      {
        text: "Built and maintained internal tooling and customer-facing web applications across the full stack.",
      },
      {
        text: "Contributed to API design and database schema planning for a core product rewrite.",
      },
      {
        text: "Introduced automated testing practices that reduced regression bugs by ~40% over two release cycles.",
      },
    ],
    tags: [
      { label: ".NET" },
      { label: "JavaScript" },
      { label: "SQL" },
      { label: "REST APIs" },
    ],
  },
  {
    id: "previous-2",
    company: "Microchip Technology Inc.",
    role: "Associate Software Engineer",
    dates: "Apr 2023 — Sep 2023",
    bullets: [
      {
        text: "Developed and shipped features on a .NET web application serving internal operations teams.",
      },
      {
        text: "Worked closely with senior engineers to build foundational skills in backend architecture and database design.",
      },
    ],
    tags: [{ label: "ASP.NET" }, { label: "C#" }, { label: "T-SQL" }],
  },
  {
    id: "previous-3",
    company: "Microchip Technology Inc.",
    role: "Software Engineer Intern",
    dates: "Mar 2021 — Apr 2023",
    bullets: [
      {
        text: "Developed and shipped features on a .NET web application serving internal operations teams.",
      },
      {
        text: "Worked closely with senior engineers to build foundational skills in backend architecture and database design.",
      },
    ],
    tags: [{ label: "ASP.NET" }, { label: "C#" }, { label: "T-SQL" }],
  },
  {
    id: "early-1",
    company: "Margarita Factory Beaverton",
    role: "Server",
    dates: "Jan 2020 — Mar 2021",
    bullets: [
      {
        text: "B1",
      },
      {
        text: "B2",
      },
    ],
    tags: [{ label: "ASP.NET" }, { label: "C#" }, { label: "T-SQL" }],
  },
  {
    id: "early-2",
    company: "JouleSmart Solutions Inc.",
    role: "Wiring Technician I",
    dates: "Jun 2018 - Oct 2019",
    bullets: [
      {
        text: "B1",
      },
      {
        text: "B2",
      },
    ],
    tags: [{ label: "ASP.NET" }, { label: "C#" }, { label: "T-SQL" }],
  },
  {
    id: "early-3",
    company: "The Cheesecake Factory",
    role: "Busser",
    dates: "Jan 2017 - Jun 2018",
    bullets: [
      {
        text: "B1",
      },
      {
        text: "B2",
      },
    ],
    tags: [{ label: "ASP.NET" }, { label: "C#" }, { label: "T-SQL" }],
  },
  {
    id: "early-4",
    company: "Multnomah Falls Lodge",
    role: "Server",
    dates: "Jul 2014 - Sep 2019",
    bullets: [
      {
        text: "B1",
      },
      {
        text: "B2",
      },
    ],
    tags: [{ label: "ASP.NET" }, { label: "C#" }, { label: "T-SQL" }],
  },
]
