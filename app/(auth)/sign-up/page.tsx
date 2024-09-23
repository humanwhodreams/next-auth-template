import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReRoute } from "@/components/ui/re-route";
import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <Section className="items-center justify-center">
      <h1>Sign up</h1>
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
        <div className="space-y-2">
          <Label>Confirm password</Label>
          <Input
            type="password"
            variant={"muted"}
            className="text-base"
            placeholder="********"
          />
        </div>
        <div>
          <p className="text-center muted">
            By creating an account, you agree to the Terms &amp; Conditions and
            Privacy of the application.
          </p>
        </div>
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>
      <ReRoute
        route={{ label: "Sign in.", href: "/sign-in" }}
        description="Already have an account?"
      />
    </Section>
  );
}
