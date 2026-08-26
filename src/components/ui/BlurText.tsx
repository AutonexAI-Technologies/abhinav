"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/cn";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

export default function BlurText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  as: Tag = "span",
}: BlurTextProps) {
  const ref  = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { amount: threshold, once });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [inView, controls, once]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("inline", className)} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, filter: "blur(12px)", y: 16 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: {
                duration,
                delay: delay + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
