import { z } from 'zod';

export const logInUserSchema = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'Please provide a username' }),
});
