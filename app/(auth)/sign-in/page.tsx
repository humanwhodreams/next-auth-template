import { Button, buttonVariants } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ReRoute } from "@/components/ui/re-route";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

export default function Page() {
  return (
    <Section className="items-center justify-center">
      <h1>Sign in</h1>
      <span className="lead">Enter credentials to gain access.</span>
      <form action="#" className="my-6 space-y-4 md:w-96">
        <div className="space-y-2">
          <Label>Email address</Label>
          <Input
            type="email"
            variant={"muted"}
            className="text-base"
            placeholder="name@do.main"
          />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            type="password"
            variant={"muted"}
            className="text-base"
            placeholder="********"
          />
        </div>
        <div className="flex justify-end">
          <Link
            href={"/forgot-password"}
            className={cn(buttonVariants({ variant: "link", size: "xxs" }))}
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
      <ReRoute
        route={{ label: "Sign up.", href: "/sign-up" }}
        description="Do not have an account?"
      />
    </Section>
  );
}
