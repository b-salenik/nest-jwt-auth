import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, MIN } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Uniq user email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Must be correct email' })
  readonly email: string;
  @IsString({ message: 'Must be a string' })
  @Length(4, 23, {
    message: 'password must be not shorter than 4 and not bigger 23',
  })
  @ApiProperty({ example: '12345678', description: 'User password' })
  readonly password: string;
}
