import { BadRequestError } from '@/core/domain';
import { User } from '@/user/domain';
import { create } from 'domain';
import { UserRepository } from '../'

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(data: User.Data): Promise<User> {
    const payload = new User(data)
    
    const createdUser = await this.userRepository.create(payload)
    if (!createdUser) throw new BadRequestError('Erro ao criar Empresa')

    return createdUser
  }
}