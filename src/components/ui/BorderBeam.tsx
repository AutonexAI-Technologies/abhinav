"use client";
import { cn } from "@/lib/cn";
import { useRef } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  colorFrom = "#00C8F0",
  colorTo = "#ffffff",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit] [border:1.5px_solid_transparent]", className)}
      style={{
        background: `linear-gradient(var(--bg-card), var(--bg-card)) padding-box, conic-gradient(from var(--beam-angle, 0deg) at 50% 50%, transparent 0deg, ${colorFrom} 90deg, ${colorTo} 180deg, transparent 270deg) border-box`,
        WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        maskComposite: "exclude",
        borderWidth,
      }}
    >
      <style>{`
        @property --beam-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes border-beam-spin {
          to { --beam-angle: 360deg; }
        }
      `}</style>
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          animation: `border-beam-spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
