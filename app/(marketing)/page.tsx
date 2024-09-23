import { CallToAction } from "@/components/call-to-action";
import { PageHeader } from "@/components/page-header";

export default function Home() {
  return (
    <>
      <PageHeader className="mt-24">
        <PageHeader.Title>Authentication example</PageHeader.Title>
        <PageHeader.Lead>
          Authentication implemented in Next.js using Auth.js and other
          practices found across the Javascript ecosystem.
        </PageHeader.Lead>
        <CallToAction />
      </PageHeader>
    </>
  );
}
