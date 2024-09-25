"use client";
import { sign_up_schema, type Sign_Up_Schema } from "@/lib/validators";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReRoute } from "@/components/ui/re-route";
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

export default function Page() {
  const form = useForm<Sign_Up_Schema>({
    resolver: zodResolver(sign_up_schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: Sign_Up_Schema) {
    console.log(values);
    form.reset();
  }

  const error = {
    name: form.getFieldState("name").error,
    email: form.getFieldState("email").error,
    password: form.getFieldState("password").error,
    confirm_password: form.getFieldState("confirm_password").error,
  };

  return (
    <Section className="items-center justify-center">
      <h1>Sign up</h1>
      <span className="lead">Enter credentials to gain access.</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-6 space-y-4 md:w-96"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    variant={"muted"}
                    className="text-base"
                    placeholder="humanwhodreams"
                    hasError={error.name && true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    hasError={error.email && true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <div>
            <p className="text-center muted">
              By creating an account, you agree to the Terms &amp; Conditions
              and Privacy of the application.
            </p>
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
      </Form>
      <ReRoute
        route={{ label: "Sign in.", href: "/sign-in" }}
        description="Already have an account?"
      />
    </Section>
  );
}
