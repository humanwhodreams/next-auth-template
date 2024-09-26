import { CallToAction } from "@/components/call-to-action";
import { PageHeader } from "@/components/page-header";
import { UserButton } from "@/components/user-button";
import { site_config } from "@/site.config";

export default function Home() {
  const site_title = site_config.title;
  const site_description = site_config.description;
  return (
    <>
      <PageHeader className="mt-24">
        <PageHeader.Title>
          <>{site_title}</>
        </PageHeader.Title>
        <PageHeader.Lead>
          <>{site_description}</>
        </PageHeader.Lead>
        <CallToAction />
        <div className="mt-6">
          <UserButton
            description="signed in as"
            user={{ name: "Humanwhodreams" }}
          />
        </div>
      </PageHeader>
    </>
  );
}
