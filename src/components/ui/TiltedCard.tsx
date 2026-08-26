"use client";
import { useRef, MouseEvent, CSSProperties } from "react";
import { cn } from "@/lib/cn";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
  scale?: number;
}

export default function TiltedCard({
  children,
  className,
  tiltAmount = 10,
  glareOpacity = 0.15,
  scale = 1.03,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glareRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotX = (y - 0.5) * -tiltAmount;
    const rotY = (x - 0.5) * tiltAmount;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
    glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,${glareOpacity}), transparent 70%)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glareRef.current) return;
    cardRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    glareRef.current.style.background = "transparent";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative cursor-pointer select-none", className)}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease" }}
    >
      {children}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-all duration-200"
      />
    </div>
  );
}
