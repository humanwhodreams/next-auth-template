import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordForm() {
  return (
    <form action="#" className="w-full mb-4 space-y-2">
      <Label>Change password</Label>
      <div className="flex items-center gap-4">
        <Input
          type="password"
          placeholder="•••••••••••••••"
          variant={"muted"}
          dimension={"lg"}
          className="text-base"
          value={"•••••••••••••••"}
          readOnly={true}
          disabled={true}
          aria-disabled={true}
        />
        <Button type="submit">Get instructions</Button>
      </div>
    </form>
  );
}
