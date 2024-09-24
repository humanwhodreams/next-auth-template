import { z } from "zod";

const password_schema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(25, "Password must be fewer than 25 characters")
  .regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,26}$/,
    "Password format - 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
  );

const user_schema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(24, "name must be fewer than 24 characters")
    .optional(),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .max(180, "Email must be fewer than 180 characters")
    .email()
    .trim(),
  password: password_schema,
  confirm_password: password_schema.optional(),
  bio: z
    .string()
    .max(300, "Must be fewer than 300 characters")
    .trim()
    .optional(),
});

type User_Schema = z.infer<typeof user_schema>;

export { user_schema };

export type { User_Schema };
