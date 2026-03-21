import "../../style/5Speed.css"
export default function FiveSpeed({
  className = "bg-violet-900 rounded-sm",
  color = "oklch(58% 0.031 107.3)",
  reverseColor = "#0F6E56",
}) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="27"
        height="27"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        // Neutral spine
        <line x1="4" y1="12" x2="20" y2="12" />
        // R spur
        <line x1="4" y1="7.5" x2="4" y2="12" />
        // Col 1 (x=9.3): gear 1 up, gear 2 down
        <line x1="9.3" y1="7.5" x2="9.3" y2="16.5" />
        // Col 2 (x=14.7): gear 3 up, gear 4 down
        <line x1="14.7" y1="7.5" x2="14.7" y2="16.5" />
        // Col 3 (x=20): gear 5 up to spine only
        <line x1="20" y1="7.5" x2="20" y2="12" />
        // R
        <circle cx="4" cy="6" r="1.5" stroke={reverseColor} />
        // 1
        <circle cx="9.3" cy="6" r="1.5" />
        // 2
        <circle cx="9.3" cy="18" r="1.5" />
        // 3
        <circle cx="14.7" cy="6" r="1.5" />
        // 4
        <circle cx="14.7" cy="18" r="1.5" />
        // 5
        <circle cx="20" cy="6" r="1.5" />
      </svg>
    </>
  )
}
