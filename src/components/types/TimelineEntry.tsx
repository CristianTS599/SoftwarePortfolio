interface TimelineEntry {
  id: string
  title: string // company or project title
  subtitle: string // role or project status
  dates: string // date range or completion date
  goal?: string // project goal (Project use only)
  current?: boolean //current role or project phase
  bullets: {
    text: string // Text of the bullet point
    highlight?: boolean // teal dash + brighter text — use for standout achievements
  }[]
  tags: {
    label: string // Text of the tag
    accent?: boolean // teal tint — use for differentiating tech (MCP, LLM, etc.)
  }[]
}

export type { TimelineEntry }
