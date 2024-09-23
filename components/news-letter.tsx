import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsLetter() {
  return (
    <div className="w-full mt-8">
      <h2>Tech, Art &amp; Dreams</h2>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati
        tempora hic labore voluptatibus, distinctio, accusamus odio natus
        nostrum adipisci fuga pariatur, mollitia voluptas libero velit animi
        atque iusto accusantium?
      </p>
      <div className="w-full space-y-3">
        <div className="space-y-2">
          <Label className="sr-only">Email address</Label>
          <Input
            type="email"
            variant={"default"}
            dimension={"sm"}
            placeholder="Enter your email"
            className="text-base"
          />
        </div>
        <Button type="submit" className="w-full">
          Join Newsletter
        </Button>
      </div>
    </div>
  );
}
