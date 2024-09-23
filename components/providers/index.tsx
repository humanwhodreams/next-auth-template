import * as React from "react";

import { TailwindIndicator } from "@/components/ui/tailwind-indicator";
import { ThemeProvider } from "@/components/providers/theme";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Readonly<Props>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--muted))_1px,transparent_1px)] [background-size:16px_16px]"></div>
      {children}
      <TailwindIndicator />
    </ThemeProvider>
  );
}
