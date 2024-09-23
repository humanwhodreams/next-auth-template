import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "./user-button";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between h-16 max-w-4xl px-4 mx-auto sm:px-6 md:px-8 lg:px-0">
        <Brand />
        <div className="flex items-center gap-x-2">
          <UserButton user={{ name: "Acme Raccoon" }} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
