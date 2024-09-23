import type { Metadata } from "next";

function generateMetadata(): Metadata {
  return {
    title: "Next Auth Template",
    description:
      "Authentication in Next.js using Auth.js formerly known as Next-Auth.js",
  } satisfies Metadata;
}

export { generateMetadata };
