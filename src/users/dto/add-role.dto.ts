import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: '1', description: 'user id (pk)' })
  @IsNumber({}, { message: 'Must be a number' })
  userId: number;

  @ApiProperty({ example: 'ADMIN', description: 'user id (pk)' })
  @IsString({ message: 'Must be ADMIN or USER' })
  value: string;
}
