"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  remember_password_schema,
  type Remember_Password_Schema,
} from "@/lib/validators";

interface Props {
  params: {
    token: string;
  };
}

export default function Page({ params }: Props) {
  const form = useForm<Remember_Password_Schema>({
    resolver: zodResolver(remember_password_schema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: Remember_Password_Schema) {
    console.log(values);
    form.reset();
  }

  const error = {
    password: form.getFieldState("password").error,
    confirm_password: form.getFieldState("confirm_password").error,
  };
  return (
    <Section className="items-center justify-center">
      <h1>Reset password</h1>
      <span className="lead">Enter new credentials to gain access.</span>
      <span className="px-2 py-1.5 flex items-center rounded-full bg-muted text-muted-foreground text-sm">
        <CheckCircle2 className="flex-shrink-0 mr-2 size-4 dark:fill-green-950 dark:text-green-600 fill-emerald-300/80 text-emerald-700" />
        token
        <span className="mx-1 text-primary max-w-32 truncate">
          {params.token}
        </span>{" "}
        expires in 12 mins
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-6 space-y-4 md:w-96"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    variant={"muted"}
                    className="text-base"
                    placeholder="********"
                    hasError={error.password && true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    variant={"muted"}
                    className="text-base"
                    placeholder="********"
                    hasError={error.password && true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Reset password
          </Button>
        </form>
      </Form>
    </Section>
  );
}
