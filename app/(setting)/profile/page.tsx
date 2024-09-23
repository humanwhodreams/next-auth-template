import { EmailForm } from "@/components/forms/email-form";
import { NameForm } from "@/components/forms/name-form";
import { PasswordForm } from "@/components/forms/password-form";
import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <Section>
      <h2>Profile</h2>
      <NameForm />
      <EmailForm />
      <PasswordForm />
    </Section>
  );
}
