import "./cts.css"

export default function CTS({ size = 120, animated = true }) {
  const aqua = "#22d3ee"

  // Pentagon: center(60,60) r=44, point-up, 72° spacing
  // P0:  60.00,  16.00  (top)
  // P1: 101.85,  46.40  (upper-right)
  // P2:  85.86,  95.60  (lower-right)
  // P3:  34.14,  95.60  (lower-left)
  // P4:  18.15,  46.40  (upper-left)
  const pts = "60,16 101.85,46.40 85.86,95.60 34.14,95.60 18.15,46.40"

  const vias = [
    { cx: 60, cy: 16 },
    { cx: 101.85, cy: 46.4 },
    { cx: 85.86, cy: 95.6 },
    { cx: 34.14, cy: 95.6 },
    { cx: 18.15, cy: 46.4 },
  ]

  const dots = [
    [15, 15],
    [30, 15],
    [45, 15],
    [60, 15],
    [75, 15],
    [90, 15],
    [105, 15],
    [15, 30],
    [105, 30],
    [15, 45],
    [105, 45],
    [15, 60],
    [105, 60],
    [15, 75],
    [105, 75],
    [15, 90],
    [30, 90],
    [45, 90],
    [60, 90],
    [75, 90],
    [90, 90],
    [105, 90],
    [15, 105],
    [30, 105],
    [45, 105],
    [60, 105],
    [75, 105],
    [90, 105],
    [105, 105],
  ]

  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CTS logo"
        role="img"
      >
        {/* Background */}
        <rect width="120" height="120" rx="20" fill="#0d1117" />

        {/* PCB grid dots */}
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1" fill={aqua} opacity="0.055" />
        ))}

        {/* Pentagon trace */}
        <polygon
          points={pts}
          fill="none"
          stroke={aqua}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? "cts-trace" : undefined}
        />

        {/* Vias — one per bolt hole */}
        {vias.map((v, i) => (
          <g key={i}>
            <circle
              cx={v.cx}
              cy={v.cy}
              r="2.8"
              fill={aqua}
              className={animated ? `cts-via-fill cts-v${i}` : undefined}
              opacity={animated ? undefined : 1}
            />
            <circle
              cx={v.cx}
              cy={v.cy}
              r="5.2"
              fill="none"
              stroke={aqua}
              strokeWidth="1.2"
              className={animated ? `cts-via-ring cts-v${i}` : undefined}
              opacity={animated ? undefined : 1}
            />
          </g>
        ))}

        {/* CTS monogram */}
        <text
          x="60"
          y="69"
          textAnchor="middle"
          fontFamily="font-cambria"
          fontWeight="700"
          fontSize="30"
          letterSpacing="3"
          fill="#e8e8e8"
        >
          CTS
        </text>
      </svg>
    </>
  )
}
