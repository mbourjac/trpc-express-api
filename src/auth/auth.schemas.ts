import { z } from 'zod';

export const loginUserSchema = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'Username field is required' }),
});
