import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EmailForm() {
  return (
    <form action="#" className="w-full mb-4 space-y-2">
      <Label>Change email address</Label>
      <div className="flex items-center gap-4">
        <Input
          type="email"
          placeholder="name@do.main"
          variant={"muted"}
          dimension={"lg"}
          className="text-base"
        />
        <Button type="submit">Update email address</Button>
      </div>
    </form>
  );
}
