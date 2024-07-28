"use server";

import type { _signInSchema } from "@/lib/_schema";
import { signInSchema } from "@/lib/_schema";

type serverResponse = {
  status: "success" | "error" | "no";
  message: string;
};

export async function signInAction(_data: _signInSchema) {
  const validateFields = signInSchema.safeParse(_data);

  let result: serverResponse = { status: "no", message: "" };

  if (!validateFields.success) {
    result = {
      status: "error",
      message: "Incorrect email or password",
    };
    return { status: result.status, message: result.message };
  }

  result = {
    status: "success",
    message: "Sign in successful",
  };

  return {
    status: result.status,
    message: result.message,
  };
}
