import { CallToAction } from "@/components/call-to-action";
import { PageHeader } from "@/components/page-header";
import { UserButton } from "@/components/user-button";

export default function Home() {
  return (
    <>
      <PageHeader className="mt-24">
        <PageHeader.Title>Acme ✦ authentication</PageHeader.Title>
        <PageHeader.Lead>
          Authentication implemented in Next.js using Auth.js and other
          practices found across the Javascript ecosystem.
        </PageHeader.Lead>
        <CallToAction />
        <div className="mt-6">
          <UserButton
            description="signed in as"
            user={{ name: "Acme Raccoon" }}
          />
        </div>
      </PageHeader>
    </>
  );
}
