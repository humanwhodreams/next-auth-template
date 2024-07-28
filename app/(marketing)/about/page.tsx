import { SectionWrapper } from "@/components/section-wrapper";

export default function About() {
  return (
    <>
      <SectionWrapper>
        <div className="space-y-8">
          <p className="md:w-1/2">
            Next auth template is a scaffold Next.js project that includes the
            batteries required to build authentication for your Next.js projects
            powered by <span className="text-tertiary">Auth.js</span>.
          </p>

          <div>
            <p>The projects features.</p>
            <ul className="ml-8 list-disc">
              <li>auth components</li>
              <li>auth helper functions</li>
            </ul>
          </div>

          <div>
            <p>Tech Stack.</p>
            <ul className="ml-8 list-disc">
              <li>Next.js</li>
              <li>React + TypeScript</li>
              <li>Tailwindcss</li>
              <li>Shadcn/ui</li>
              <li>Auth.js</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p>
              ~ Created by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/from_enoabasi"
                className="text-muted-foreground hover:text-tertiary"
              >
                @fromenoabasi
              </a>
              .
            </p>
            <p>
              ~ Want to Contribute, visit the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fromenoabasi/next-auth-template"
                className="text-muted-foreground hover:text-tertiary"
              >
                repository
              </a>
              .
            </p>
            <p>
              ~ Want to support me,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                Buy me a coffee
              </a>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
