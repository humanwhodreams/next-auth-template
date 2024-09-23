import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";

interface Props {
  params: {
    token: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <Section className="items-center justify-center">
      <h1>Reset password</h1>
      <span className="lead">Enter new credentials to gain access.</span>
      <span className="px-2 py-1.5 flex items-center rounded-full bg-muted text-muted-foreground text-sm">
        <CheckCircle2 className="flex-shrink-0 mr-2 size-4 dark:fill-green-950 dark:text-green-600 fill-emerald-300/80 text-emerald-700" />
        token<span className="mx-1 text-primary">{params.token}</span> expires in 12s
      </span>

      <form action="#" className="my-6 space-y-4 md:w-96">
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
        <Button type="submit" className="w-full">
          Reset password
        </Button>
      </form>
    </Section>
  );
}
