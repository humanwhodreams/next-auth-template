import * as React from "react";

import { Header } from "@/components/header";
import { ProfileSideBar } from "@/components/profile-sidebar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto">
        <section className="grid items-start justify-start grid-cols-[10%,_1fr] lg:grid-cols-[20%,_1fr] min-h-[calc(100vh-64px)]">
          <ProfileSideBar />
          <section className="px-4">{children}</section>
        </section>
      </main>
    </>
  );
}
