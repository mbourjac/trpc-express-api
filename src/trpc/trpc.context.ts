import type * as trpcExpress from '@trpc/server/adapters/express';
import { verifyJwtToken } from '../lib/jwt/jwt.verify';
import { mockUsers } from '../user/user.mocks';
import {
  mockUserRepository,
  type UserRepository,
} from '../user/user.repositories';

export const createContext = ({
  req,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUserIdFromAuthHeader = () => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer')) {
      return null;
    }

    const token = authHeader.split(' ')[1];

    return verifyJwtToken(token);
  };

  const userId = getUserIdFromAuthHeader();

  return {
    userId,
    userRepository: mockUserRepository.withData(
      mockUsers,
    ) satisfies UserRepository,
  };
};
