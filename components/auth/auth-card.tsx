import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { OAuths } from "./oauths";
import { ReactNode } from "react";

type Options = {
  header: {
    title: string;
    description: string;
  };
  redirect: {
    message: string;
    component: {
      label: string;
      href: string;
    };
  };
  oAuth?: {
    label: string;
    show: boolean;
  };
};

interface Props {
  children: ReactNode;
  options: Options;
}

export function AuthCard({ children, options }: Props) {
  return (
    <Card className="shadow-md bg-muted/55 w-full sm:w-[400px]">
      <CardHeader>
        <CardTitle>{options.header.title}</CardTitle>
        <CardDescription>{options.header.description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {options.oAuth?.show ? (
        <CardFooter>
          <div className="grid w-full grid-cols-1 gap-2">
            <ContinueWith label={options.oAuth.label} />
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <OAuths providers={{}} />
            </div>
          </div>
        </CardFooter>
      ) : null}
      <CardFooter className="justify-center text-sm text-muted-foreground">
        {options.redirect.message}
        <Link
          href={options.redirect.component.href}
          className="ml-1 font-medium transition-colors duration-200 hover:text-tertiary"
        >
          {options.redirect.component.label}
        </Link>
      </CardFooter>
    </Card>
  );
}

function ContinueWith({ label }: { label: string }) {
  return (
    <div className="flex items-center py-3 text-xs uppercase text-muted-foreground before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6">
      {label}
    </div>
  );
}
