import { Config, defineConfig } from "drizzle-kit";

import envs from "@/lib/env";

const config: Config = {
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./database/migrations",
  dbCredentials: {
    url: envs.DATABASE_URL,
  },
  verbose: true,
  strict: true,
};

export default defineConfig(config);
