import { DangerForm } from "@/components/forms/danger-form";
import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <Section>
      <h2>Account</h2>
      <div className="w-full p-4 mb-4 space-y-2 border rounded-md border-destructive bg-destructive/5">
        <h3 className="text-destructive">Danger Zone</h3>
        <p className="p">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </p>
        <DangerForm />
      </div>
    </Section>
  );
}
