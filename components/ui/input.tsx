import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { focus_error, focus_input } from "@/lib/focus";

import { cn } from "@/lib/cn";

const inputVariants = cva(
  [
    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
    focus_input,
  ],
  {
    variants: {
      variant: {
        default: "bg-background hover:bg-background/80",
        secondary: "bg-secondary hover:bg-secondary/80",
        muted: "bg-muted hover:bg-muted/80",
      },
      dimension: {
        default: "h-10",
        sm: "h-9",
        lg: "h-11",
      },
      hasError: {
        true: focus_error,
      },
    },
    defaultVariants: {
      variant: "default",
      dimension: "default",
      hasError: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, dimension, hasError, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, dimension, hasError, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
