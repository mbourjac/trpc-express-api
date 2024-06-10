import type { z } from 'zod';
import type { logInUserSchema } from './auth.schemas';

export type LogInUser = z.infer<typeof logInUserSchema>;
