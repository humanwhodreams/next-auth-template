import { ReactNode } from "react";
import { SiteHeader } from "@/components/shared/site-header";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Readonly<Props>) {
  return (
    <>
      <SiteHeader />
      <main className="my-12">{children}</main>
    </>
  );
}
