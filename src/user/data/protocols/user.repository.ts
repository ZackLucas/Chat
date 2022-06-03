import { User } from '@/user/domain'

export interface UserRepository {
  create: (data: User) => Promise<User>
  findUser: (userId: string) => Promise<User>
}