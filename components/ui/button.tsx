"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-copper)] text-[var(--color-fg-primary)] hover:bg-[var(--color-copper-hover)] shadow-[0_0_0_rgba(193,99,45,0)] hover:shadow-[0_0_32px_rgba(193,99,45,0.45)]",
        ghost:
          "bg-transparent border border-[var(--color-border-default)] text-[var(--color-fg-primary)] hover:border-[var(--color-copper)] hover:text-[var(--color-copper-hover)]",
        outline:
          "border border-[var(--color-fg-primary)]/30 text-[var(--color-fg-primary)] bg-transparent hover:bg-[var(--color-fg-primary)]/5",
        secondary:
          "bg-[var(--color-bg-elevated)] text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-surface)]",
        link: "text-[var(--color-copper)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
