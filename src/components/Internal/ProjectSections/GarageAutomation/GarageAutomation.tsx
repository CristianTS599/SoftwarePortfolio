import { useCallback, useMemo, useState } from "react"

import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  type Edge,
  type Node,
  type NodeProps,
  type NodeMouseHandler,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

// Internal components
import { Badge } from "../../../ui/badge"
import {
  HandleSet,
  staticFlowProps,
  useStackedLayout,
} from "../Diagram/DiagramKit"

/** Color language shared with the MCP diagram: emerald = human-facing,
    violet = intelligence, teal = physical hardware. */
type Accent = "human" | "ai" | "hardware"

type GarageNodeData = {
  label: string
  sub?: string
  box?: string
  accent?: Accent
}

type DiagramNode = Node<GarageNodeData>

const TEAL = "#2dd4bf"
const VIOLET = "#8b5cf6"

const ACCENTS: Record<Accent, { idle: string; active: string }> = {
  human: {
    idle: "border-emerald-500/40 shadow-[0_0_16px_rgba(52,211,153,0.2)]",
    active:
      "border-emerald-400 ring-2 ring-emerald-400/40 shadow-[0_0_16px_rgba(52,211,153,0.4)]",
  },
  ai: {
    idle: "border-violet-500/40 shadow-[0_0_16px_rgba(139,92,246,0.2)]",
    active:
      "border-violet-400 ring-2 ring-violet-400/40 shadow-[0_0_16px_rgba(139,92,246,0.4)]",
  },
  hardware: {
    idle: "border-teal-500/40 shadow-[0_0_14px_rgba(45,212,191,0.18)]",
    active:
      "border-teal-400 ring-2 ring-teal-400/40 shadow-[0_0_16px_rgba(45,212,191,0.4)]",
  },
}

const NODE_DETAILS: Record<string, { title: string; text: string }> = {
  touch: {
    title: "Touchscreen UI",
    text: "A wall-mounted touchscreen dashboard for live status and manual control, running fullscreen in the garage.",
  },
  llm: {
    title: "LLM",
    text: "Natural-language reasoning for voice and text commands. The system is provider-agnostic, so swapping models requires no changes to the hardware layer.",
  },
  pi: {
    title: "Raspberry Pi 5 — Intelligence Layer",
    text: "The brain of the system. It hosts the interface, the voice pipeline, and the messaging layer that turns natural-language intent into hardware actions, then talks down to the Arduino over a simple serial link.",
  },
  arduino: {
    title: "Arduino Uno R3 — Hardware Layer",
    text: "Owns all primitive sensor input and hardware output. Deliberately has no network awareness and no business logic: it reports readings upstream and executes commands sent down. Keeping hardware concerns isolated means the intelligence layer above it can be rewritten or replaced without touching a wire.",
  },
  temp: {
    title: "Temperature & Humidity",
    text: "Reports ambient conditions in the garage — the baseline signal for climate-aware automation.",
  },
  motion: {
    title: "Motion Sensors (×3)",
    text: "Passive infrared sensors covering the space, used for presence-triggered behavior such as lighting.",
  },
  ir: {
    title: "IR Receiver",
    text: "Infrared remote input, mapped for direct manual control of outputs without going through the Pi.",
  },
  display: {
    title: "Character Display",
    text: "A local 16×2 display for at-a-glance status that stays readable even if the Pi is offline.",
  },
  leds: {
    title: "Addressable LED Strip",
    text: "Individually addressable strip on its own dedicated power supply, driven for both lighting and visual status feedback.",
  },
}

function GarageNodeView({ data, selected }: NodeProps<DiagramNode>) {
  const accent = ACCENTS[data.accent ?? "hardware"]

  return (
    <div
      className={`${data.box ?? "w-[145px]"} rounded-lg border bg-card px-3 py-2 text-center transition-shadow ${
        selected ? accent.active : accent.idle
      }`}
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

/** The Pi carries a gradient border to mark it as the hub the whole system
    hangs off of. */
function BrainNodeView({ data, selected }: NodeProps<DiagramNode>) {
  return (
    <div
      className={`${data.box ?? "w-[200px]"} rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 p-[1.5px] transition-shadow ${
        selected
          ? "shadow-[0_0_20px_rgba(139,92,246,0.45)]"
          : "shadow-[0_0_20px_rgba(139,92,246,0.22)]"
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

/** Board boundary for the Arduino, holding the sensors and outputs it owns. */
function BoardGroupView({ data, selected }: NodeProps<DiagramNode>) {
  return (
    <div
      className={`relative h-full w-full rounded-xl border-2 bg-teal-500/5 px-3 py-2 text-left shadow-[0_0_28px_rgba(45,212,191,0.15)] transition-colors ${
        selected
          ? "border-teal-400 ring-2 ring-teal-400/30"
          : "border-teal-500/50"
      }`}
    >
      <HandleSet />
      <div className="absolute top-3 right-3 flex gap-1">
        <span className="size-1.5 animate-pulse rounded-full bg-teal-400 motion-reduce:animate-none" />
        <span className="size-1.5 rounded-full bg-zinc-600" />
      </div>
      <div className="text-sm font-medium text-teal-300">{data.label}</div>
      {data.sub && (
        <div className="text-xs text-muted-foreground">{data.sub}</div>
      )}
    </div>
  )
}

const nodeTypes = {
  node: GarageNodeView,
  brain: BrainNodeView,
  board: BoardGroupView,
}

const LAYOUT = {
  wide: {
    touch: { x: 0, y: 20 },
    llm: { x: 0, y: 140 },
    pi: { x: 230, y: 75 },
    arduino: { x: 500, y: 0 },
  },
  stacked: {
    touch: { x: 0, y: 0 },
    llm: { x: 155, y: 0 },
    pi: { x: 50, y: 120 },
    arduino: { x: 0, y: 240 },
  },
} as const

function buildNodes(stacked: boolean): DiagramNode[] {
  const at = stacked ? LAYOUT.stacked : LAYOUT.wide

  return [
    {
      id: "touch",
      type: "node",
      position: at.touch,
      data: {
        label: "Touchscreen UI",
        sub: "status + control",
        accent: "human",
      },
    },
    {
      id: "llm",
      type: "node",
      position: at.llm,
      data: { label: "LLM", sub: "voice + intent", accent: "ai" },
    },
    {
      id: "pi",
      type: "brain",
      position: at.pi,
      data: { label: "Raspberry Pi 5", sub: "intelligence layer" },
    },
    {
      id: "arduino",
      type: "board",
      position: at.arduino,
      style: { width: 300, height: 310 },
      data: { label: "Arduino Uno R3", sub: "hardware layer" },
    },
    {
      id: "temp",
      type: "node",
      parentId: "arduino",
      position: { x: 15, y: 60 },
      data: {
        label: "Temp / Humidity",
        sub: "DHT11",
        box: "w-[130px]",
        accent: "hardware",
      },
    },
    {
      id: "motion",
      type: "node",
      parentId: "arduino",
      position: { x: 155, y: 60 },
      data: {
        label: "Motion ×3",
        sub: "PIR",
        box: "w-[130px]",
        accent: "hardware",
      },
    },
    {
      id: "ir",
      type: "node",
      parentId: "arduino",
      position: { x: 15, y: 140 },
      data: {
        label: "IR Remote",
        sub: "receiver",
        box: "w-[130px]",
        accent: "hardware",
      },
    },
    {
      id: "display",
      type: "node",
      parentId: "arduino",
      position: { x: 155, y: 140 },
      data: {
        label: "Display",
        sub: "16×2 LCD",
        box: "w-[130px]",
        accent: "hardware",
      },
    },
    {
      id: "leds",
      type: "node",
      parentId: "arduino",
      position: { x: 15, y: 220 },
      data: {
        label: "LED Strip",
        sub: "addressable, 12V",
        box: "w-[270px]",
        accent: "hardware",
      },
    },
  ]
}

function buildEdges(stacked: boolean): Edge[] {
  const out = stacked ? "b-s" : "r-s"
  const into = stacked ? "t-t" : "l-t"

  return [
    {
      id: "touch-pi",
      source: "touch",
      target: "pi",
      sourceHandle: out,
      targetHandle: into,
      animated: true,
      style: { stroke: "#34d399", opacity: 0.7 },
      markerEnd: { type: MarkerType.ArrowClosed, color: "#34d399" },
    },
    {
      id: "llm-pi",
      source: "llm",
      target: "pi",
      sourceHandle: out,
      targetHandle: into,
      animated: true,
      style: { stroke: VIOLET, opacity: 0.8 },
      markerEnd: { type: MarkerType.ArrowClosed, color: VIOLET },
    },
    {
      // two-way: the Pi sends commands down, the Arduino reports readings up
      id: "pi-arduino",
      source: "pi",
      target: "arduino",
      sourceHandle: out,
      targetHandle: into,
      animated: true,
      label: "serial link",
      style: { stroke: TEAL, opacity: 0.8 },
      markerStart: { type: MarkerType.ArrowClosed, color: TEAL },
      markerEnd: { type: MarkerType.ArrowClosed, color: TEAL },
    },
  ]
}

function GarageAutomationBody() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const stacked = useStackedLayout()

  const nodes = useMemo(() => buildNodes(stacked), [stacked])
  const edges = useMemo(() => buildEdges(stacked), [stacked])

  const onNodeClick: NodeMouseHandler = useCallback((_event, node) => {
    setSelectedId(node.id)
  }, [])

  const onPaneClick = useCallback(() => setSelectedId(null), [])

  const detail = selectedId ? NODE_DETAILS[selectedId] : null

  return (
    <section id="GarageAutomationBody" className="flex flex-col gap-4 pb-24">
      <div className="h-[520px] w-full overflow-hidden rounded-lg border md:h-[420px]">
        <ReactFlow
          // remount on layout switch so fitView re-runs for the new shape
          key={stacked ? "stacked" : "wide"}
          colorMode="dark"
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          {...staticFlowProps}
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

function GarageAutomationFooter() {
  return (
    <div className="hidden md:block md:text-muted">
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Arduino / C++
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Raspberry Pi
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Python
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        React / TypeScript
      </Badge>
      <Badge className="mx-2 text-emerald-700" variant="outline">
        Status: <span className="text-blue-600">Phase 1 complete</span>
      </Badge>
    </div>
  )
}

export { GarageAutomationBody, GarageAutomationFooter }
