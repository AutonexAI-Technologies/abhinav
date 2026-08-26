"use client";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/cn";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export default function MagicCard({
  children,
  className,
  gradientSize = 320,
  gradientColor = "#00C8F0",
  gradientOpacity = 0.08,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-[20px] bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all duration-300",
        "hover:border-[var(--blue-border)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]",
        className
      )}
      style={
        {
          "--gradient-size": `${gradientSize}px`,
          "--gradient-color": gradientColor,
          "--gradient-opacity": gradientOpacity,
        } as React.CSSProperties
      }
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(var(--gradient-size) circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, "0")}, transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
