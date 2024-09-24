import { user_schema } from "./user";
import { z } from "zod";

const sign_in_schema = user_schema.pick({ email: true, password: true });
const sign_up_schema = user_schema
  .pick({
    name: true,
    email: true,
    password: true,
    confirm_password: true,
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });
const forgot_password_schema = user_schema.pick({ email: true });
const remember_password_schema = user_schema.pick({
  password: true,
  confirm_password: true,
});

type Sign_In_Schema = z.infer<typeof sign_in_schema>;
type Sign_Up_Schema = z.infer<typeof sign_up_schema>;
type Forgot_Password_Schema = z.infer<typeof forgot_password_schema>;
type Remember_Password_Schema = z.infer<typeof remember_password_schema>;

export {
  forgot_password_schema,
  remember_password_schema,
  sign_in_schema,
  sign_up_schema,
};
export type {
  Forgot_Password_Schema,
  Remember_Password_Schema,
  Sign_In_Schema,
  Sign_Up_Schema,
};
