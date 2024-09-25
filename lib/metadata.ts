import type { Metadata } from "next";

function generateMetadata(): Metadata {
  return {
    title: "Acme ✦ authentication",
    description:
      "Authentication implemented in React projects — providing flows, components, notes, and resources found across the Javascript/Typescript ecosystem.",
  } satisfies Metadata;
}

export { generateMetadata };
