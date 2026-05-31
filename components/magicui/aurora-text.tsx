import { cn } from "@/lib/utils";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AuroraText({
  children,
  className,
  colors = ["#E8B873", "#C1632D", "#F5C77E", "#A8451A"],
  speed = 1,
}: AuroraTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span
      className={cn(
        "relative inline-block bg-[length:200%_auto] animate-[shimmer_var(--anim-duration,8s)_linear_infinite]",
        className
      )}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
