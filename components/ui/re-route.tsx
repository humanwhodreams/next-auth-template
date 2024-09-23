import Link from "next/link";
import { cn } from "@/lib/cn";
import { focus_ring } from "@/lib/focus";

interface RouteProps {
  label: string;
  href: string;
}

interface Props {
  description?: string;
  route: RouteProps;
}

/**
 * A component that routes to any given path. It contains a description and route.
 * @param route An object that contains the route information
 * @param description The description of the reroute
 *
 * @returns React.JSX.Element
 */
export function ReRoute({ route, description }: Props) {
  return (
    <div>
      <p className="text-muted-foreground">
        {description}{" "}
        <Link
          href={route.href}
          className={cn("hover:text-primary", focus_ring)}
        >
          {route.label}
        </Link>
      </p>
    </div>
  );
}
