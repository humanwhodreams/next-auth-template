import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { focus_error, focus_input } from "@/lib/focus";

import { cn } from "@/lib/cn";

const textareaVariants = cva(
  [
    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
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
        default: "min-h-[80px]",
        sm: "min-h-[40px]",
        lg: "min-h-[120px]",
        xl: "min-h-[160px]",
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, dimension, hasError, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, dimension, hasError, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
