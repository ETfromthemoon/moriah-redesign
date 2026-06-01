"use client";
import { MotionConfig } from "motion/react";

/**
 * Wraps the app in MotionConfig with `reducedMotion="user"`, so every
 * motion/react animation (whileInView, blur reveals, parallax, marquee)
 * honors the OS `prefers-reduced-motion` setting. Transform/layout moves
 * are suppressed and collapse to opacity crossfades; the global CSS block
 * in globals.css only covers CSS animations, not these JS-driven ones.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
