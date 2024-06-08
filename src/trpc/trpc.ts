import { initTRPC } from '@trpc/server';
import type { Context } from './trpc.types';

const t = initTRPC.context<Context>().create();

export const router = t.router;
