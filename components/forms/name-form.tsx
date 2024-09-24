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

const name_only_schema = user_schema.pick({ name: true });

export function NameForm() {
  const form = useForm<z.infer<typeof name_only_schema>>({
    resolver: zodResolver(name_only_schema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof name_only_schema>) {
    console.log(values.name);
    form.reset();
  }

  const error = form.getFieldState("name").error;

  return (
    <div className="w-full mb-4 space-y-2">
      <h3>Change display name</h3>

      <div className="space-y-4">
        <p className="p">
          Change your name across the site. This is your display name across the
          site. it affects your <i className="muted">profile avatar</i> too.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mb-4 space-y-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Change name</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input
                        type="text"
                        placeholder="humanwhodreams"
                        variant={"muted"}
                        dimension={"lg"}
                        className="text-base"
                        hasError={error && true}
                        {...field}
                      />
                      <Button type="submit">Update name</Button>
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
