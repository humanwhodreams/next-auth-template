import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function SiteHeader() {
  return (
    <header
      className={cn(
        "w-full sticky top-0 inset-x-0 transition-all"
        // "bg-background/55 backdrop-blur-md border-b border-border",
        // "bg-transparent"
      )}
    >
      <nav
        aria-label="global"
        className="flex flex-row items-center justify-between px-4 py-2"
      >
        <Link href="/" className={cn("font-semibold focus-ring text-2xl")}>
          Nexautem
        </Link>

        <div className="flex items-center">
          <ul
            aria-label="primary-navigation"
            className="hidden md:flex md:items-center"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({
                      variant: "text",
                      className: "text-base",
                    })
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul aria-label="secondary-navigation" className="flex items-center">
            <li>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({
                    variant: "gloss",
                    className: "text-base rounded-full",
                  })
                )}
              >
                Sign in
                <ArrowUpRight className="size-4 text-muted-foreground group-hover/button:text-tertiary flex-shrink-0 ml-2" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
