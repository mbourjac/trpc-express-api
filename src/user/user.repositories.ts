import { MockRepository } from '../helpers/mocks';
import type { User } from './user.types';

export type UserRepository = {
  getUserByUsername(username: string): Promise<User | null>;
};

class MockUserRepository
  extends MockRepository<User>
  implements UserRepository
{
  constructor() {
    super();
    this.init([]);
  }

  async getUserByUsername(username: User['username']): Promise<User | null> {
    await this.sleep();

    const user = this.data.find((user) => user.username === username);
    return user ?? null;
  }
}

export const mockUserRepository = new MockUserRepository();
