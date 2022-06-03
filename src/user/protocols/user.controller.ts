import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from '@/user/data'
import { MongoUserRepository } from '@/user/infra'
import { User } from '../domain';
import { CreateUserDto } from './dto'

@Controller('user')
export class UserController {
  private userRepository = new MongoUserRepository()

  @Post('create')
  async teste(@Body()data: CreateUserDto): Promise<User> {
    const useCase = new CreateUser(this.userRepository)

    return await useCase.execute(data)
  }
}
