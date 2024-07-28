"use client";

import { AuthCard } from "@/components/auth/auth-card";
import { type _signInSchema, signInSchema } from "@/lib/_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FormAlert } from "./form-alert";
import { useState, useTransition } from "react";
import { signInAction } from "@/action/auth/signin-action";
import { Loader2 } from "lucide-react";

type ServerResponse = {
  status: "success" | "error" | "no";
  message: string;
};

export function SigninForm() {
  const [pending, startTransition] = useTransition();
  const [serverResponse, setServerResponse] = useState<ServerResponse>({
    status: "no",
    message: "",
  });

  const form = useForm<_signInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: _signInSchema) {
    setServerResponse({status: "no", message: ""});

    startTransition(() => {
      signInAction(values).then((data) => {
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
          title: "Welcome back",
          description: "Please sign in to your account.",
        },
        redirect: {
          message: "Don't have an account?",
          component: {
            label: "Sign up.",
            href: "/sign-up",
          },
        },
        oAuth: {
          show: true,
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
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium transition-colors duration-200 text-muted-foreground hover:text-tertiary focus-ring"
            >
              Forgot password?
            </Link>
          </div>

          <FormAlert status={serverResponse.status} message={serverResponse.message} />

          <Button
            type="submit"
            // variant="tertiary"
            className="w-full"
            disabled={pending}
          >
            {pending ? (
              <Loader2 className="size-4 flex-shrink-0 mr-2 animate-spin" />
            ) : null}
            Sign in
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
