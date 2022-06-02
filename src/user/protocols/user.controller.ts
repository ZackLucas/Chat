import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('test')
  async teste(): Promise<string> {
    return 'test';
  }
}
