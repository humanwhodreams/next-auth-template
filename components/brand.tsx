import Link from "next/link";
import { cn } from "@/lib/cn";
import { focus_ring } from "@/lib/focus";
import { site_config } from "@/site.config";

interface Props {
  className?: string;
  href?: `/${string}`;
}

export function Brand({ className, href }: Props) {
  return (
    <Link
      href={href || "/"}
      className={cn("text-xl font-bold", className, focus_ring)}
    >
      {site_config.title}
    </Link>
  );
}
