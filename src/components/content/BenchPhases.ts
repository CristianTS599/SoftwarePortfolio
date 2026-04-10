import { type TimelineEntry } from "../types/TimelineEntry"

export const BenchPhases: TimelineEntry[] = [
  {
    id: "1",
    title: "CAD Design",
    subtitle: "",
    dates: "Dates TBD",
    goal: "Create the initial design, build procedure, and BOM.",
    current: true,
    bullets: [
      {
        text: "Feature listing. storage layout, workbench, tool positions, 3D printing requirements.",
      },
      {
        text: "Initial bench CAD.",
      },
      {
        text: "3D Printing CAD.",
      },
      {
        text: "Create a build procedure & BOM.",
      },
      {
        text: "Materials order & printing.",
      },
    ],
    tags: [
      { label: "CAD", accent: true },
      { label: "Build Procedure", accent: true },
      { label: "BOM", accent: true },
    ],
  },
  {
    id: "2",
    title: "Build",
    subtitle: "",
    dates: "Dates TBD",
    goal: "Start building the bench by the build procedure.",
    current: false,
    bullets: [
      {
        text: "Build the bench.",
      },
      {
        text: "Design refinements.",
      },
    ],
    tags: [],
  },
  {
    id: "3",
    title: "Electrical",
    subtitle: "",
    dates: "Dates TBD",
    goal: "Design & build the arduino based automation.",
    current: false,
    bullets: [
      {
        text: "See Garage Build (Controls) project for more detail.",
      },
      {
        text: "Feature listing: Automated & touch pad controlled lighting, music, tools, compressor, pumps, RFID tool location.",
      },
      {
        text: "Circuit Design: Board type, sensors, touch path, and tools.",
      },
      {
        text: "Circuit Software.",
      },
      {
        text: "Soft install, test and refinement.",
      },
      {
        text: "Full install.",
      },
    ],
    tags: [],
  },
]
