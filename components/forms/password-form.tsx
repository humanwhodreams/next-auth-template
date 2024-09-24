import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PasswordForm() {
  return (
    <div className="w-full mb-4 space-y-2">
      <h3>Change password</h3>
      <div className="space-y-4">
        <p className="p">
          To change your password, instructions will be sent to your email
          address.
        </p>
        <Button type="button" asChild>
          <Link href={"#"}>Get instructions ↗</Link>
        </Button>
      </div>
    </div>
  );
}
