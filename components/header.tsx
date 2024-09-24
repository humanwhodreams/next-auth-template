import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "./user-button";
import { cn } from "@/lib/cn";

interface Props {
  classes?: {
    header?: {
      className: string;
    };
    nav?: {
      className: string;
    };
  };
}
export function Header({ classes }: Props) {
  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 w-full",
        classes?.header?.className
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between h-16 max-w-4xl px-4 mx-auto sm:px-6 md:px-8 lg:px-0",
          classes?.nav?.className
        )}
      >
        <Brand />
        <div className="flex items-center gap-x-2">
          <ThemeToggle />
          <UserButton user={{ name: "Acme Raccoon" }} />
        </div>
      </nav>
    </header>
  );
}
