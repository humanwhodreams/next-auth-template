import * as React from "react";

import { cn } from "@/lib/cn";

interface Props {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-start gap-2 px-4 py-8 mx-auto md:py-12 md:pb-8 lg:py-12 lg:pb-10 max-w-4xl lg:px-0 scroll-m-5",
        className
      )}
    >
      {children}
    </section>
  );
}
