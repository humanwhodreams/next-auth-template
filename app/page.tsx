import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section>The main section</section>
      <SiteFooter />
    </main>
  );
}
