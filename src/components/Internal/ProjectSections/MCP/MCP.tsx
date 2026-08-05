import { useCallback, useEffect, useMemo, useState } from "react"

import {
  ReactFlow,
  Background,
  BaseEdge,
  Controls,
  EdgeLabelRenderer,
  Handle,
  MarkerType,
  Position,
  getBezierPath,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
  type NodeMouseHandler,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

// Internal components
import { Badge } from "../../../ui/badge"

type ArchNodeData = {
  label: string
  sub?: string
  /** width utility override, defaults to w-48 */
  box?: string
  accent?: "violet" | "ai"
}

type DiagramNode = Node<ArchNodeData>

const VIOLET = "#8b5cf6"
const ORACLE_RED = "#f87171"

const NODE_DETAILS: Record<string, { title: string; text: string }> = {
  user: {
    title: "User / Chat Interface",
    text: "Manufacturing engineers ask plain-English questions like “show me the recent equipment history for this tool.” The session stays open and answers stream back in real time — no SQL, no navigating legacy MES screens.",
  },
  agent: {
    title: "Azure OpenAI Agent",
    text: "Runs an asynchronous session with the user: responses stream token-by-token while the session stays open. The agent interprets each question, chooses which MCP tool to call, and synthesizes the results into the streamed answer.",
  },
  mcpEnv: {
    title: "MCP Server Environment (Python + FastMCP)",
    text: "The production server process. It hosts the protocol layer — the tools and resources the agent can use — plus a data access layer, with input validation and access controls throughout, so the LLM never touches the database directly.",
  },
  tools: {
    title: "Tools",
    text: "Structured, typed tool definitions the agent is allowed to call. Each maps to a vetted operation, and the definitions stay slim by delegating the actual work to the data access layer.",
  },
  resources: {
    title: "Resources",
    text: "Read-only MCP resources: reference context the agent can load without a full tool call, keeping simple lookups cheap and predictable.",
  },
  dal: {
    title: "Data Access Layer",
    text: "Implements the actual database calls that the tools reference. Centralizing queries here keeps tool definitions slim and puts parameterized, permission-checked data access in one place.",
  },
  db: {
    title: "MES Database (Oracle)",
    text: "Live Manufacturing Execution System data: defect analysis and equipment history. Queried securely through the data access layer; lookups that took minutes by hand now return in seconds.",
  },
}

function HandleSet() {
  return (
    <>
      {(
        [
          ["t", Position.Top],
          ["b", Position.Bottom],
          ["l", Position.Left],
          ["r", Position.Right],
        ] as const
      ).map(([side, pos]) => (
        <span key={side}>
          <Handle
            id={`${side}-s`}
            type="source"
            position={pos}
            style={{ opacity: 0 }}
            isConnectable={false}
          />
          <Handle
            id={`${side}-t`}
            type="target"
            position={pos}
            style={{ opacity: 0 }}
            isConnectable={false}
          />
        </span>
      ))}
    </>
  )
}

function ArchNodeView({ data, selected }: NodeProps<DiagramNode>) {
  if (data.accent === "ai") {
    // gradient-border card for the LLM agent
    return (
      <div
        className={`${data.box ?? "w-48"} rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 p-[1.5px] shadow-sm transition-shadow ${
          selected ? "shadow-[0_0_16px_rgba(139,92,246,0.45)]" : ""
        }`}
      >
        <HandleSet />
        <div className="rounded-[7px] bg-card px-3 py-2 text-center">
          <div
            className="text-sm font-medium"
            style={{ color: "var(--main-text)" }}
          >
            {data.label}
          </div>
          {data.sub && (
            <div className="text-xs text-muted-foreground">{data.sub}</div>
          )}
        </div>
      </div>
    )
  }

  const accent =
    data.accent === "violet"
      ? selected
        ? "border-violet-400 ring-2 ring-violet-400/40"
        : "border-violet-500/40"
      : selected
        ? "border-emerald-500 ring-2 ring-emerald-500/40"
        : "border-border"

  return (
    <div
      className={`${data.box ?? "w-48"} rounded-lg border bg-card px-3 py-2 text-center shadow-sm transition-colors ${accent}`}
    >
      <HandleSet />
      <div
        className="text-sm font-medium"
        style={{ color: "var(--main-text)" }}
      >
        {data.label}
      </div>
      {data.sub && (
        <div className="text-xs text-muted-foreground">{data.sub}</div>
      )}
    </div>
  )
}

/** Speech bubble with a tail: the human end of the system. The two stub
    lines read as a right-aligned question and a streaming reply. */
function ChatNodeView({ data, selected }: NodeProps<DiagramNode>) {
  return (
    <div className="relative w-48">
      <HandleSet />
      <div
        className={`rounded-2xl rounded-bl-sm border bg-card px-3 py-2 text-center shadow-sm transition-colors ${
          selected
            ? "border-emerald-400 ring-2 ring-emerald-400/40"
            : "border-emerald-500/40"
        }`}
      >
        <div
          className="text-sm font-medium"
          style={{ color: "var(--main-text)" }}
        >
          {data.label}
        </div>
        {data.sub && (
          <div className="text-xs text-muted-foreground">{data.sub}</div>
        )}
        <div className="mt-2 flex flex-col gap-1">
          <span className="ml-auto h-1.5 w-16 rounded-full bg-emerald-400/60" />
          <span className="h-1.5 w-20 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
      <div
        className={`absolute -bottom-[7px] left-4 size-3 rotate-45 border-r border-b bg-card transition-colors ${
          selected ? "border-emerald-400" : "border-emerald-500/40"
        }`}
      />
    </div>
  )
}

/** Classic database cylinder, drawn in SVG with an Oracle-red accent.
    Text sits in an HTML overlay so it stays crisp and themable. */
function DatabaseNodeView({ data, selected }: NodeProps<DiagramNode>) {
  const stroke = selected ? "#fca5a5" : "#f87171"

  return (
    <div className="relative h-[116px] w-[190px]">
      <HandleSet />
      <svg
        viewBox="0 0 190 116"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
        style={
          selected
            ? { filter: "drop-shadow(0 0 8px rgba(248,113,113,0.45))" }
            : undefined
        }
      >
        <path
          d="M10 18 V96 A85 16 0 0 0 180 96 V18 Z"
          fill="rgba(248,113,113,0.07)"
          stroke={stroke}
          strokeWidth="1.5"
        />
        {[48, 72].map((y) => (
          <path
            key={y}
            d={`M10 ${y} A85 16 0 0 0 180 ${y}`}
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
        <ellipse
          cx="95"
          cy="18"
          rx="85"
          ry="16"
          fill="var(--card)"
          stroke={stroke}
          strokeWidth="1.5"
        />
      </svg>
      <div className="relative pt-9 text-center">
        <div
          className="text-sm font-medium"
          style={{ color: "var(--main-text)" }}
        >
          {data.label}
        </div>
        {data.sub && (
          <div className="text-xs text-muted-foreground">{data.sub}</div>
        )}
      </div>
    </div>
  )
}

/** The MCP environment: a process boundary, not hardware. Violet identity,
    soft glow, status LEDs as a nod to it running in production. */
function EnvGroupView({ data, selected }: NodeProps<DiagramNode>) {
  return (
    <div
      className={`relative h-full w-full rounded-xl border-2 bg-violet-500/5 px-3 py-2 text-left shadow-[0_0_28px_rgba(139,92,246,0.15)] transition-colors ${
        selected
          ? "border-violet-400 ring-2 ring-violet-400/30"
          : "border-violet-500/50"
      }`}
    >
      <HandleSet />
      <div className="absolute top-3 right-3 flex gap-1">
        <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 motion-reduce:animate-none" />
        <span className="size-1.5 rounded-full bg-violet-400" />
        <span className="size-1.5 rounded-full bg-zinc-600" />
      </div>
      <div className="text-sm font-medium text-violet-300">{data.label}</div>
      {data.sub && (
        <div className="text-xs text-muted-foreground">{data.sub}</div>
      )}
    </div>
  )
}

/** Edge caption offset clear of the path so the traveling dot and the
    stroke never sit on top of the text. */
function EdgeCaption({
  x,
  y,
  dy = 16,
  children,
}: {
  x: number
  y: number
  dy?: number
  children: React.ReactNode
}) {
  return (
    <EdgeLabelRenderer>
      <div
        // zIndex keeps the caption above nodes; without it a label that
        // overlaps a node is painted behind it and looks clipped.
        className="absolute rounded border bg-background/90 px-1.5 py-0.5 text-[10px] whitespace-nowrap text-muted-foreground"
        style={{
          zIndex: 1000,
          transform: `translate(-50%, -50%) translate(${x}px, ${y + dy}px)`,
        }}
      >
        {children}
      </div>
    </EdgeLabelRenderer>
  )
}

/** Bidirectional streaming session: no arrowhead, a dot travels the edge
    back and forth like tokens streaming over an open connection. */
function StreamingEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  label,
}: EdgeProps) {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  })
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <>
      <BaseEdge id={id} path={path} style={style} />
      {!reduceMotion && (
        <circle
          r="4"
          fill="#a7f3d0"
          style={{ filter: "drop-shadow(0 0 5px #34d399)" }}
        >
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            path={path}
          />
        </circle>
      )}
      {label && (
        <EdgeCaption x={labelX} y={labelY} dy={32}>
          {label}
        </EdgeCaption>
      )}
    </>
  )
}

/** Crossing a boundary: violet (MCP server) fading into Oracle red. */
function GradientEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  label,
}: EdgeProps) {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  })
  const gradientId = `edge-gradient-${id}`

  return (
    <>
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={sourceX}
          y1={sourceY}
          x2={targetX}
          y2={targetY}
        >
          <stop offset="0%" stopColor={VIOLET} />
          <stop offset="100%" stopColor={ORACLE_RED} />
        </linearGradient>
      </defs>
      <BaseEdge
        id={id}
        path={path}
        markerEnd={markerEnd}
        style={{ stroke: `url(#${gradientId})`, strokeWidth: 1.5 }}
      />
      {label && (
        <EdgeCaption x={labelX} y={labelY}>
          {label}
        </EdgeCaption>
      )}
    </>
  )
}

const nodeTypes = {
  arch: ArchNodeView,
  env: EnvGroupView,
  chat: ChatNodeView,
  database: DatabaseNodeView,
}
const edgeTypes = { streaming: StreamingEdge, gradient: GradientEdge }

/** Top-level placement per layout. Children of the MCP env keep the same
    relative positions in both, so only these four move. */
const LAYOUT = {
  wide: {
    user: { x: 0, y: 140 },
    agent: { x: 260, y: 140 },
    mcpEnv: { x: 520, y: 20 },
    db: { x: 900, y: 215 },
  },
  stacked: {
    user: { x: 20, y: 0 },
    agent: { x: 20, y: 130 },
    mcpEnv: { x: 0, y: 240 },
    db: { x: 25, y: 590 },
  },
} as const

function buildNodes(stacked: boolean): DiagramNode[] {
  const at = stacked ? LAYOUT.stacked : LAYOUT.wide
  return [
    {
      id: "user",
      type: "chat",
      position: at.user,
      data: { label: "User / Chat Interface", sub: "natural language query" },
    },
    {
      id: "agent",
      type: "arch",
      position: at.agent,
      data: {
        label: "Azure OpenAI Agent",
        sub: "async · streaming",
        accent: "ai",
      },
    },
    {
      id: "mcpEnv",
      type: "env",
      position: at.mcpEnv,
      style: { width: 240, height: 310 },
      data: { label: "MCP Server", sub: "Python + FastMCP" },
    },
    {
      id: "resources",
      type: "arch",
      parentId: "mcpEnv",
      position: { x: 20, y: 60 },
      data: {
        label: "Resources",
        sub: "read-only context",
        box: "w-[200px]",
        accent: "violet",
      },
    },
    {
      id: "tools",
      type: "arch",
      parentId: "mcpEnv",
      position: { x: 20, y: 140 },
      data: {
        label: "Tools",
        sub: "typed schemas",
        box: "w-[200px]",
        accent: "violet",
      },
    },
    {
      id: "dal",
      type: "arch",
      parentId: "mcpEnv",
      position: { x: 20, y: 220 },
      data: {
        label: "Data Access Layer",
        sub: "implements the DB calls",
        box: "w-[200px]",
        accent: "violet",
      },
    },
    {
      id: "db",
      type: "database",
      position: at.db,
      data: { label: "MES Database", sub: "Oracle" },
    },
  ]
}

function buildEdges(stacked: boolean): Edge[] {
  // wide flows left-to-right; stacked flows top-to-bottom
  const out = stacked ? "b-s" : "r-s"
  const into = stacked ? "t-t" : "l-t"

  return [
    {
      id: "user-agent",
      source: "user",
      target: "agent",
      sourceHandle: out,
      targetHandle: into,
      type: "streaming",
      label: "streaming session",
      style: { stroke: "#34d399", opacity: 0.7 },
    },
    {
      id: "agent-resources",
      source: "agent",
      target: "resources",
      sourceHandle: out,
      targetHandle: into,
      style: { stroke: VIOLET, opacity: 0.5, strokeDasharray: "6 4" },
    },
    {
      // stacked: curve down the left side so it visibly bypasses Resources
      id: "agent-tools",
      source: "agent",
      target: "tools",
      sourceHandle: stacked ? "l-s" : "r-s",
      targetHandle: "l-t",
      animated: true,
      label: "tool call",
      style: { stroke: VIOLET },
      markerEnd: { type: MarkerType.ArrowClosed, color: VIOLET },
    },
    {
      id: "tools-dal",
      source: "tools",
      target: "dal",
      sourceHandle: "b-s",
      targetHandle: "t-t",
      animated: true,
      style: { stroke: VIOLET },
      markerEnd: { type: MarkerType.ArrowClosed, color: VIOLET },
    },
    {
      id: "dal-db",
      source: "dal",
      target: "db",
      sourceHandle: out,
      targetHandle: into,
      type: "gradient",
      animated: true,
      label: "secure query",
      markerEnd: { type: MarkerType.ArrowClosed, color: ORACLE_RED },
    },
  ]
}

const STACK_QUERY = "(max-width: 767px)"

function MCPBody() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [stacked, setStacked] = useState(
    () => window.matchMedia(STACK_QUERY).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(STACK_QUERY)
    // resize is a fallback: some embedded/emulated viewports change size
    // without ever dispatching a matchMedia change event
    const sync = () => setStacked(mq.matches)
    mq.addEventListener("change", sync)
    window.addEventListener("resize", sync)
    sync()
    return () => {
      mq.removeEventListener("change", sync)
      window.removeEventListener("resize", sync)
    }
  }, [])

  const nodes = useMemo(() => buildNodes(stacked), [stacked])
  const edges = useMemo(() => buildEdges(stacked), [stacked])

  const onNodeClick: NodeMouseHandler = useCallback((_event, node) => {
    setSelectedId(node.id)
  }, [])

  const onPaneClick = useCallback(() => setSelectedId(null), [])

  const detail = selectedId ? NODE_DETAILS[selectedId] : null

  return (
    <section id="MCPBody" className="flex flex-col gap-4 pb-24">
      <div className="h-[520px] w-full overflow-hidden rounded-lg border md:h-[420px]">
        <ReactFlow
          // remount on layout switch so fitView re-runs for the new shape
          key={stacked ? "stacked" : "wide"}
          colorMode="dark"
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          edgesFocusable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          preventScrolling={false}
          minZoom={0.4}
          maxZoom={1.5}
        >
          <Background gap={16} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>

      <div
        aria-live="polite"
        className="min-h-28 rounded-lg border p-4"
        style={{ color: "var(--main-text)" }}
      >
        {detail ? (
          <>
            <div className="mb-1 font-medium">{detail.title}</div>
            <div className="text-sm text-muted-foreground">{detail.text}</div>
          </>
        ) : (
          <div className="text-sm text-muted-foreground">
            Tap or click a node in the diagram to see what that component does.
          </div>
        )}
      </div>
    </section>
  )
}

function MCPFooter() {
  return (
    <div className="hidden md:block md:text-muted">
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Python + FastMCP
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Model Context Protocol
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Azure OpenAI
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Oracle
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span className="text-blue-600">In Production</span>
      </Badge>
    </div>
  )
}

export { MCPBody, MCPFooter }
