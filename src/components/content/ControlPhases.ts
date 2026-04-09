import { type TimelineEntry } from "../types/TimelineEntry"

export const ControlPhases: TimelineEntry[] = [
  {
    id: "1",
    title: "Feature Listing & Circuit Design",
    subtitle: "Current",
    dates: "Date: TBD",
    goal: "Create the initial feature list, circuit design, and BOM.",
    current: true,
    bullets: [
      {
        text: "Feature listing. Automated Lighting, Touchpad controlls, Tool Integration, circuit enclosure case, RFID Integration.",
      },
      {
        text: "Microcontroller board selection & circuit design.",
      },
      {
        text: "Circuit Enclosure CAD.",
      },
      {
        text: "Microcontroller, sensor, & parts BOM.",
      },
      {
        text: "3D Printing components.",
      },
    ],
    tags: [],
  },
  {
    id: "2",
    title: "Microcontroller Software",
    subtitle: "Next",
    dates: "Date: TBD",
    goal: "Design the software around the circuit design.",
    current: false,
    bullets: [
      {
        text: "Initialize source code repository, task board, design approach.",
      },
      {
        text: "Feature development & sensor integration",
      },
      {
        text: "Feature testing.",
      },
    ],
    tags: [],
  },
  {
    id: "3",
    title: "Installation planning",
    subtitle: "Future",
    dates: "Date: TBD",
    goal: "Create an installation manual and final wiring schematics.",
    current: false,
    bullets: [
      {
        text: "Workbench Integration plan. (See Garage Upgrade (Bench)) project",
      },
      {
        text: "Create full system installation plan.",
      },
      {
        text: "Final system wring diagrams.",
      },
      {
        text: "Final revision.",
      },
    ],
    tags: [],
  },
  {
    id: "4",
    title: "Installation",
    subtitle: "Future",
    dates: "Date: TBD",
    goal: "Install the automation system.",
    current: false,
    bullets: [
      {
        text: "Create full system installation plan.",
      },
      {
        text: "Final system wring diagrams.",
      },
      {
        text: "Final revision.",
      },
    ],
    tags: [],
  },
]
