export default function Warehouse({
  className = "bg-teal-900 rounded-sm",
  height = 24,
  width = 24,
  color = "var(--warehouse-icon-strk)",
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: "1", backgroundColor: "var(--warehouse-icon)" }}
      >
        <path d="M3 21V8l9-4l9 4v13" />
        <path d="M13 13h4v8H7v-6h6" />
        <path d="M13 21v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      </svg>
    </>
  )
}
