import * as React from "react";

import { cn } from "@/lib/cn";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: Props) {
  return (
    <section
      className={cn(
        "flex flex-col items-start gap-2 px-4 py-8 mx-auto md:py-12 md:pb-8 lg:py-12 lg:pb-10 max-w-2xl lg:px-0",
        className
      )}
    >
      {children}
    </section>
  );
}
