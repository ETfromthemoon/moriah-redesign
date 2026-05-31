import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-base)] px-4 py-2 text-sm text-[var(--color-fg-primary)] placeholder:text-[var(--color-fg-muted)] focus-visible:outline-none focus-visible:border-[var(--color-copper)] focus-visible:ring-2 focus-visible:ring-[var(--color-copper)]/30 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
export { Input };
