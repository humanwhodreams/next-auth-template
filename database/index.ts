import { drizzle } from "drizzle-orm/neon-http";
import envs from "@/lib/env";
import { neon } from "@neondatabase/serverless";

const sql = neon(envs.DATABASE_URL);
const db = drizzle(sql);

export { db };
