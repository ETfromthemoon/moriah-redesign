"use client";
import React, { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#E8B873",
      shimmerSize = "0.08em",
      shimmerDuration = "3s",
      borderRadius = "8px",
      background = "linear-gradient(135deg, #C1632D 0%, #A8451A 100%)",
      className,
      children,
      ...props
    },
    ref
  ) => (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-8 py-3.5 text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        "hover:shadow-[0_0_40px_rgba(193,99,45,0.5)]",
        className
      )}
      ref={ref}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden [border-radius:var(--radius)]">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
      <span className="relative z-10 font-medium tracking-tight">{children}</span>
    </button>
  )
);
ShimmerButton.displayName = "ShimmerButton";
