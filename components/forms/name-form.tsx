import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NameForm() {
  return (
    <form action="#" className="w-full mb-4 space-y-2">
      <Label>Change name</Label>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="humanwhodreams"
          variant={"muted"}
          dimension={"lg"}
          className="text-base"
        />
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
