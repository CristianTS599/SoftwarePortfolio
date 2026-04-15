import type { TimelineEntry } from "../types/TimelineEntry"

export const Experiences: TimelineEntry[] = [
  {
    id: "current",
    title: "Software Engineer II",
    subtitle: "Microchip Technology Inc.",
    dates: "Mar 2026 — Present",
    current: true,
    bullets: [
      {
        text: "Promoted to SE II for demonstrated technical impact across full-stack development, backend systems, and production AI/LLM integration work.",
      },
      {
        text: "Leading R&D on AI/LLM integration, architecting an MCP server that enables real-time MES data access for manufacturing analytics serving as the primary engineer and actively extending capabilities.",
      },
      {
        text: "Championed React as a company-wide frontend standard, driving adoption across 25+ engineers on 6 distributed teams spanning India, California, and Colorado. Shipped 3 production React systems and established standards for CSS architecture, async state management (TanStack Query), and build tooling.",
      },
      {
        text: "Evaluating Regrello as a workflow automation platform for enterprise adoption, benchmarking performance, assessing integration fit, and delivering a technical recommendation to stakeholders.",
      },
      {
        text: "Architecting a cross-platform interop layer enabling a .NET Core system running on Linux to consume a Java library, bridging two enterprise ecosystems with minimal operational overhead.",
      },
    ],
    tags: [
      { label: "Model Context Protocol (MCP)", accent: true },
      { label: ".NET Core", accent: true },
      { label: "GraphQL", accent: true },
      { label: "C#", accent: true },
      { label: "Python", accent: true },
      { label: "SQL Server", accent: true },
    ],
  },
  {
    id: "previous",
    title: "Software Engineer I",
    subtitle: "Microchip Technology Inc.",
    dates: "Sep 2023 — Mar 2026",
    bullets: [
      {
        text: "Built a Python/FastMCP MCP server enabling secure, dynamic MES database access for LLM-powered manufacturing analytics, integrating Azure OpenAI to create a chatbot that reduced defect analysis and equipment history lookup times from several minutes to seconds.",
      },
      {
        text: "Delivered end-to-end .NET Core applications owning full-stack architecture across databases, APIs, and UIs including DI pipelines, middleware, and secure request handling.",
      },
      {
        text: "Designed production critical React/.NET Core systems and architected high-performance SQL Server Schemas, resolving time-complexity bottlenecks and modernizing legacy data workflows. ",
      },
      {
        text: "Implemented REST APIs and diagnosed production issues through deep root cause analysis across distributed systems.",
      },
      {
        text: "Collaborated with Business Analysts and engineers to refine requirements, improve UX, and deliver reliable features under tight deadlines.",
      },
    ],
    tags: [
      { label: ".NET Core", accent: true },
      { label: "React.js", accent: true },
      { label: "JavaScript", accent: true },
      { label: "RESTful APIs", accent: true },
      { label: "T-SQL", accent: true },
      { label: "SSRS", accent: true },
    ],
  },
  {
    id: "previous-2",
    title: "Associate Software Engineer",
    subtitle: "Microchip Technology Inc.",
    dates: "Apr 2023 — Sep 2023",
    bullets: [
      {
        text: "Contributed to new production systems design in .NET and SQL Server; maintained manufacturing-critical systems with comprehensive root cause analysis.",
      },
      {
        text: "Built reusable libraries for configuration management and standardized exception handling, improving consistency across the codebase.",
      },
      {
        text: "Participated in Agile sprint planning, feature delivery, and cross-team code reviews.",
      },
    ],
    tags: [
      { label: "ASP.NET", accent: true },
      { label: "JavaScript", accent: true },
      { label: "ASP.NET", accent: true },
    ],
  },
  {
    id: "previous-3",
    title: "Software Engineer Intern",
    subtitle: "Microchip Technology Inc.",
    dates: "Mar 2021 — Apr 2023",
    bullets: [
      {
        text: "Maintained and enhanced production systems using C# and .NET completing sprint tasks and demoing progress to engineering leads.",
      },
      {
        text: "Supported senior engineers with feature development, bug resolution, and system documentation.",
      },
    ],
    tags: [
      { label: "C#", accent: true },
      { label: "SQL Server", accent: true },
      { label: "Oracle", accent: true },
      { label: "Full-Stack", accent: true },
      { label: ".NET Core", accent: true },
      { label: ".NET Framework", accent: true },
      { label: "Entity Framework", accent: true },
      { label: "JavaScript", accent: true },
    ],
  },
]
