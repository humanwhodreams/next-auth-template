import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <Section>
      <h2>Devices</h2>
      <div className="w-full mb-3 space-y-4">
        <h3>Session management</h3>
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <p className="text-muted-foreground">Current session</p>
            </div>
            <div className="flex justify-end">
              <code className="text-sm">
                some random session code
              </code>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <p className="text-muted-foreground">Current device</p>
            </div>
            <div className="flex justify-end">
              <code className="text-sm">Laptop</code>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <p className="text-muted-foreground">Operating system</p>
            </div>
            <div className="flex justify-end">
              <code className="text-sm">Windows</code>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
