import * as React from "react";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function PageHeader({ children, className }: Props) {
  return (
    <Section className={cn("items-center justify-center", className)}>
      {children}
    </Section>
  );
}

interface TitleProps extends Props {}

function Title({ children }: TitleProps) {
  return (
    <h1
      className={cn(
        "font-bold leading-tight tracking-tighter lg:leading-[1.1]"
      )}
    >
      {children}
    </h1>
  );
}
PageHeader.Title = Title;

interface LeadProps extends Props {}

function Lead({ children }: LeadProps) {
  return <div className={cn("text-center lead")}>{children}</div>;
}
PageHeader.Lead = Lead;
