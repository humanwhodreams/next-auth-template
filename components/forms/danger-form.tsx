"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { user_schema } from "@/lib/validators";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const email_only_schema = user_schema.pick({ email: true });

export function DangerForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof email_only_schema>>({
    resolver: zodResolver(email_only_schema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof email_only_schema>) {
    console.log(values.email);
    form.reset();
    setIsOpen(false);
  }

  const error = form.getFieldState("email").error;

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        className={cn(buttonVariants({ variant: "destructive", size: "sm" }))}
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
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full mb-4 space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      To confirm, type &quot;user-email-address&quot; in the box
                      below
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-4">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          variant={"muted"}
                          dimension={"lg"}
                          className="text-base"
                          hasError={error && true}
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button type="submit">Continue</Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
