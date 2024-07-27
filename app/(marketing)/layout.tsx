import { ReactNode } from "react";
import { SiteHeader } from "@/components/shared/site-header";

interface Props {
  children: ReactNode;
}

export default function MarketingLayout({ children }: Readonly<Props>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
