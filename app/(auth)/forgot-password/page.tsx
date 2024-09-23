import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReRoute } from "@/components/ui/re-route";
import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <Section className="items-center justify-center">
      <h1>Forgot password</h1>
      <span className="lead">Enter credentials to get instructions.</span>
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
        <Button type="submit" className="w-full">
          Get instructions
        </Button>
      </form>
      <ReRoute
        route={{ label: "Sign in.", href: "/sign-in" }}
        description="Remembered password?"
      />
    </Section>
  );
}
