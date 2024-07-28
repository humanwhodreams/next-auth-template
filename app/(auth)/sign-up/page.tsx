import { SectionWrapper } from "@/components/section-wrapper";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignUp() {
  return (
    <SectionWrapper className="flex items-center justify-center">
      <SignupForm />
    </SectionWrapper>
  );
}
