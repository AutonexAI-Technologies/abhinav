"use client";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 40,
  vertical = false,
  repeat = 3,
}: MarqueeProps) {
  const duration = `${speed}s`;

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {/* Fade edges */}
      {!vertical && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24"
            style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24"
            style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />
        </>
      )}
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-6",
            vertical ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `${vertical ? "marquee-v" : "marquee-h"} var(--duration, 40s) linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
          aria-hidden={i > 0}
        >
          {children}
        </div>
      ))}
      <style>{`
        @keyframes marquee-h { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes marquee-v { from { transform: translateY(0); } to { transform: translateY(-100%); } }
      `}</style>
    </div>
  );
}
