"use server";

import type { _signUpSchema } from "@/lib/_schema";
import { signUpSchema } from "@/lib/_schema";

type serverResponse = {
  status: "success" | "error" | "no";
  message: string;
};

export async function signUpAction(_data: _signUpSchema) {
  const validateFields = signUpSchema.safeParse(_data);

  let result: serverResponse = { status: "no", message: "" };

  if (!validateFields.success) {
    result = {
      status: "error",
      message: "Account creation failed",
    };
    return { status: result.status, message: result.message };
  }

  console.log("Result", validateFields);

  result = {
    status: "success",
    message: "Account created successfully",
  };

  return {
    status: result.status,
    message: result.message,
  };
}
