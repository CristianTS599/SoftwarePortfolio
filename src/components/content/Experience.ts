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
        text: "Promoted to SE II for technical ownership across full-stack development, backend systems, and production AI/LLM integration.",
      },
      //{
      //text: "Taking over a reticle tracking system that monitors reticle movement across fab locations and external transfers — inheriting a mission-critical asset tracking system mid-development and owning its final three phases through completion.",
      //},
      {
        text: "Built a React drag-and-drop workflow builder where droppable shapes represent MES transactions. Users assemble and customize manufacturing workflows visually. Delivered a working proof of concept.",
      },
      {
        text: "Built and currently maintain a shared React component library with a small team. I contributed sections including page layout templates, design tokens deployed as an NPM package on JFROG Artifactory, and a JSON manifest system for pulling component source code into projects.",
      },
      {
        text: "Sole engineer on AI/LLM R&D project. Built and deployed an MCP server exposing live MES data to Azure OpenAI agents, cutting defect analysis and equipment history lookup times from minutes to seconds.",
      },
      {
        text: "Evaluated Regrello for fab workflow automation by automating workflows via Regrello's GraphQL API, building conditional workflow triggers, and configured HTTPS on a .NET API for reverse proxy integration. Determined it was not reliable enough for critical fab operations under high demand but recommended it for non-critical use.",
      },
      {
        text: "Inherited a high-demand data processing system after its owner left the company, learned it from the ground up during peak demand while adding new features and supporting customers directly.",
      },
      {
        text: "Lead the adoption of React across 25+ engineers on 6 distributed teams, defining component standards, async state management patterns (TanStack Query), and CI/CD build tooling.",
      },
      {
        text: "Architecting a .NET Core system that can consume Java binaries and run in a linux environment.",
      },
    ],
    tags: [
      { label: "Model Context Protocol (MCP)", accent: true },
      { label: ".NET Core", accent: true },
      { label: "GraphQL", accent: true },
      { label: "C#", accent: true },
      { label: "Python", accent: true },
      { label: "SQL Server", accent: true },
      { label: "React", accent: true },
      { label: "TypeScript", accent: true },
      { label: "Azure OpenAI", accent: true },
      { label: "JFROG Artifactory", accent: true },
    ],
  },
  {
    id: "2",
    title: "Software Engineer I",
    subtitle: "Microchip Technology Inc.",
    dates: "Sep 2023 — Mar 2026",
    bullets: [
      {
        text: "Inherited a legacy MES system from 2006 after the last expert was let go, learned a large, high-demand system from the ground up while supporting customers with lot issues, master data updates, monthly extracts, lot terminations, UI bugs, and user permissions.",
      },
      {
        text: "Scaled a major qual and production data transfer system from a single fab to a multifab architecture. I lead the expansion design and delivery to production.",
      },
      {
        text: "Mentored interns through the full development of a React/.NET Core app for tracking fab tool chemicals and chemical changes, guiding stack decisions, architecture, and implementation across the full project lifecycle.",
      },
      {
        text: "Collaborated with a team of engineers on a data processing system project aimed at utilizing TDD, CI/CD, and pair programming to deliver clean, well-tested production code with documented processes.",
      },
      {
        text: "Delivered end-to-end .NET Core systems including full-stack architecture across SQL Server databases, REST APIs, middleware, and secure request handling.",
      },
      {
        text: "Enhanced legacy system time-complexity bottlenecks in manufacturing workflows by improving SQL queries, data structure use, and improving multithreading and async processing in C#/.NET Core.",
      },
      {
        text: "Diagnosed and resolved production issues through root cause analysis across distributed manufacturing systems, communicating findings to technical and non-technical stakeholders.",
      },
      {
        text: "Assisted with SQL Server database migrations and completed full SSRS, and SSIS training, delivering multiple production reports and SSIS jobs.",
      },
    ],
    tags: [
      { label: ".NET Core", accent: true },
      { label: "React.js", accent: true },
      { label: "JavaScript", accent: true },
      { label: "RESTful APIs", accent: true },
      { label: "T-SQL", accent: true },
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
        text: "Took over Tempe fab systems as a team as part of the tempe software team dissolving, managing the transition and ensured continuity of manufacturing-critical software.",
      },
      {
        text: "Contributed to the completion of a fab-wide qual and production data transfer system.",
      },
      {
        text: "Built reusable libraries for configuration management and standardized exception handling to address lost data in error reporting and improve codebase consistency across teams.",
      },
      {
        text: "Delivered SSRS reports and participated in Agile sprint planning, feature delivery, and cross-team code reviews.",
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
        text: "Contributed to development of multiple production systems in C#/.NET building features, fixed bugs, and participated in Agile sprints across 2 years.",
      },
      {
        text: "Updated an EHS text paging application, enhancing legacy paging functionality with new features.",
      },
      {
        text: "Worked directly with customers on maintenance request clarification and completed maintenance tasks across manufacturing systems.",
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
