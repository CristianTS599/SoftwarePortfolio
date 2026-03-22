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
        text: "Designed and built an AI-powered MES chatbot using a Model Context Protocol server, enabling natural language querying of manufacturing execution data — the first LLM integration of our group.",
        highlight: true,
      },
      {
        text: "Led adoption of React.js in a legacy ASP.NET environment, establishing component patterns and tooling that the team continues to build on.",
      },
      {
        text: "Built a .NET benchmarking system to measure Regrello API performance under both steady-state polling and burst load (80+ concurrent queries), capturing code-level and network execution times to establish latency baselines.",
      },
    ],
    tags: [
      { label: "Model Context Protocol (MCP)", accent: true },
      { label: "LLM integration", accent: true },
      { label: "GraphQL", accent: true },
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
        text: "Delivered several end to end .NET Core applications, owning architecture from databases, APIs, and UIs that included DI pipelines, middleware, and secure request handling.",
      },
      {
        text: "Designed production critical React / .NET Core systems and led React adoption, establishing patterns used across new engineering projects.",
      },
      {
        text: "Architected high performance SQL Server relational schemas, optimized time complexity bottlenecks, and modernized legacy data workflows. ",
      },
      {
        text: "Developed a custom MCP server (Python/FastMCP) enabling secure dynamic MES data access for LLM powered manufacturing analytics. ",
      },
      {
        text: "Built an Azure OpenAI integrated MES chatbot, reducing defect analysis and equipment history lookup times from minutes to seconds.",
      },
      {
        text: "Implemented REST APIs, performed code reviews, and contributed to CI/CD automation using Azure DevOps.",
      },
      {
        text: "Diagnosed and resolved production issues through deep root cause analysis across distributed systems.",
      },
      {
        text: "Collaborated with Business Analysts and engineers to refine requirements, improve UX, and ship reliable features under tight deadlines. ",
      },
    ],
    tags: [
      { label: ".NET Core", accent: true },
      { label: "React", accent: true },
      { label: "JavaScript", accent: true },
      { label: "SQL" },
      { label: "REST APIs" },
      { label: "SSRS" },
      { label: "SSIS" },
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
    tags: [
      { label: "ASP.NET", accent: true },
      { label: "SSRS", accent: true },
      { label: "C#" },
      { label: "T-SQL" },
    ],
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
    tags: [{ label: "ASP.NET Framework", accent: true }, { label: "C#" }],
  },
]
