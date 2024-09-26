import * as React from "react";


import { cn } from "@/lib/cn";


export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, dimension, hasError, ...props }, ref) => {
    return (
      <textarea
        className={cn(
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
