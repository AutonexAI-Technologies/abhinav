"use client";

const ITEMS = [
  "Resistance Training",
  "Personal Training",
  "Meal & Workouts",
  "Cardio Exercises",
  "Online Coaching",
  "Custom Diet Plans",
  "Hybrid Programming",
  "WhatsApp Support",
];

const TRACK = [...ITEMS, ...ITEMS];

export default function ServicesTicker() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "rgba(0,200,240,0.04)",
        borderTop: "1px solid rgba(0,200,240,0.12)",
        borderBottom: "1px solid rgba(0,200,240,0.12)",
        padding: "20px 0",
        position: "relative",
        zIndex: 5,
        WebkitMaskImage:
          "linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)",
        maskImage:
          "linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)",
      }}
      aria-hidden="true"
    >
      <div
        className="ticker-track"
        onMouseEnter={e =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
        }
        onMouseLeave={e =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "running")
        }
      >
        {TRACK.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-half 28s linear infinite;
          gap: 0;
        }
        @keyframes ticker-half {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 0 40px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.2s;
          font-family: 'Bebas Neue', 'Syne', sans-serif;
          font-size: 1rem;
        }
        .ticker-item:hover { color: #00C8F0; }
        .ticker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00C8F0;
          opacity: 0.6;
          flex-shrink: 0;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
