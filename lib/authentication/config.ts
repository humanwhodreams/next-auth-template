import { config } from "dotenv";
import { type NextAuthConfig } from "next-auth";

config({ path: ".env.local" });

const auth_config: NextAuthConfig = {
  providers: [],
};

export { auth_config };
