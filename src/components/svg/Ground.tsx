export default function Ground({
  className = "rounded-sm",
  color = "var(--gnd-strk)",
}) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 1, backgroundColor: "var(--gnd)" }}
      >
        <path fill="none" d="M12 13V5m-8 8h16M7 16h10m-7 3h4" />
      </svg>
    </>
  )
}
