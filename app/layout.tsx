import "@/style/globals.css";

import { _inter, _jetbrains } from "@/lib/local-fonts";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Next Auth Template",
  description:
    "Kickstart your Next.js project with my template - It is Free by the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "dark antialiased font-Inter",
          _inter.variable,
          _jetbrains.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
