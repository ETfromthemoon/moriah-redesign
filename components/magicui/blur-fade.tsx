"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  once?: boolean;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 8,
  blur = "8px",
  once = true,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
