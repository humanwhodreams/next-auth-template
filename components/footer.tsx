import { Brand } from "@/components/brand";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { focus_ring } from "@/lib/focus";

export function Footer() {
  return (
    <footer className="w-full">
      <nav className="h-12 flex items-center justify-between max-w-4xl px-4 py-1.5 mx-auto sm:px-6 md:px-8 lg:px-0">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline">
          <Brand />
          <span className="muted">
            Built in public by
            <Link
              href={"#"}
              className={cn(
                "mx-1 hover:text-primary",
                focus_ring
              )}
            >
              humanwhodreams ↗
            </Link>.
          </span>
        </div>
        <div className="flex items-center gap-x-4">
          <span className="muted">&copy; 2024 Acme. MIT Licensed.</span>
        </div>
      </nav>
    </footer>
  );
}
