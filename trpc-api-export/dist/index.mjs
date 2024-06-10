// src/auth/auth.schemas.ts
import { z } from "zod";
var logInUserSchema = z.object({
  username: z.string().trim().toLowerCase().min(1, { message: "Please provide a username" })
});
export {
  logInUserSchema
};
