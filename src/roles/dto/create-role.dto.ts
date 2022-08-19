import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Uniq role value' })
  @IsString({ message: 'Must be a string' })
  readonly value: string;
  @ApiProperty({
    example: 'Role for ADMIN',
    description: 'Description for role',
  })
  @IsString({ message: 'Role description' })
  readonly description: string;
}
