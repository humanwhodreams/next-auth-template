import { FingerprintIcon } from "lucide-react";
import Icons from "@/components/ui/icons";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { focus_ring } from "@/lib/focus";

const ITEMS = [
  {
    label: "Next.js",
    href: "https://nextjs.org",
    icon: Icons.nextjs,
    inverted: false,
  },
  {
    label: "React",
    href: "https://reactjs.org",
    icon: Icons.react,
    inverted: false,
  },
  {
    label: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: Icons.typescript,
    inverted: false,
  },
  {
    label: "Tailwincss",
    href: "https://tailwindcss.com",
    icon: Icons.tailwindcss,
    inverted: false,
  },
  {
    label: "Shadcn/ui",
    href: "https://ui.shadcn.com",
    icon: Icons.shadcn,
    inverted: true,
  },
  {
    label: "Resend",
    href: "https://resend.com",
    icon: Icons.resend,
    inverted: true,
  },
  {
    label: "Supabase",
    href: "https://supabase.com",
    icon: Icons.supabase,
    inverted: false,
  },
  {
    label: "Vercel",
    href: "https://vercel.com",
    icon: Icons.vercel,
    inverted: true,
  },
  {
    label: "Auth.js",
    href: "https://authjs.dev/getting-started",
    icon: FingerprintIcon,
    inverted: false,
  },
];

export function BuiltUsing() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4">
      {ITEMS.map((item, idx) => (
        <Link
          href={item.href}
          key={idx}
          rel="noreferrer"
          target="_blank"
          className={cn(
            "inline-flex items-center justify-center px-2 py-1 rounded-lg hover:bg-muted text-muted-foreground transition-colors",
            focus_ring
          )}
        >
          <item.icon
            className={cn(
              "flex-shrink-0 mr-2 size-8 aspect-square",
              item.inverted && "invert dark:invert-0"
            )}
          />
          {item.label}
        </Link>
      ))}
    </div>
  );
}
