import "@/styles/globals.css";

import { geist_mono, geist_sans } from "@/font";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "relative antialiased font-geist-sans scroll-smooth",
          geist_sans.variable,
          geist_mono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
