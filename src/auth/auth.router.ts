import { TRPCError } from '@trpc/server';
import { createJwtToken } from '../lib/jwt/jwt.create';
import { router, publicProcedure } from '../trpc/trpc';
import { logInUserSchema } from './auth.schemas';

export const authRouter = router({
  login: publicProcedure
    .input(logInUserSchema)
    .mutation(async ({ input: { username }, ctx: { userRepository } }) => {
      const user = await userRepository.getUserByUsername(username);

      if (!user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid credentials',
        });
      }

      const token = createJwtToken(String(user.id));

      return {
        user,
        token,
      };
    }),
});
