import { user_schema } from "./user";
import { z } from "zod";

const profile_schema = user_schema.pick({ bio: true });

type Profile_Schema = z.infer<typeof profile_schema>;

export { profile_schema };

export type { Profile_Schema };
