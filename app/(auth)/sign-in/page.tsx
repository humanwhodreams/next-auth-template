"use client";
import { Button, buttonVariants } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ReRoute } from "@/components/ui/re-route";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";
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
import { sign_in_schema, type Sign_In_Schema } from "@/lib/validators";

export default function Page() {
  const form = useForm<Sign_In_Schema>({
    resolver: zodResolver(sign_in_schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: Sign_In_Schema) {
    console.log(values);
    form.reset();
  }

  const error = {
    email: form.getFieldState("email").error,
    password: form.getFieldState("password").error,
  };

  return (
    <Section className="items-center justify-center">
      <h1>Sign in</h1>
      <span className="lead">Enter credentials to gain access.</span>
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
          <div className="flex justify-end">
            <Link
              href={"/forgot-password"}
              className={cn(buttonVariants({ variant: "link", size: "xxs" }))}
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
      <ReRoute
        route={{ label: "Sign up.", href: "/sign-up" }}
        description="Do not have an account?"
      />
    </Section>
  );
}
