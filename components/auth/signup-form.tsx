"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";

import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { FormAlert } from "./form-alert";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import type { _signUpSchema } from "@/lib/_schema";
import { signUpAction } from "@/action/auth/signup-action";
import { signUpSchema } from "@/lib/_schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ServerResponse = {
  status: "success" | "error" | "no";
  message: string;
};

export function SignupForm() {
  const [pending, startTransition] = useTransition();
  const [serverResponse, setServerResponse] = useState<ServerResponse>({
    status: "no",
    message: "",
  });

  const form = useForm<_signUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });

  function onSubmit(values: _signUpSchema) {
    setServerResponse({ status: "no", message: "" });

    startTransition(() => {
      signUpAction(values).then((data) => {
        setServerResponse({
          status: data.status,
          message: data.message,
        });
      });
    });
  }
  return (
    <AuthCard
      options={{
        header: {
          title: "Welcome to the club",
          description: "Please create your account.",
        },
        redirect: {
          message: "Already have an account?",
          component: {
            label: "Sign in.",
            href: "/sign-in",
          },
        },
        oAuth: {
          show: false,
          label: "or",
        },
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@email.com"
                    className="text-lg placeholder:text-lg"
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
                    placeholder="********"
                    className="text-lg placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    className="text-lg placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormAlert
            status={serverResponse.status}
            message={serverResponse.message}
          />

          <Button
            type="submit"
            variant="tertiary"
            className="w-full"
            disabled={pending}
          >
            {pending ? (
              <Loader2 className="size-4 flex-shrink-0 mr-2 animate-spin" />
            ) : null}
            Create account
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
