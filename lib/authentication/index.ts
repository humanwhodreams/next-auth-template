import NextAuth from "next-auth";
import { auth_config } from "./config";

export const { handlers, signIn, signOut, auth } = NextAuth(auth_config);