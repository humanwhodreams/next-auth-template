/*
  A collection of zod schemas.
*/

import { z } from "zod";

/**
 * App sign in schema.
 * @param email the user's email address
 * @param password the user's password
 */
export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Must be 5 or more characters long" })
    .max(60, { message: "Must be 60 or fewer characters long" }),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
      message: "Must contain minimum 8 characters, 1 number, 1 lowercase, 1 uppercase and 1 special character",
    }),
});
export type _signInSchema = z.infer<typeof signInSchema>;

/**
 * App sign up schema.
 * @param email the user's email address
 * @param password the user's password
 * @param confirm the user's confirmed password
 */
export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirm: z.string(),
});
export type _signUpSchema = z.infer<typeof signUpSchema>;

/**
 * App forgot password schema.
 * @param email the user's email address
 */
export const forgotSchema = signInSchema.pick({ email: true });
export type _forgotSchema = z.infer<typeof forgotSchema>;
