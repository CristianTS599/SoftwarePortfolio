export interface ProjectPhase {
  id: string
  title: string
  status: string
  completedate: string
  goal: string
  current?: boolean
  bullets: {
    text: string
    highlight?: boolean // teal dash + brighter text — use for standout achievements
  }[]
  tags: {
    label: string
    accent?: boolean // teal tint — use for differentiating tech (MCP, LLM, etc.)
  }[]
}
