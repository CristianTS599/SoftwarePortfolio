import type { TimelineEntry } from "../types/TimelineEntry"

export const Experiences: TimelineEntry[] = [
  {
    id: "1",
    title: "Software Engineer II",
    subtitle: "Microchip Technology Inc.",
    dates: "Mar 2026 — Present",
    current: true,
    bullets: [
      {
        text: "Reduced defect analysis and data access times from minutes to seconds by building a full-stack AI analytics system: a React client and Python MCP server exposing an Oracle data endpoint to an Azure OpenAI LLM.",
      },
      {
        text: "Standardized React development and UI/UX guidelines by implementing a shared React component library, deployed as an npm package to JFrog Artifactory.",
      },
      {
        text: "Enabled production workflow experimentation for process engineers by building a drag-and-drop workflow builder with React Flow, where droppable shapes connect to live MES transactions.",
      },
      {
        text: "Accelerated frontend delivery across 25+ engineers on distributed teams by establishing React as the group-wide standard, defining component guidelines, UI/UX patterns, and build tooling.",
      },
      {
        text: "Evaluated Regrello as a workflow automation platform: automated workflows via its GraphQL API, built conditional workflow triggers, and configured HTTPS on a .NET API for reverse proxy servers. Determined it was not reliable enough for critical fab operations under high demand but recommended it for non-critical use.",
      },
      {
        text: "Prevented wafer holds by taking on a high-demand data automation system when its owner left, learning it from the ground up during peak demand while implementing features and supporting manufacturing customers.",
      },
    ],
    tags: [
      { label: "Model Context Protocol (MCP)", accent: true },
      { label: "Azure OpenAI", accent: true },
      { label: "React", accent: true },
      { label: "React Flow", accent: true },
      { label: "TypeScript", accent: true },
      { label: ".NET Core", accent: true },
      { label: "C#", accent: true },
      { label: "Python", accent: true },
      { label: "GraphQL", accent: true },
      { label: "Oracle", accent: true },
      { label: "SQL Server", accent: true },
      { label: "JFrog Artifactory", accent: true },
    ],
  },
  {
    id: "2",
    title: "Software Engineer I",
    subtitle: "Microchip Technology Inc.",
    dates: "Sep 2023 — Mar 2026",
    bullets: [
      {
        text: "Accelerated manufacturing improvements by delivering production-critical, data-driven React frontends on time, owning the full architecture from database through API, components, UI/UX, and requirements refinement.",
      },
      {
        text: "Increased intern productivity by mentoring them through the full development of React and .NET applications, guiding best practices, standards, and technical documentation.",
      },
      {
        text: "Enabled multi-fab integration on a single system, reducing software redundancy and cutting development time, by scaling a qual and production data transfer system from a single-fab to a multi-fab architecture and setting the standard for future software.",
      },
      {
        text: "Improved team code quality and deployment reliability by piloting TDD, CI/CD, and pair programming on a data processing system, then integrating the effective components as the new team standard.",
      },
      {
        text: "Supported high-load manufacturing operations by designing SQL Server schemas, REST APIs, middleware, and secure request handling built for graceful scaling.",
      },
      {
        text: "Ensured quick incident turnaround by diagnosing and resolving production issues through root cause analysis on distributed manufacturing systems, implementing permanent fixes and documenting root cause.",
      },
      {
        text: "Enabled real-time data access by developing SSIS data pipelines and SSRS reports, giving process engineers customized insights on fab data.",
      },
      {
        text: "Built layered security by authenticating users through Windows Auth and JWT API access tokens with role-based authorization on client operations, ensuring users were both allowed to access and authorized to execute.",
      },
    ],
    tags: [
      { label: ".NET Core", accent: true },
      { label: "React.js", accent: true },
      { label: "JavaScript", accent: true },
      { label: "RESTful APIs", accent: true },
      { label: "T-SQL", accent: true },
      { label: "SSIS", accent: true },
      { label: "SSRS", accent: true },
      { label: "TDD", accent: true },
      { label: "CI/CD", accent: true },
    ],
  },
  {
    id: "3",
    title: "Associate Software Engineer",
    subtitle: "Microchip Technology Inc.",
    dates: "Apr 2023 — Sep 2023",
    bullets: [
      {
        text: "Maintained continuity of manufacturing-critical software during an Arizona fab shutdown by taking ownership of those systems and their infrastructure.",
      },
      {
        text: "Streamlined access to fab qual data inspection and automated monitoring by collaborating with a team of engineers on a fab-wide qual and production data transfer system. Built features, documented tasks, held code reviews, and delivered SSRS reports.",
      },
      {
        text: "Eliminated loss of exception information by standardizing exception handling through a shared .NET library.",
      },
      {
        text: "Standardized dynamic configuration setups by creating and sharing a build-time configuration extraction tool in a shared .NET library.",
      },
    ],
    tags: [
      { label: "ASP.NET", accent: true },
      { label: "JavaScript", accent: true },
      { label: "SSRS", accent: true },
      { label: "SQL Server", accent: true },
    ],
  },
  {
    id: "4",
    title: "Software Engineer Intern",
    subtitle: "Microchip Technology Inc.",
    dates: "Mar 2021 — Apr 2023",
    bullets: [
      {
        text: "Contributed to multiple production C#/ASP.NET systems across a 2 year internship, building features, fixing bugs, and participating in Agile sprints.",
      },
      {
        text: "Worked directly with manufacturing customers and senior engineers on request clarification.",
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
