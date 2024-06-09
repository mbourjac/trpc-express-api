import type * as trpcExpress from '@trpc/server/adapters/express';
import { mockUsers } from '../user/user.mocks';
import {
  mockUserRepository,
  type UserRepository,
} from '../user/user.repositories';

export const createContext = ({}: trpcExpress.CreateExpressContextOptions) => {
  return {
    userRepository: mockUserRepository.withData(
      mockUsers,
    ) satisfies UserRepository,
  };
};
