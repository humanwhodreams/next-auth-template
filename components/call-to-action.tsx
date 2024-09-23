import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <div className="flex flex-col gap-2 mt-8 md:flex-row md:items-center md:justify-center">
      <Button type="button" variant={"secondary"} size={"sm"} asChild>
        <Link href={"/sign-up"}>
          Sign up &mdash;<span className="ml-1">IT&apos;S FREE</span>
        </Link>
      </Button>
      <Button type="button" variant={"text"} size={"sm"} asChild>
        <Link href={"/docs"}>Documentation</Link>
      </Button>
    </div>
  );
}
