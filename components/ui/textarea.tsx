import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[100px] w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-base)] px-4 py-3 text-sm text-[var(--color-fg-primary)] placeholder:text-[var(--color-fg-muted)] focus-visible:outline-none focus-visible:border-[var(--color-copper)] focus-visible:ring-2 focus-visible:ring-[var(--color-copper)]/30 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
export { Textarea };
