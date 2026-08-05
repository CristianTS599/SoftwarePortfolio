import { useCallback, useState } from "react"

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
    title: "MES Databases (SQL Server / Oracle)",
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
      <div className="text-sm font-medium" style={{ color: "var(--main-text)" }}>
        {data.label}
      </div>
      {data.sub && (
        <div className="text-xs text-muted-foreground">{data.sub}</div>
      )}
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
        <circle r="3.5" fill="#34d399">
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
        <EdgeLabelRenderer>
          <div
            className="absolute rounded bg-background/80 px-1.5 py-0.5 text-[10px] text-muted-foreground"
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            }}
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  )
}

const nodeTypes = { arch: ArchNodeView, env: EnvGroupView }
const edgeTypes = { streaming: StreamingEdge }

const initialNodes: DiagramNode[] = [
  {
    id: "user",
    type: "arch",
    position: { x: 0, y: 140 },
    data: { label: "User / Chat Interface", sub: "natural language query" },
  },
  {
    id: "agent",
    type: "arch",
    position: { x: 260, y: 140 },
    data: {
      label: "Azure OpenAI Agent",
      sub: "async · streaming",
      accent: "ai",
    },
  },
  {
    id: "mcpEnv",
    type: "env",
    position: { x: 520, y: 20 },
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
    type: "arch",
    position: { x: 900, y: 240 },
    data: { label: "MES Database", sub: "SQL Server / Oracle" },
  },
]

const initialEdges: Edge[] = [
  {
    id: "user-agent",
    source: "user",
    target: "agent",
    sourceHandle: "r-s",
    targetHandle: "l-t",
    type: "streaming",
    label: "async streaming session",
    style: { stroke: "#34d399", opacity: 0.55 },
  },
  {
    id: "agent-resources",
    source: "agent",
    target: "resources",
    sourceHandle: "r-s",
    targetHandle: "l-t",
    style: { stroke: VIOLET, opacity: 0.5, strokeDasharray: "6 4" },
  },
  {
    id: "agent-tools",
    source: "agent",
    target: "tools",
    sourceHandle: "r-s",
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
    sourceHandle: "r-s",
    targetHandle: "l-t",
    animated: true,
    label: "secure query",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
]

function MCPBody() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const onNodeClick: NodeMouseHandler = useCallback((_event, node) => {
    setSelectedId(node.id)
  }, [])

  const onPaneClick = useCallback(() => setSelectedId(null), [])

  const detail = selectedId ? NODE_DETAILS[selectedId] : null

  return (
    <section id="MCPBody" className="flex flex-col gap-4 pb-24">
      <div className="h-[420px] w-full overflow-hidden rounded-lg border">
        <ReactFlow
          colorMode="dark"
          nodes={initialNodes}
          edges={initialEdges}
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
        SQL Server / Oracle
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span className="text-blue-600">In Production</span>
      </Badge>
    </div>
  )
}

export { MCPBody, MCPFooter }
