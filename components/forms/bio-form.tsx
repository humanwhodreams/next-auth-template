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
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { user_schema } from "@/lib/validators";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bio_only_schema = user_schema.pick({ bio: true });

export function BioForm() {
  const form = useForm<z.infer<typeof bio_only_schema>>({
    resolver: zodResolver(bio_only_schema),
    defaultValues: {
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof bio_only_schema>) {
    console.log(values.bio);
    form.reset();
  }

  const error = form.getFieldState("bio").error;

  return (
    <div className="w-full mb-4 space-y-2">
      <h3>Bio</h3>

      <div className="space-y-4">
        <p className="p text-muted-foreground">Tell the people something about yourself.</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mb-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      dimension={"lg"}
                      variant={"muted"}
                      className="resize-none text-base"
                      placeholder="Tell the people something about yourself..."
                      hasError={error && true}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="md:w-96">
                Update bio
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
