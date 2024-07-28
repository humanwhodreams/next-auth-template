import { Button } from "@/components/ui/button";
import { FaRegHandPointer } from "react-icons/fa";
import { SectionWrapper } from "@/components/section-wrapper";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

function Hero() {
  return (
    <SectionWrapper>
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
          Kick start your project with my Auth.js template!{" "}
          <span className="text-sky-500">&mdash; It is free.</span>
        </h1>
        <p className="flex items-center mt-4 text-sm text-muted-foreground">
          <FaRegHandPointer className="hidden md:flex-shrink-0 md:size-4 md:mr-2 md:rotate-180 md:text-muted-foreground md:block" />
          Check the repo below. Happy hacking!
        </p>

        <div className="flex flex-col mt-8 gap-y-2 md:flex-row md:items-center md:gap-x-4">
          <Button type="button" variant={"default"}>
            See repository
          </Button>
          <Button type="button" variant={"secondary"}>
            Browse components
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
