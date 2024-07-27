import "@/style/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  );
}
