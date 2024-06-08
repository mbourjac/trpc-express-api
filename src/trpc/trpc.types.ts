import type { createContext } from './trpc.context';
import type { appRouter } from './trpc.router';

export type AppRouter = typeof appRouter;
export type Context = Awaited<typeof createContext>;
