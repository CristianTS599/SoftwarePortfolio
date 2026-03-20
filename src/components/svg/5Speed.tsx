import "../../style/5Speed.css"
export default function FiveSpeed() {
  return (
    <>
      <svg
        width="100%"
        viewBox="0 0 680 420"
        xmlns="http://www.w3.org/2000/svg"
      >
        /*Neutral spine*/
        <line x1="185" y1="210" x2="470" y2="210" className="gate" />
        // R spur up from spine
        <line x1="185" y1="152" x2="185" y2="210" className="gate" />
        // Col1: 1 up, 2 down
        <line x1="290" y1="152" x2="290" y2="268" className="gate" />
        // Col2: 3 up, 4 down
        <line x1="380" y1="152" x2="380" y2="268" className="gate" />
        // Col3: 5 up to spine only
        <line x1="470" y1="152" x2="470" y2="210" className="gate" />
        // R circle
        <circle
          cx="185"
          cy="125"
          r="22"
          fill="#f5f5f5"
          stroke="#888780"
          stroke-width="1.5"
        />
        <text className="knob-label" x="185" y="125" fill="#888780">
          R
        </text>
        // 1
        <circle
          cx="290"
          cy="125"
          r="22"
          fill="#f5f5f5"
          stroke="#6b6b6b"
          stroke-width="1.5"
        />
        <text className="knob-label" x="290" y="125" fill="#1a1a1a">
          1
        </text>
        // 2
        <circle
          cx="290"
          cy="295"
          r="22"
          fill="#f5f5f5"
          stroke="#6b6b6b"
          stroke-width="1.5"
        />
        <text className="knob-label" x="290" y="295" fill="#1a1a1a">
          2
        </text>
        // 3
        <circle
          cx="380"
          cy="125"
          r="22"
          fill="#f5f5f5"
          stroke="#6b6b6b"
          stroke-width="1.5"
        />
        <text className="knob-label" x="380" y="125" fill="#1a1a1a">
          3
        </text>
        // 4
        <circle
          cx="380"
          cy="295"
          r="22"
          fill="#f5f5f5"
          stroke="#6b6b6b"
          stroke-width="1.5"
        />
        <text className="knob-label" x="380" y="295" fill="#1a1a1a">
          4
        </text>
        // 5
        <circle
          cx="470"
          cy="125"
          r="22"
          fill="#f5f5f5"
          stroke="#0F6E56"
          stroke-width="1.5"
        />
        <text className="knob-label" x="470" y="125" fill="#0F6E56">
          5
        </text>
        // N label
        <text className="caption" x="340" y="197">
          N
        </text>
      </svg>
    </>
  )
}
