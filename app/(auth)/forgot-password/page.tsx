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
import { ReRoute } from "@/components/ui/re-route";
import { Section } from "@/components/ui/section";
import {
  forgot_password_schema,
  type Forgot_Password_Schema,
} from "@/lib/validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Page() {
  const form = useForm<Forgot_Password_Schema>({
    resolver: zodResolver(forgot_password_schema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: Forgot_Password_Schema) {
    console.log(values.email);
    form.reset();
  }

  const error = form.getFieldState("email").error;

  return (
    <Section className="items-center justify-center">
      <h1>Forgot password</h1>
      <span className="lead">Enter credentials to get instructions.</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-6 space-y-4 md:w-96"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    variant={"muted"}
                    className="text-base"
                    placeholder="name@do.main"
                    dimension="lg"
                    hasError={error && true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Get instructions
          </Button>
        </form>
      </Form>
      <ReRoute
        route={{ label: "Sign in.", href: "/sign-in" }}
        description="Remembered password?"
      />
    </Section>
  );
}
