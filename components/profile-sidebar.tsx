import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/cn";

const LINKS = [
  {
    section: "Settings",
    links: [
      {
        label: "Profile",
        href: "/profile",
      },
      {
        label: "Account",
        href: "/account",
      },
      {
        label: "Devices",
        href: "/devices",
      },
    ],
  },
  {
    section: "Resources",
    links: [
      {
        label: "Documentation ↗",
        href: "#",
      },
      {
        label: "Terms & Conditions ↗",
        href: "/terms",
      },
      {
        label: "Privacy ↗",
        href: "/privacy",
      },
    ],
  },
  {
    section: "Company",
    links: [
      {
        label: "Philosophy ↗",
        href: "/philosophy",
      },
      {
        label: "About ↗",
        href: "/about",
      },
    ],
  },
];

export function ProfileSideBar() {
  return (
    <aside className="h-full">
      <div className="sticky top-[64px] min-h-[calc(100vh-64px)] flex flex-col items-start justify-start gap-4">
        {LINKS.map((links) => (
          <div
            key={links.section}
            className="flex flex-col items-start w-full gap-4"
          >
            <span className="flex items-center text-xs font-medium uppercase text-primary">
              <div className="w-10 h-1 mr-2 rounded-sm bg-primary" />
              {links.section}
            </span>
            <div className="flex flex-col w-full gap-2">
              {links.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: "muted-reverse",
                      size: "xxs",
                      className: "justify-start",
                    })
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
