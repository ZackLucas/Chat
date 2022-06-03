import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: String,
    name: 'name'
  })
  name: string;

  @ApiProperty({
    required: true
  })
  email: string;

  @ApiProperty()
  age: number

  @ApiProperty()
  phoneNumber: string
}
