"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { user_schema } from "@/lib/validators";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const email_only_schema = user_schema.pick({ email: true });

export function EmailForm() {
  const form = useForm<z.infer<typeof email_only_schema>>({
    resolver: zodResolver(email_only_schema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof email_only_schema>) {
    console.log(values.email);
    form.reset();
  }

  const error = form.getFieldState("email").error;

  return (
    <div className="w-full mb-4 space-y-2">
      <h3>Change email address</h3>

      <div className="space-y-4">
        <p className="p">
          Change your email address. This is your primary email address used to
          manage your account.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Change email address</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input
                        type="email"
                        placeholder="name@do.main"
                        variant={"muted"}
                        dimension={"lg"}
                        className="text-base"
                        hasError={error && true}
                        {...field}
                      />
                      <Button type="submit">Update email address</Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
