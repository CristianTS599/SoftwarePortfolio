import { useEffect, useState } from "react"
import { EdgeLabelRenderer, Handle, Position } from "@xyflow/react"

/**
 * Shared building blocks for the interactive architecture diagrams used in
 * project drawers. Node and edge *styling* stays local to each diagram --
 * only the mechanics live here.
 */

/** Invisible source+target handles on all four sides, so edges can anchor
    wherever a layout needs without touching the node component. */
export function HandleSet() {
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

/** Edge caption offset clear of the path so strokes and traveling dots never
    sit on top of the text. The zIndex matters: without it a caption that
    overlaps a node is painted behind it and reads as being cut off. */
export function EdgeCaption({
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

const STACK_QUERY = "(max-width: 767px)"

/** True when the viewport is narrow enough that a wide left-to-right diagram
    should restack top-to-bottom. */
export function useStackedLayout() {
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

  return stacked
}

/** Shared ReactFlow props: presentation-only diagrams that must not hijack
    page scrolling on touch devices. */
export const staticFlowProps = {
  nodesDraggable: false,
  nodesConnectable: false,
  edgesFocusable: false,
  zoomOnScroll: false,
  panOnScroll: false,
  preventScrolling: false,
  minZoom: 0.4,
  maxZoom: 1.5,
} as const
