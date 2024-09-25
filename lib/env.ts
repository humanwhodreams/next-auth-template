import { config } from "dotenv";

config({ path: ".env.local" });

const envs = {
  DATABASE_URL: process.env.DATABASE_URL as string,
};

export default envs;
