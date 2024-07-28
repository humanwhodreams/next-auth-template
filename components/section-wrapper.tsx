import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string | string[];
}

export function SectionWrapper({ children, className }: Props) {
  return (
    <section
      className={cn("px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-5xl mx-auto", className)}
    >
      {children}
    </section>
  );
}
