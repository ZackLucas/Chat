import { BadRequestError } from '@/core/domain';
import { UserRepository } from '@/user/data';
import { User } from '@/user/domain';

import { UserSchema } from './';

export class MongoUserRepository implements UserRepository {
  async create(data: User): Promise<User> {
    return await UserSchema.create(data)
      .then((response) => response && new User(response))
      .catch(({ code }) => {
        if (code === 11000) throw new BadRequestError('Este email já esta existe.')
        return null
      });
  }

  async findUser(userId: string): Promise<User> {
    return await UserSchema.findOne({ userId })
      .then((response) => response && new User(response))
      .catch(() => null);
  }
}
