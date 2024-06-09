import { authRouter } from '../auth/auth.router';
import { router } from './trpc';

export const appRouter = router({
  auth: authRouter,
});
