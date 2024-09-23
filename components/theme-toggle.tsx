"use client";

import { MoonIcon, SunDimIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const { isMounted } = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          type="button"
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <MoonIcon className="flex-shrink-0 fill-current text-muted-foreground size-5" />
          ) : (
            <SunDimIcon className="flex-shrink-0 fill-current text-muted-foreground size-5" />
          )}
          <span className="sr-only">switch theme</span>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Toggle theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
