import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "../ui/button";

import { cn } from "@/lib/cn";

export function DangerForm() {
  return (
    <div className="w-full p-4 mb-4 space-y-2 border rounded-md border-destructive bg-destructive/5">
      <h3 className="text-destructive">Danger Zone</h3>
      <p>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </p>
      <div>
        <AlertDialog>
          <AlertDialogTrigger
            className={cn(
              buttonVariants({ variant: "destructive", size: "sm" })
            )}
          >
            Delete my account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
