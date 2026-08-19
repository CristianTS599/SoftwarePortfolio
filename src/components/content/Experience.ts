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
        text: "Built an AI/LLM system using MCP to safely connect fab engineers to live MES data decreasing defect analysis and data access times from minutes to seconds.",
      },
      {
        text: "Took ownership of a 2-fab reticle tracking system mid-development, driving the final three phases through to completion while managing active customer dependencies.",
      },
      {
        text: "Built and maintain a shared React component library with a colleague, deployed as an npm package to JFROG Artifactory. Contributed page layout templates, design tokens, and a JSON manifest system for pulling component source into projects.",
      },
      {
        text: "Built a React drag-and-drop workflow builder using React Flow where droppable shapes execute MES transactions against live data, letting engineers visually assemble customized fab workflows.",
      },
      {
        text: "Led adoption of React as a company-wide frontend standard across 25+ engineers on 6 distributed teams, providing technical guidance and training and defining component standards, async state management patterns (TanStack Query), and CI/CD build tooling.",
      },
      {
        text: "Evaluated Regrello as a workflow automation platform: automated workflows via its GraphQL API, built conditional workflow triggers, and configured HTTPS on a .NET API for reverse proxy servers. Determined it was not reliable enough for critical fab operations under high demand but recommended it for non-critical use.",
      },
      {
        text: "Took ownership of a high-demand automated data processing system after its owner left, learning it from the ground up during peak demand while implementing new features and supporting manufacturing customers.",
      },
      {
        text: "Architecting a .NET Core system that can consume Java binaries and run in a Linux environment.",
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
        text: "Delivered production-critical, data-driven React frontends for manufacturing systems, owning the full architecture from database and API through components, UX, and requirements refinement.",
      },
      {
        text: "Mentored interns through the development of full-stack React and .NET applications for tracking fab tool chemical changes, customer-driven data parsing configurations, and MES document tracking, guiding stack decisions, architecture, and implementation across the full project lifecycle.",
      },
      {
        text: "Scaled a qual and production data transfer system from a single-fab to a multi-fab architecture, leading the expansion design and delivery to production.",
      },
      {
        text: "Built a data processing system using TDD, CI/CD, and pair programming as a way to evaluate the effectiveness of that development cycle as a potential new team standard.",
      },
      {
        text: "Delivered .NET Core backend systems owning SQL Server database designs, REST APIs, middleware, and secure request handling.",
      },
      {
        text: "Diagnosed and resolved production issues through root cause analysis on distributed manufacturing systems, implementing permanent fixes and reporting root cause to technical and non-technical stakeholders.",
      },
      {
        text: "Inherited a legacy MES system from 2006 after the last expert was let go, learning a large, high-demand system from the ground up while supporting customers with lot issues, master data updates, monthly extracts, lot terminations, UI bugs, and user permissions.",
      },
      {
        text: "Resolved time-complexity bottlenecks in legacy manufacturing workflows by improving SQL queries, data structure use, and multithreading and async processing in C#/.NET Core.",
      },
      {
        text: "Assisted with SQL Server database migrations and completed full SSRS and SSIS training, delivering multiple production reports and SSIS jobs.",
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
        text: "Took over Tempe fab systems as part of the Tempe fab shutdown, ensuring continuity of manufacturing-critical software.",
      },
      {
        text: "Collaborated with a team of engineers on the development of a fab-wide qual and production data transfer system. Built features, documented tasks, held code reviews, delivered SSRS reports, and participated in Agile sprint planning.",
      },
      {
        text: "Built reusable libraries for configuration management and standardized exception handling to eliminate loss of exception information and improve consistency in coding standards across teams.",
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
        text: "Updated an EHS text paging application, enhancing legacy paging functionality with new features.",
      },
      {
        text: "Worked directly with manufacturing customers and senior engineers on request clarification, and completed maintenance tasks across manufacturing systems.",
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
