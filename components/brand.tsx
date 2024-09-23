import Link from "next/link";
import { cn } from "@/lib/cn";
import { focus_ring } from "@/lib/focus";

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
      Acme
    </Link>
  );
}
