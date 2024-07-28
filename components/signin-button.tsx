"use client";

import { ReactNode, useState } from "react";

import { useRouter } from "next/navigation";

type Options = {
  mode?: "modal" | "path";
};

interface Props extends Options {
  children: ReactNode;
}

export function SigninButton({ children, mode = "path" }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (mode === "modal") {
    return (
      <>
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          {children}
        </button>

        {isOpen ? (
          <div className="absolute z-50 p-4 border rounded-md top-1/2 bg-muted/25 border-border">
            <p>Authentication modal</p>
          </div>
        ) : null}
      </>
    );
  }

  if (mode === "path") {
    return (
      <button type="button" onClick={() => router.push("/sign-in")}>
        {children}
      </button>
    );
  }

  return null;
}
