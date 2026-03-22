export default function Terminal({
  className = "bg-teal-900 rounded-sm",
  height = 24,
  width = 24,
  color = "#00a98c",
  strkwidth = 2,
}) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="none"
        stroke={color}
        strokeWidth={strkwidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 1 }}
      >
        <path fill="none" d="m5 7l5 5l-5 5m7 2h7" />
      </svg>
    </>
  )
}
