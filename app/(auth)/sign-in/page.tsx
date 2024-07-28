import { SectionWrapper } from "@/components/section-wrapper";
import { SigninForm } from "@/components/auth/signin-form";

export default function SignIn() {
  return (
    <SectionWrapper className="flex items-center justify-center">
      <SigninForm />
    </SectionWrapper>
  );
}
